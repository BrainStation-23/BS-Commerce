import { HttpStatus } from "@nestjs/common";
import { PartialType } from "@nestjs/swagger";
import { SuperAdmin } from "src/entity/super-admin";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { SuperAdminRepository } from "../repositories";
import { SuperAdminLoginDto, SuperAdminLoginResponse } from "../rest/dto/login.dto";
import { SuperAdminSignupReq } from "../rest/dto/signup.dto";

export class SuperAdminService{
    constructor(private readonly superAdminRepository: SuperAdminRepository){}

    async superAdminCreate(body: SuperAdminSignupReq): Promise<IServiceResponse<Partial<SuperAdmin>>>{
        console.log({body});
        
        const newSuperAdmin = await this.superAdminRepository.create(body)
        if(newSuperAdmin)
            return successResponse(PartialType(SuperAdmin), newSuperAdmin)
        return errorResponse('Error in create super admin', null, HttpStatus.CONFLICT)
    }

    async superAdminLogin(body: SuperAdminLoginDto): Promise<IServiceResponse<SuperAdminLoginResponse>>{
        
        const data = await this.superAdminRepository.findOne(body)
        return successResponse(SuperAdminLoginResponse, {token: "token"})
    }
}