import { Injectable } from '@nestjs/common';
import { Otp } from 'src/entity/otp';
import { UserAdmin } from 'src/entity/user-admin';
import { IUserAdminDatabase } from 'src/modules/user-admin/repositories/user-admin.db.interface';
import {
  UserAdminProfileUpdateDto,
  UserAdminSignupReq,
} from 'src/modules/user-admin/rest/dto/signup.dto';
import { OtpModel } from '../otp/otp.model';
import { UserAdminModel } from './user-admin.model';

@Injectable()
export class UserAdminDatabase implements IUserAdminDatabase {
  async findOne(
    query: Record<string, string>,
  ): Promise<Partial<UserAdmin> | null> {
    try {
      return await UserAdminModel.findOne({ ...query }, { _id: 0 }).lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async create(body: UserAdminSignupReq): Promise<Partial<UserAdmin> | null> {
    try {
      const data = await UserAdminModel.create(body);
      if (data?.password) {
        delete data.password;
      }
      return data;
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async updateProfile(
    query: Record<string, any>,
    data: UserAdminProfileUpdateDto,
  ): Promise<Partial<UserAdmin> | null> {
    try {
      return await UserAdminModel.findOneAndUpdate(query, { $set: data });
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  // --- handle mfa otp ---
  async sendOtp(data: Otp): Promise<Otp | null> {
    return await OtpModel.create(data);
  }

  async verifyOtp(query: Record<string, any>): Promise<Otp | null> {
    const otp = await OtpModel.findOne(query);
    if (otp) {
      return await this.updateOtp(query, {
        otpVerifiedAt: Date.now(),
        isVerified: true,
      });
    }else{
      return null
    }
  }

  async findOtp(query: Record<string, any>): Promise<Otp | null> {
    return await OtpModel.findOne(query);
  }

  async updateOtp(
    query: Record<string, any>,
    data: object,
  ): Promise<Otp | null> {
    const updatedData =  await OtpModel.findOneAndUpdate(query, { $set: data }).lean();
    return updatedData
  }

  async deleteOtp(query: Record<string, any>): Promise<Otp | null> {
    return await OtpModel.findOneAndDelete(query);
  }
}
