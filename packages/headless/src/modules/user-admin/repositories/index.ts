import { Injectable } from '@nestjs/common';
import { Otp } from 'src/entity/otp';
import { UserAdmin } from 'src/entity/user-admin';
import { UserAdminProfileUpdateDto, UserAdminSignupReq } from '../rest/dto/signup.dto';
import { IUserAdminDatabase } from './user-admin.db.interface';

@Injectable()
export class UserAdminRepository {
  constructor(private db: IUserAdminDatabase) {}

  async create(body: UserAdminSignupReq): Promise<Partial<UserAdmin>> {
    return await this.db.create(body);
  }

  async updateProfile(query: Record<string, any>, body: UserAdminProfileUpdateDto): Promise<Partial<UserAdmin>> {
    return await this.db.updateProfile(query, body);
  }

  async findOne(query: Record<string, any>): Promise<Partial<UserAdmin>> {
    return await this.db.findOne(query);
  }

  async sendOtp(data: Otp): Promise<Otp | null> {
    return await this.db.sendOtp(data);
  }

  async verifyOtp(query: Record<string, any>): Promise<Otp | null> {
    return await this.db.verifyOtp(query);
  }

  async findOtp(query: Record<string, any>): Promise<Otp | null> {
    return await this.db.findOtp(query);
  }

  async deleteOtp(query: Record<string, any>): Promise<Otp | null> {
    return await this.db.deleteOtp(query);
  }

  async updateOtp(
    query: Record<string, any>,
    data: object,
  ): Promise<Otp | null> {
    return await this.db.updateOtp(query, data);
  }
}
