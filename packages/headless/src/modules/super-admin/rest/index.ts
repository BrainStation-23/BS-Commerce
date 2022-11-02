import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express"; 
import { PERMISSIONS } from "models";
import { PermissionRequired } from "src/decorators/permission.decorator";
import { AdminJwtAuthGuard } from "src/guards/admin-jwt-auth.guard";
import { AdminRoleGuard } from "src/guards/admin-role.guard";
import { RolesGuard } from "src/guards/auth.guard";
import { SuperAdminService } from "../service";
import { SuperAdminLoginDto, SuperAdminLoginRes } from "./dto/login.dto";
import { SuperAdminSignupReq, SuperAdminSignupRes } from "./dto/signup.dto";

@ApiTags("Super admin controller")

@Controller('super-admin')
export class SuperAdminController{
    constructor(private readonly superAdminService:SuperAdminService){}

    @PermissionRequired(PERMISSIONS.CREATE_ROLE, PERMISSIONS.ASSIGN_ROLE)
    @ApiBearerAuth()
    @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
    @ApiResponse({description: 'Create new admin by super admin', type: SuperAdminSignupRes})
    @Post('create')
    async superAdminCreate(@Body() body: SuperAdminSignupReq, @Res({ passthrough: true }) res: Response){
        const {code, ...response} = await this.superAdminService.superAdminCreate(body)
        res.status(code);
        return { code, ...response };
    }

    @Post('login')
    @ApiResponse({description: 'Login - super admin', type: SuperAdminLoginRes})
    async superAdminLogin(@Body() body: SuperAdminLoginDto, @Res({ passthrough: true }) res: Response,){
        const {code, ...response} = await this.superAdminService.superAdminLogin(body)
        res.status(code);
        return { code, ...response };
    }
}