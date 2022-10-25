import { Body, Controller, Post, Res } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { SuperAdminService } from "../service";
import { SuperAdminLoginDto } from "./dto/login.dto";
import { SuperAdminSignupReq } from "./dto/signup.dto";

@ApiTags("Super admin controller")
@Controller('super-admin')
export class SuperAdminController{
    constructor(private readonly superAdminService:SuperAdminService){}

    @Post('create')
    async superAdminCreate(@Body() body: SuperAdminSignupReq, @Res({ passthrough: true }) res: Response){
        const {code, ...response} = await this.superAdminService.superAdminCreate(body)
        res.status(code);
        return { code, ...response };
    }

    @Post('login')
    async superAdminLogin(@Body() body: SuperAdminLoginDto, @Res({ passthrough: true }) res: Response,){
        const {code, ...response} = await this.superAdminService.superAdminLogin(body)
        res.status(code);
        return { code, ...response };
    }
}