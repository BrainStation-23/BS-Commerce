import { Injectable } from "@nestjs/common";
import { Otp } from "src/entity/otp";
import { Role } from "src/entity/role";
import { SuperAdmin } from "src/entity/super-admin";
import { SuperAdminProfileUpdateDto, SuperAdminSignupReq } from "../rest/dto/signup.dto";

@Injectable()
export abstract class ISuperAdminDatabase{
    abstract findOne: (query: Record<string, any>) => Promise<Partial<SuperAdmin> | null>;
    abstract create: (body: SuperAdmin) => Promise<Partial<SuperAdmin> | null>;
    abstract updateProfile: (query: Record<string, any>, data: SuperAdminProfileUpdateDto ) => Promise<Partial<SuperAdmin> | null>;
    abstract findOneRole: (
        query: Record<string, any>,
      ) => Promise<Partial<Role> | null>;
    abstract sendOtp: (data: Otp) => Promise<Otp | null>;
    abstract verifyOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract findOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract deleteOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract updateOtp: (
        query: Record<string, any>,
        data: object,
    ) => Promise<Otp | null>;
}