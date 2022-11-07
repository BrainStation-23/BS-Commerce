import { Injectable } from '@nestjs/common';
import { UserAdmin } from 'src/entity/user-admin';
import { UserAdminRepository } from '../repositories';
import * as bcrypt from 'bcrypt';
import { Otp } from 'src/entity/otp';
import { MfaOtpDto } from '../rest/dto/otp.dto';
import { AdminJwtPayload } from 'src/entity/auth';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class UserAdminHelperService {
  constructor(private readonly userAdminRepository: UserAdminRepository) {}

  async syncOtp(
    userId: string,
    body: MfaOtpDto,
    isEmail: boolean,
  ): Promise<Otp> {
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
    const payload: Otp = {
      userId,
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

    let otpData: Otp = null;
    const isOtpDataExist = await this.userAdminRepository.findOtp(query);
    if (isOtpDataExist) {
      // update otp
      const newData = { ...payload, otpExpireTime: Date.now() + FIVE_MINUTES };
      otpData = await this.userAdminRepository.updateOtp(query, newData);
    } else {
      // add new otp
      otpData = await this.userAdminRepository.sendOtp(payload);
    }
    return otpData;
  }

  async checkPassword(
    body: Partial<UserAdmin>,
    userId = '',
  ): Promise<boolean> {
    let query = userId === '' ? { email: body.email } : { id: userId };
    const userData = await this.userAdminRepository.findOne(query);
    if (!userData) {
      return false;
    }
    const matchPassword = await bcrypt.compare(
      body.password,
      userData.password,
    );
    if (!matchPassword) {
      return false;
    }
    return true;
  }

  async createUserAdminJwtPayload(
    userData: Partial<UserAdmin>,
  ): Promise<AdminJwtPayload> {
    const payload: AdminJwtPayload = {
      id: userData.id,
      username: userData.firstName + ' ' + userData.lastName,
      logInTime: Date.now(),
      role: userData.role,
      storeId: userData.storeId,
    };
    return payload;
  }
}
