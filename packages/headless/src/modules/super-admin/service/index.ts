import { HttpStatus, Injectable } from "@nestjs/common";
import { PartialType } from "@nestjs/swagger";
import { SuperAdmin } from "src/entity/super-admin";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { SuperAdminRepository } from "../repositories";
import { SuperAdminLoginDto, SuperAdminLoginResponse } from "../rest/dto/login.dto";
import { SuperAdminSignupReq } from "../rest/dto/signup.dto";
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { authConfig } from "config/auth";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class SuperAdminService{
    constructor(private readonly superAdminRepository: SuperAdminRepository, private readonly jwtService: JwtService){}

    async superAdminCreate(body: SuperAdminSignupReq): Promise<IServiceResponse<Partial<SuperAdmin>>>{
        const isEmailExist = await this.superAdminRepository.findOne({email: body.email})
        if(isEmailExist){
            return errorResponse('This email is already exist.', null, HttpStatus.BAD_REQUEST)
        }
        
        body.password = await bcrypt.hash(body.password, authConfig.salt)

        const newSuperAdmin = await this.superAdminRepository.create(body)
        if(newSuperAdmin)
            return successResponse(PartialType(SuperAdmin), newSuperAdmin)
        return errorResponse('Error in create super admin', null, HttpStatus.CONFLICT)
    }

    async superAdminLogin(body: SuperAdminLoginDto): Promise<IServiceResponse<SuperAdminLoginResponse>>{
        const userData = await this.superAdminRepository.findOne({email: body.email})
        if(!userData){
            return errorResponse('Invalid credentials!', null, HttpStatus.BAD_REQUEST)
        }

        const matchPassword = await bcrypt.compare(body.password, userData.password)
        if(!matchPassword){
            return errorResponse('Invalid credentials!', null, HttpStatus.BAD_REQUEST)
        }

        const payload = {
            id: userData.id,
            username: userData.firstName+' '+userData.lastName,
            logInTime: Date.now(),
            accountType: userData.accountType
        }
        const token = this.jwtService.sign(payload)
        return successResponse(SuperAdminLoginResponse, {token})
    }
}