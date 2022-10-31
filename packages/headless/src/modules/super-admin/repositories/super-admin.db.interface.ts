import { Injectable } from "@nestjs/common";
import { SuperAdmin } from "src/entity/super-admin";
import { SuperAdminSignupReq } from "../rest/dto/signup.dto";

@Injectable()
export abstract class ISuperAdminDatabase{
    abstract findOne: (query: Record<string, any>) => Promise<Partial<SuperAdmin> | null>;
    abstract create: (body: SuperAdminSignupReq) => Promise<Partial<SuperAdmin> | null>;
}