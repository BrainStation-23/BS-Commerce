import { Injectable } from '@nestjs/common';
import { StoreAdmin } from 'src/entity/store-admin';
import { StoreAdminRepository } from '../repositories';
import * as bcrypt from 'bcrypt';
import { Otp } from 'src/entity/otp';
import { MfaOtpDto } from '../rest/dto/otp.dto';
import { AdminJwtPayload } from 'src/entity/auth';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class StoreAdminHelperService {
  constructor(private readonly storeAdminRepository: StoreAdminRepository) {}

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
    const isOtpDataExist = await this.storeAdminRepository.findOtp(query);
    if (isOtpDataExist) {
      // update otp
      const newData = { ...payload, otpExpireTime: Date.now() + FIVE_MINUTES };
      otpData = await this.storeAdminRepository.updateOtp(query, newData);
    } else {
      // add new otp
      otpData = await this.storeAdminRepository.sendOtp(payload);
    }
    return otpData;
  }

  async checkPassword(
    body: Partial<StoreAdmin>,
    storeId = '',
  ): Promise<boolean> {
    let query = storeId === '' ? { email: body.email } : { id: storeId };
    const storeData = await this.storeAdminRepository.findOne(query);
    if (!storeData) {
      return false;
    }
    const matchPassword = await bcrypt.compare(
      body.password,
      storeData.password,
    );
    if (!matchPassword) {
      return false;
    }
    return true;
  }

  async createStoreAdminJwtPayload(
    userData: Partial<StoreAdmin>,
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
