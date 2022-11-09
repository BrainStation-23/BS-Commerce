import { Injectable } from '@nestjs/common';
import { Otp } from 'src/entity/otp';
import { Role } from 'src/entity/role';
import { StoreAdmin } from 'src/entity/store-admin';
import {
  StoreAdminProfileUpdateDto,
} from '../rest/dto/signup.dto';

@Injectable()
export abstract class IStoreAdminDatabase {
  abstract findOne: (
    query: Record<string, any>,
  ) => Promise<Partial<StoreAdmin> | null>;
  abstract findOneRole: (
    query: Record<string, any>,
  ) => Promise<Partial<Role> | null>;
  abstract create: (body: StoreAdmin) => Promise<Partial<StoreAdmin> | null>;
  abstract updateProfile: (
    query: Record<string, any>,
    data: StoreAdminProfileUpdateDto,
  ) => Promise<Partial<StoreAdmin> | null>;

  abstract sendOtp: (data: Otp) => Promise<Otp | null>;
  abstract verifyOtp: (query: Record<string, any>) => Promise<Otp | null>;
  abstract findOtp: (query: Record<string, any>) => Promise<Otp | null>;
  abstract deleteOtp: (query: Record<string, any>) => Promise<Otp | null>;
  abstract updateOtp: (
    query: Record<string, any>,
    data: object,
  ) => Promise<Otp | null>;
}
