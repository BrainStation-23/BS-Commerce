import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PERMISSIONS } from 'models';
import { PermissionRequired } from 'src/decorators/permission.decorator';
import { AdminJwtAuthGuard } from 'src/guards/admin-jwt-auth.guard';
import { AdminRoleGuard } from 'src/guards/admin-role.guard';
import { RolesGuard } from 'src/guards/auth.guard';
import { UserAdminService } from '../service';
import { UserAdminLoginDto, UserAdminLoginRes } from './dto/login.dto';
import { UserAdminSignupReq, UserAdminSignupRes } from './dto/signup.dto';
import { MfaOtpDto, MfaVerifyOtpDto } from './dto/otp.dto';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { UserAdminInfo } from 'src/entity/user-admin';

@ApiTags('User admin controller')
@Controller('user-admin')
export class UserAdminController {
  constructor(private readonly userAdminService: UserAdminService) {}

  @PermissionRequired(PERMISSIONS.CREATE_USER_ADMIN_ROLE)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @ApiResponse({
    description: 'Create new admin by user admin',
    type: UserAdminSignupRes,
  })
  @Post('create')
  async userAdminCreate(
    @Body() body: UserAdminSignupReq,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userAdminService.userAdminCreate(
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  @Post('login')
  @ApiResponse({ description: 'Login - store or branch admin', type: UserAdminLoginRes })
  async userAdminLogin(
    @Body() body: UserAdminLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userAdminService.userAdminLogin(
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  
  @Post('login/verify-mfa-otp')
  async loginVerifyMfaOtp(
    @Body() body: MfaVerifyOtpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.userAdminService.verifyMfaLoginOtp(body);
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.ADD_MFA)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Post('add-mfa')
  async addMfa(
    @Body() body: MfaOtpDto,
    @UserInfo() userAdminInfo: UserAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userAdminService.sendMfaOtp(
      userAdminInfo.id,
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VERIFY_OTP_AFTER_ADD_MFA)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Post('add-mfa/verify-mfa-otp')
  async verifyMfaOtp(
    @Body() body: MfaVerifyOtpDto,
    @UserInfo() userAdminInfo: UserAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userAdminService.verifiyMfaOtp(
      userAdminInfo.id,
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.VIEW_OWN_PROFILE)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Get('profile')
  async profile(
    @UserInfo() userAdminInfo: UserAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userAdminService.getProfileData(
      userAdminInfo.id,
    );
    res.status(code);
    return { code, ...response };
  }
}
