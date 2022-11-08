import { Injectable } from "@nestjs/common";
import { Otp } from "src/entity/otp";
import { Role } from "src/entity/role";
import { UserAdmin } from "src/entity/user-admin";
import { UserAdminProfileUpdateDto, UserAdminSignupReq } from "../rest/dto/signup.dto";

@Injectable()
export abstract class IUserAdminDatabase{
    abstract findOne: (query: Record<string, any>) => Promise<Partial<UserAdmin> | null>;
    abstract findOneRole: (query: Record<string, any>) => Promise<Partial<Role> | null>;
    abstract create: (body: UserAdmin) => Promise<Partial<UserAdmin> | null>;
    abstract updateProfile: (query: Record<string, any>, data: UserAdminProfileUpdateDto ) => Promise<Partial<UserAdmin> | null>;

    abstract sendOtp: (data: Otp) => Promise<Otp | null>;
    abstract verifyOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract findOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract deleteOtp: (query: Record<string, any>) => Promise<Otp | null>;
    abstract updateOtp: (
        query: Record<string, any>,
        data: object,
    ) => Promise<Otp | null>;
}