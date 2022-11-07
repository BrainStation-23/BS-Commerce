import { HttpStatus, Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { UserAdmin } from 'src/entity/user-admin';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { UserAdminRepository } from '../repositories';
import { UserAdminLoginDto, UserAdminLoginRes } from '../rest/dto/login.dto';
import {
  MfaType,
  UserAdminProfileUpdateDto,
  UserAdminSignupReq,
} from '../rest/dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'config/auth';
import { JwtService } from '@nestjs/jwt';
import { AdminJwtPayload } from 'src/entity/auth';
import { Otp } from 'src/entity/otp';
import { MfaOtpDto, MfaVerifyOtpDto } from '../rest/dto/otp.dto';
import { OtpResponseDto } from '../rest/dto/mfa.dto';
import { UserAdminHelperService } from './helper.service';

@Injectable()
export class UserAdminService {
  constructor(
    private readonly userAdminRepository: UserAdminRepository,
    private readonly userAdminHelperService: UserAdminHelperService,
    private readonly jwtService: JwtService,
  ) {}

  async getProfileData(
    id: string,
  ): Promise<IServiceResponse<Partial<UserAdmin>>> {
    const profileData = await this.userAdminRepository.findOne({ id });
    if (profileData) {
      delete profileData.password;
      delete profileData.isMfaEnabled;
      delete profileData.mfaType;
      return successResponse(UserAdmin, profileData);
    }
    return errorResponse('User not found', null, HttpStatus.NOT_FOUND);
  }

  async userAdminCreate(
    body: UserAdminSignupReq,
  ): Promise<IServiceResponse<Partial<UserAdmin>>> {
    let isExist = await this.userAdminRepository.findOne({
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
      isExist = await this.userAdminRepository.findOne({ phone: body.phone });
      if (isExist?.phone === body.phone) {
        return errorResponse(
          'This phone number is already exist.',
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    body.password = await bcrypt.hash(body.password, authConfig.salt);

    const newUserAdmin = await this.userAdminRepository.create(body);
    if (newUserAdmin) {
      return successResponse(PartialType(UserAdmin), newUserAdmin);
    }
    return errorResponse(
      'Error in create user admin',
      null,
      HttpStatus.CONFLICT,
    );
  }

  private async handleMfaLogin(
    userData: Partial<UserAdmin>,
  ): Promise<IServiceResponse<OtpResponseDto>> {
    const isEmail = userData.mfaType === 'EMAIL' ? true : false;
    const { id, email, phone, password } = userData;
    const sendOtp = isEmail
      ? await this.sendMfaOtp(id, { email, password })
      : await this.sendMfaOtp(id, { phone, password });
    return sendOtp;
  }

  async userAdminLogin(
    body: UserAdminLoginDto,
  ): Promise<IServiceResponse<UserAdminLoginRes | OtpResponseDto>> {
    const userData = await this.userAdminRepository.findOne({
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
      await this.userAdminHelperService.createUserAdminJwtPayload(userData);
    const token = this.jwtService.sign(payload);
    return successResponse(UserAdminLoginRes, { token });
  }

  async verifyMfaLoginOtp(
    body: MfaVerifyOtpDto,
  ): Promise<IServiceResponse<UserAdminLoginRes>> {
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

    const verifiedData = await this.userAdminRepository.verifyOtp(query);
    if (verifiedData) {
      await this.userAdminRepository.deleteOtp({
        ...query,
        isVerified: true,
      });
      const userData = await this.userAdminRepository.findOne({
        id: verifiedData.userId,
      });
      const payload: AdminJwtPayload =
        await this.userAdminHelperService.createUserAdminJwtPayload(userData);
      const token = this.jwtService.sign(payload);
      return successResponse(UserAdminLoginRes, { token });
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

    const isPasswordMatched = await this.userAdminHelperService.checkPassword(
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
    const syncOtp = await this.userAdminHelperService.syncOtp(
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

    const verifiedData = await this.userAdminRepository.verifyOtp(query);
    if (verifiedData) {
      let newProfileData: UserAdminProfileUpdateDto = {
        isMfaEnabled: true,
        mfaType: MfaType.EMAIL,
      };
      if (query?.phone) {
        (newProfileData.phone = body.phone),
          (newProfileData.mfaType = MfaType.PHONE);
      }
      const updateProfile = await this.userAdminRepository.updateProfile(
        { id: userId },
        newProfileData,
      );
      if (updateProfile) {
        const result = {
          message: `OTP has been verified`,
        };
        await this.userAdminRepository.deleteOtp({
          ...query,
          isVerified: true,
        });
        return successResponse(null, result);
      } else {
        await this.userAdminRepository.updateOtp(
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
