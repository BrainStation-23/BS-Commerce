import { HttpStatus, Injectable } from "@nestjs/common";
import { PartialType } from "@nestjs/swagger";
import { SuperAdmin } from "src/entity/super-admin";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { SuperAdminRepository } from "../repositories";
import { SuperAdminLoginDto, SuperAdminLoginRes } from "../rest/dto/login.dto";
import { SuperAdminSignupReq } from "../rest/dto/signup.dto";
import * as bcrypt from 'bcrypt'; 
import { authConfig } from "config/auth";
import { JwtService } from "@nestjs/jwt";
import { AdminJwtPayload } from "src/entity/auth";

@Injectable()
export class SuperAdminService{
    constructor(private readonly superAdminRepository: SuperAdminRepository, private readonly jwtService: JwtService){}

    async superAdminCreate(body: SuperAdminSignupReq): Promise<IServiceResponse<Partial<SuperAdmin>>>{ 
        const isExist = await this.superAdminRepository.findOne({ $or: [ {email: body.email}, {phone: body.phone} ] })
        if(isExist?.email === body.email){
            return errorResponse('This email is already exist.', null, HttpStatus.BAD_REQUEST)
        }
        if(isExist?.phone === body.phone){
            return errorResponse('This phone number is already exist.', null, HttpStatus.BAD_REQUEST)
        }
        if(!body?.password){
            return errorResponse('Password required!', null, HttpStatus.BAD_REQUEST)
        }
        
        body.password = await bcrypt.hash(body.password, authConfig.salt)

        const newSuperAdmin = await this.superAdminRepository.create(body)
        if(newSuperAdmin){
            return successResponse(PartialType(SuperAdmin), newSuperAdmin)
        }
        return errorResponse('Error in create super admin', null, HttpStatus.CONFLICT)
    }

    async superAdminLogin(body: SuperAdminLoginDto): Promise<IServiceResponse<SuperAdminLoginRes>>{
        const userData = await this.superAdminRepository.findOne({email: body.email})
        if(!userData){
            return errorResponse('Invalid credentials!', null, HttpStatus.BAD_REQUEST)
        }

        const matchPassword = await bcrypt.compare(body.password, userData.password)
        if(!matchPassword){
            return errorResponse('Invalid credentials!', null, HttpStatus.BAD_REQUEST)
        }

        const payload: AdminJwtPayload = {
            id: userData.id,
            username: userData.firstName+' '+userData.lastName,
            logInTime: Date.now(),
            role: userData.role
        }
        const token = this.jwtService.sign(payload)
        return successResponse(SuperAdminLoginRes, {token})
    }
}