import { Injectable } from '@nestjs/common';
import { Otp } from 'src/entity/otp';
import { Role } from 'src/entity/role';
import { StoreAdmin } from 'src/entity/store-admin';
import { StoreAdminProfileUpdateDto, StoreAdminSignupReq } from '../rest/dto/signup.dto';
import { IStoreAdminDatabase } from './store-admin.db.interface';

@Injectable()
export class StoreAdminRepository {
  constructor(private db: IStoreAdminDatabase) {}

  async create(body: StoreAdmin): Promise<Partial<StoreAdmin>> {
    return await this.db.create(body);
  }

  async updateProfile(query: Record<string, any>, body: StoreAdminProfileUpdateDto): Promise<Partial<StoreAdmin>> {
    return await this.db.updateProfile(query, body);
  }

  async findOne(query: Record<string, any>): Promise<Partial<StoreAdmin>> {
    return await this.db.findOne(query);
  }

  async getStore(query: Record<string, any>): Promise<string | null> {
    return await this.db.getStore(query);
  }

  async getBranch(query: Record<string, any>): Promise<any> {
    return await this.db.getBranch(query);
  }

  async findOneyRole(query: Record<string, any>): Promise<Partial<Role>> {
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
