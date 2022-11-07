import { Injectable } from '@nestjs/common';
import { query } from 'express';
import { Otp } from 'src/entity/otp';
import { SuperAdmin } from 'src/entity/super-admin';
import { ISuperAdminDatabase } from 'src/modules/super-admin/repositories/super-admin.db.interface';
import {
  SuperAdminProfileUpdateDto,
  SuperAdminSignupReq,
} from 'src/modules/super-admin/rest/dto/signup.dto';
import { OtpModel } from '../otp/otp.model';
import { SuperAdminModel } from './super-admin.model';

@Injectable()
export class SuperAdminDatabase implements ISuperAdminDatabase {
  async findOne(
    query: Record<string, string>,
  ): Promise<Partial<SuperAdmin> | null> {
    try {
      return await SuperAdminModel.findOne({ ...query }, { _id: 0 }).lean();
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async create(body: SuperAdminSignupReq): Promise<Partial<SuperAdmin> | null> {
    try {
      const data = await SuperAdminModel.create(body);
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
    data: SuperAdminProfileUpdateDto,
  ): Promise<Partial<SuperAdmin> | null> {
    try {
      return await SuperAdminModel.findOneAndUpdate(query, { $set: data });
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
