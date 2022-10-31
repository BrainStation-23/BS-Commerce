import { Injectable } from "@nestjs/common";
import { SuperAdmin } from "src/entity/super-admin";
import { SuperAdminSignupReq } from "../rest/dto/signup.dto";
import { ISuperAdminDatabase } from "./super-admin.db.interface";

@Injectable()
export class SuperAdminRepository{
    constructor(private db: ISuperAdminDatabase){}

    async create(body: SuperAdminSignupReq): Promise<Partial<SuperAdmin>>{
        return await this.db.create(body)
    }

    async findOne(query: Record<string, any>): Promise<Partial<SuperAdmin>>{
        return await this.db.findOne(query)
    }
}