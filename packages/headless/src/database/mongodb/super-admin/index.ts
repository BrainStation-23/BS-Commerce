import { Injectable } from "@nestjs/common";
import { query } from "express";
import { SuperAdmin } from "src/entity/super-admin";
import { ISuperAdminDatabase } from "src/modules/super-admin/repositories/super-admin.db.interface";
import { SuperAdminSignupReq } from "src/modules/super-admin/rest/dto/signup.dto";
import { SuperAdminModel } from "./super-admin.model";

@Injectable()
export class SuperAdminDatabase implements ISuperAdminDatabase{
    async findOne (query: Record<string, string>): Promise<Partial<SuperAdmin> | null> {
        try {
            return await SuperAdminModel.findOne({...query}, {password:0, _id: 0}).lean()
        } catch (error: any) {
            console.log(error.message);
            return null
        }
    }
    async create(body: SuperAdminSignupReq): Promise<Partial<SuperAdmin> | null>{
        try {
            console.log({body});
            
            const data = await SuperAdminModel.create(body)
            if(data?.password){
                delete data.password
            }
            return data
        } catch (error: any) {
            console.log(error.message);
            return null
        }
    }
}