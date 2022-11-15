import { HttpStatus, Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { RoleInfo, StoreAdmin, StoreAdminInfo } from 'src/entity/store-admin';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { StoreAdminRepository } from '../repositories';
import { StoreAdminLoginDto, StoreAdminLoginRes } from '../rest/dto/login.dto';
import {
  CreateStoreAdminDto,
  MfaType,
  StoreAdminProfileUpdateDto,
  StoreAdminSignupReq,
} from '../rest/dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'config/auth';
import { JwtService } from '@nestjs/jwt';
import { AdminJwtPayload } from 'src/entity/auth';
import { Otp } from 'src/entity/otp';
import { MfaOtpDto, MfaVerifyOtpDto } from '../rest/dto/otp.dto';
import { OtpResponseDto } from '../rest/dto/mfa.dto';
import { StoreAdminHelperService } from './helper.service';
import { RoleTypeEnum } from 'models';

@Injectable()
export class StoreAdminService {
  constructor(
    private readonly storeAdminRepository: StoreAdminRepository,
    private readonly storeAdminHelperService: StoreAdminHelperService,
    private readonly jwtService: JwtService,
  ) {}

  async getProfileData(
    id: string,
  ): Promise<IServiceResponse<Partial<StoreAdmin>>> {
    const profileData = await this.storeAdminRepository.findOne({ id });
    if (profileData) {
      delete profileData.password;
      delete profileData.isMfaEnabled;
      delete profileData.mfaType;
      return successResponse(StoreAdmin, profileData);
    }
    return errorResponse('Store not found', null, HttpStatus.NOT_FOUND);
  }

  async storeAdminCreate(
    storeAdminInfo: StoreAdminInfo,
    body: StoreAdminSignupReq,
  ): Promise<IServiceResponse<Partial<StoreAdmin>>> {
    let isExist = await this.storeAdminRepository.findOne({
      storeId: storeAdminInfo.storeId,
      email: body.email,
    });
    if (isExist?.email === body.email) {
      return errorResponse(
        'This email is already exist.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (body?.phone) {
      body.phone = body.countryCode+body.phone
      delete body.countryCode
      isExist = await this.storeAdminRepository.findOne({ phone: body.phone });
      if (isExist?.phone === body.phone) {
        return errorResponse(
          'This phone number is already exist.',
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    body.password = await bcrypt.hash(body.password, authConfig.salt);
    const roleData = await this.storeAdminRepository.findOneyRole({id: body.roleId})
    if(!roleData){
      return errorResponse(
        'This role is invalid!',
        null,
        HttpStatus.CONFLICT,
      );
    }
    // const isValidBranch: boolean = await checkIsStoreContainsTheBranch({branchIds: body.branchId})
    // if(!isValidBranch){
    //   return errorResponse(
    //     'Invalid branch provided!',
    //     null,
    //     HttpStatus.CONFLICT,
    //   );
    // }
    const role: RoleInfo = {
      name: roleData.name,
      roleId: roleData.id,
      roleType: roleData.roleType 
    }
    delete body.roleId;
    const payload: StoreAdmin = {
      ...body, role, storeId: storeAdminInfo.storeId
    }
    const newStoreAdmin = await this.storeAdminRepository.create(payload);
    if (newStoreAdmin) {
      return successResponse(PartialType(StoreAdmin), newStoreAdmin);
    }
    return errorResponse(
      'Error in create user admin',
      null,
      HttpStatus.CONFLICT,
    );
  }

  private async handleMfaLogin(
    userData: Partial<StoreAdmin>,
  ): Promise<IServiceResponse<OtpResponseDto>> {
    const isEmail = userData.mfaType === 'EMAIL' ? true : false;
    const { id, email, phone, password } = userData;
    const sendOtp = isEmail
      ? await this.sendMfaOtp(id, { email, password })
      : await this.sendMfaOtp(id, { phone, password });
    return sendOtp;
  }

  async storeAdminLogin(
    body: StoreAdminLoginDto,
  ): Promise<IServiceResponse<StoreAdminLoginRes | OtpResponseDto>> {
    const userData = await this.storeAdminRepository.findOne({
      email: body.email,
    });
    if (!userData) {
      return errorResponse(
        'Invalid credentials!',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const matchPassword = await bcrypt.compare(
      body.password,
      userData.password,
    );
    if (!matchPassword) {
      return errorResponse(
        'Invalid credentials!',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (userData.isMfaEnabled) {
      userData.password = body.password;
      const res = await this.handleMfaLogin(userData);
      return res;
    }
    const payload: AdminJwtPayload =
      await this.storeAdminHelperService.createStoreAdminJwtPayload(userData);
    const token = this.jwtService.sign(payload);
    return successResponse(StoreAdminLoginRes, { token });
  }

  async verifyMfaLoginOtp(
    body: MfaVerifyOtpDto,
  ): Promise<IServiceResponse<StoreAdminLoginRes>> {
    if (!body.email && !body.phone) {
      return errorResponse(
        'Require email or phone',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    let query: Record<string, any> = {
      isVerified: false,
      id: body.id,
      otp: body.otp,
      otpExpireTime: { $gt: Date.now() },
    };

    if (body.email) {
      query.email = body.email;
    } else {
      query.phone = body.phone;
    }

    const verifiedData = await this.storeAdminRepository.verifyOtp(query);
    if (verifiedData) {
      await this.storeAdminRepository.deleteOtp({
        ...query,
        isVerified: true,
      });
      const userData = await this.storeAdminRepository.findOne({
        id: verifiedData.userId,
      });
      const payload: AdminJwtPayload =
        await this.storeAdminHelperService.createStoreAdminJwtPayload(userData);
      const token = this.jwtService.sign(payload);
      return successResponse(StoreAdminLoginRes, { token });
    } else {
      return errorResponse('OTP is not verified', null, HttpStatus.CONFLICT);
    }
  }

  //--- Multi factor auth functionalities---

  async sendMfaOtp(
    userId: string,
    body: MfaOtpDto,
  ): Promise<IServiceResponse<OtpResponseDto>> {
    if (!body.email && !body.phone) {
      return errorResponse(
        'Require email or phone',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const isPasswordMatched = await this.storeAdminHelperService.checkPassword(
      body,
      userId,
    );
    if (!isPasswordMatched) {
      return errorResponse(
        'Require valid password',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    let isEmail = false;
    if (body.email) {
      isEmail = true;
    }
    const syncOtp = await this.storeAdminHelperService.syncOtp(
      userId,
      body,
      isEmail,
    );
    if (syncOtp) {
      if (isEmail) {
        //sendOtpRequestWithEmail({otp: payload.otp, email: payload.email})
      } else {
        //sendOtpRequestWithPhone({otp: payload.otp, phone: payload.phone})
      }
      const result = {
        message: `OTP has been sent to ${isEmail ? body.email : body.phone}`,
        id: syncOtp.id,
      };
      return successResponse(null, result);
    } else {
      return errorResponse('Something went wrong', null, HttpStatus.CONFLICT);
    }
  }

  async verifiyMfaOtp(
    userId: string,
    body: MfaVerifyOtpDto,
  ): Promise<IServiceResponse<OtpResponseDto>> {
    if (!body.email && !body.phone) {
      return errorResponse(
        'Require email or phone',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    let query: Record<string, any> = {
      userId,
      isVerified: false,
      id: body.id,
      otp: body.otp,
      otpExpireTime: { $gt: Date.now() },
    };

    if (body.email) {
      query.email = body.email;
    } else {
      query.phone = body.phone;
    }

    const verifiedData = await this.storeAdminRepository.verifyOtp(query);
    if (verifiedData) {
      let newProfileData: StoreAdminProfileUpdateDto = {
        isMfaEnabled: true,
        mfaType: MfaType.EMAIL,
      };
      if (query?.phone) {
        (newProfileData.phone = body.phone),
          (newProfileData.mfaType = MfaType.PHONE);
      }
      const updateProfile = await this.storeAdminRepository.updateProfile(
        { id: userId },
        newProfileData,
      );
      if (updateProfile) {
        const result = {
          message: `OTP has been verified`,
        };
        await this.storeAdminRepository.deleteOtp({
          ...query,
          isVerified: true,
        });
        return successResponse(null, result);
      } else {
        await this.storeAdminRepository.updateOtp(
          { ...query, isVerified: true },
          { isVerified: false },
        );
        return errorResponse(
          'OTP is not verified, something went wrong in update profile',
          null,
          HttpStatus.CONFLICT,
        );
      }
    } else {
      return errorResponse('OTP is not verified', null, HttpStatus.CONFLICT);
    }
  }
}
