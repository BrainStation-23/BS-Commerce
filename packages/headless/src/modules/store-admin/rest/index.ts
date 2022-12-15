import { Body, Controller, Get, Post, Res, UseGuards, Request, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PERMISSIONS } from 'models';
import { PermissionRequired } from 'src/decorators/permission.decorator';
import { AdminJwtAuthGuard } from 'src/guards/admin-jwt-auth.guard';
import { AdminRoleGuard } from 'src/guards/admin-role.guard';
import { RolesGuard } from 'src/guards/auth.guard';
import { StoreAdminService } from '../service';
import { StoreAdminLoginDto, StoreAdminLoginRes } from './dto/login.dto';
import { StoreAdminSignupReq, StoreAdminSignupRes } from './dto/signup.dto';
import { MfaOtpDto, MfaVerifyOtpDto } from './dto/otp.dto';
import { StoreAdminInfo } from 'src/entity/store-admin';
import { AdminInfo } from 'src/decorators/adminInfo.decorator';

@ApiTags('Store admin controller')
@Controller('store-admin')
export class StoreAdminController {
  constructor(private readonly storeAdminService: StoreAdminService) {}

  @PermissionRequired(PERMISSIONS.CREATE_STORE_ADMIN, PERMISSIONS.CREATE_ADMIN)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @ApiResponse({
    description: 'Create new store or branch admin',
    type: StoreAdminSignupRes,
  })
  @Post('create')
  async storeAdminCreate(
    @Body() body: StoreAdminSignupReq,
    @AdminInfo() storeAdminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeAdminService.storeAdminCreate(
      storeAdminInfo,
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  @Post('login')
  @ApiResponse({
    description: 'Login - store or branch admin',
    type: StoreAdminLoginRes,
  })
  async storeAdminLogin(
    @Body() body: StoreAdminLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeAdminService.storeAdminLogin(
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
    const { code, ...response } = await this.storeAdminService.verifyMfaLoginOtp(
      body,
    );
    res.status(code);
    return { code, ...response };
  }

  @PermissionRequired(PERMISSIONS.ADD_MFA)
  @ApiBearerAuth()
  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @Post('add-mfa')
  async addMfa(
    @Body() body: MfaOtpDto,
    @AdminInfo() storeAdminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeAdminService.sendMfaOtp(
      storeAdminInfo.id,
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
    @AdminInfo() storeAdminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeAdminService.verifiyMfaOtp(
      storeAdminInfo.id,
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
    @AdminInfo() storeAdminInfo: StoreAdminInfo,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeAdminService.getProfileData(
      storeAdminInfo.id,
    );
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(AdminJwtAuthGuard, AdminRoleGuard)
  @ApiBearerAuth()
  @Post('/checkout/:branchId')
  async checkoutToBranch(
    @Param('branchId') branchId: string,
    @Request() req: any,
    @Res({ passthrough: true }) res: Response
  ){
    const { user } = req;
    const { code, ...response } = await this.storeAdminService.checkoutToBranch(
      user.id,
      branchId
    );
    
    res.status(code);
    return { code, ...response };

  }
}
