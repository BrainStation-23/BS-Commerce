import { Injectable } from '@nestjs/common';
import { Otp } from 'src/entity/otp';
import { Role } from 'src/entity/role';
import { StoreAdmin } from 'src/entity/store-admin';
import { IStoreAdminDatabase } from 'src/modules/store-admin/repositories/store-admin.db.interface';
import {
  StoreAdminProfileUpdateDto,
  StoreAdminSignupReq,
} from 'src/modules/store-admin/rest/dto/signup.dto';
import { OtpModel } from '../otp/otp.model';
import { StoreAdminRoleModel } from '../store-admin-role/store-admin.role.model';
import { StoreAdminModel } from './store-admin.model';

@Injectable()
export class StoreAdminDatabase implements IStoreAdminDatabase {
  async findOne(
    query: Record<string, string>,
  ): Promise<Partial<StoreAdmin> | null> {
    try {
      return await StoreAdminModel.findOne({ ...query }, { _id: 0 }).lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async findOneRole(query: Record<string, any>): Promise<Partial<Role>> {
    try {
      return await StoreAdminRoleModel.findOne({ ...query }, { _id: 0 }).lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async create(body: StoreAdmin): Promise<Partial<StoreAdmin> | null> {
    try {
      const data = await StoreAdminModel.create(body);
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
    data: StoreAdminProfileUpdateDto,
  ): Promise<Partial<StoreAdmin> | null> {
    try {
      return await StoreAdminModel.findOneAndUpdate(query, { $set: data });
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
    } else {
      return null;
    }
  }

  async findOtp(query: Record<string, any>): Promise<Otp | null> {
    return await OtpModel.findOne(query);
  }

  async updateOtp(
    query: Record<string, any>,
    data: object,
  ): Promise<Otp | null> {
    const updatedData = await OtpModel.findOneAndUpdate(query, {
      $set: data,
    }).lean();
    return updatedData;
  }

  async deleteOtp(query: Record<string, any>): Promise<Otp | null> {
    return await OtpModel.findOneAndDelete(query);
  }
}
