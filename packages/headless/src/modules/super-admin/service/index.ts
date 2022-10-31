import { HttpStatus, Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { SuperAdmin } from 'src/entity/super-admin';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { SuperAdminRepository } from '../repositories';
import { SuperAdminLoginDto, SuperAdminLoginRes } from '../rest/dto/login.dto';
import {
  MfaType,
  SuperAdminProdileUpdateDto,
  SuperAdminSignupReq,
} from '../rest/dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { authConfig } from 'config/auth';
import { JwtService } from '@nestjs/jwt';
import { AdminJwtPayload } from 'src/entity/auth';
import { Otp } from 'src/entity/otp';
import { MfaOtpDto, MfaVerifyOtpDto } from '../rest/dto/otp.dto';
import { OtpResponseDto } from '../rest/dto/mfa.dto';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class SuperAdminService {
  constructor(
    private readonly superAdminRepository: SuperAdminRepository,
    private readonly jwtService: JwtService,
  ) {}

  async superAdminCreate(
    body: SuperAdminSignupReq,
  ): Promise<IServiceResponse<Partial<SuperAdmin>>> {
    let isExist = await this.superAdminRepository.findOne({
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
      isExist = await this.superAdminRepository.findOne({ phone: body.phone });
      if (isExist?.phone === body.phone) {
        return errorResponse(
          'This phone number is already exist.',
          null,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (!body?.password) {
      return errorResponse('Password required!', null, HttpStatus.BAD_REQUEST);
    }

    body.password = await bcrypt.hash(body.password, authConfig.salt);

    const newSuperAdmin = await this.superAdminRepository.create(body);
    if (newSuperAdmin) {
      return successResponse(PartialType(SuperAdmin), newSuperAdmin);
    }
    return errorResponse(
      'Error in create super admin',
      null,
      HttpStatus.CONFLICT,
    );
  }

  async superAdminLogin(
    body: SuperAdminLoginDto,
  ): Promise<IServiceResponse<SuperAdminLoginRes>> {
    const userData = await this.superAdminRepository.findOne({
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
      // handle mfa
    }

    const payload: AdminJwtPayload = {
      id: userData.id,
      username: userData.firstName + ' ' + userData.lastName,
      logInTime: Date.now(),
      role: userData.role,
    };
    const token = this.jwtService.sign(payload);
    return successResponse(SuperAdminLoginRes, { token });
  }

  //--- Multi factor auth functionalities---

  private async syncOtp(body: MfaOtpDto, isEmail: boolean): Promise<boolean> {
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
    const payload: Otp = {
      email: '',
      phone: '',
      otp: 1234,
      otpExpireTime: Date.now() + FIVE_MINUTES,
      isVerified: false,
      otpVerifiedAt: 0,
    };

    let query: Record<string, any> = { isVerified: false };
    if (isEmail) {
      query.email = body.email;
      payload.email = body.email;
    } else {
      query.phone = body.phone;
      payload.phone = body.phone;
    }

    const isOtpDataExist = await this.superAdminRepository.findOtp(query);
    if (isOtpDataExist) {
      // update otp
      const newData = { ...payload, otpExpireTime: Date.now() + FIVE_MINUTES };
      const updateData = await this.superAdminRepository.updateOtp(
        query,
        newData,
      );
      return updateData ? true : false;
    } else {
      // add new otp
      const createOtp = await this.superAdminRepository.sendOtp(payload);
      return createOtp ? true : false;
    }
  }

  async addMfa(
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

    let isEmail = false;
    if ((body.email && !body.phone) || (body.email && body.phone)) {
      isEmail = true;
    }
    const syncOtp = await this.syncOtp(body, isEmail);

    console.log({ syncOtp }, { isEmail });

    if (syncOtp) {
      if (isEmail) {
        //sendOtpRequestWithEmail({otp: payload.otp, email: payload.email})
      } else {
        //sendOtpRequestWithPhone({otp: payload.otp, phone: payload.phone})
      }
      const result = {
        message: `OTP has been sent to ${
          body?.email ? body.email : body.phone
        }`,
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
      isVerified: false,
      otp: body.otp,
      otpExpireTime: { $gt: Date.now() },
    };

    let isEmail = false;
    if ((body.email && !body.phone) || (body.email && body.phone)) {
      isEmail = true;
      query.email = body.email;
    } else {
      query.phone = body.phone;
    }

    const isVerified = await this.superAdminRepository.verifyOtp(query);
    if (isVerified) {
      let newProfileData: SuperAdminProdileUpdateDto = {
        isMfaEnabled: true,
        mfaType: MfaType.EMAIL,
      };
      if (query?.phone) {
        (newProfileData.phone = body.phone),
          (newProfileData.mfaType = MfaType.PHONE);
      }
      const updateProfile = await this.superAdminRepository.updateProfile(
        { id: userId },
        newProfileData,
      );
      if (updateProfile) {
        const result = {
          message: `OTP has been verified`,
        };
        await this.superAdminRepository.deleteOtp({
          ...query,
          isVerified: true,
        });
        return successResponse(null, result);
      } else {
        isEmail
          ? await this.superAdminRepository.updateOtp(
              { email: query.email },
              { isVerified: false },
            )
          : await this.superAdminRepository.updateOtp(
              { phone: query.phone },
              { isVerified: false },
            );
        return errorResponse('Profile not updated', null, HttpStatus.CONFLICT);
      }
    } else {
      return errorResponse('OTP is not verified', null, HttpStatus.CONFLICT);
    }
  }
}
