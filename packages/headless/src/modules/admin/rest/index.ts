import { Body, Controller, Get, HttpStatus, Patch, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminService } from '../services';
import { User as AdminInfo } from 'src/decorators/auth.decorator';
import { Admin } from 'src/entity/admin';
import { Response } from 'express';
import { RolesGuard } from 'src/guards/auth.guard';
import {
  ChangePasswordDto,
  UpdatedUserDto,
  GetUserErrorResponseDto,
  GetUserSuccessResponseDto,
  ChangePasswordSuccessResponseDto,
  ChangePasswordErrorResponseDto
} from '../dto';

@Controller('admin')
@ApiTags('Admin Profile API')
@UseGuards(new RolesGuard(['admin']))
@ApiBearerAuth()
export class AdminController {
  constructor(private adminService: AdminService) { }

  @Get()
  @ApiResponse({
    description: 'Get Admin Success Response',
    type: GetUserSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Admin Error Response',
    type: GetUserErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getUser(@AdminInfo() user: Admin, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.adminService.getUser(user.id);
    res.status(code);
    return { code, ...response };
  }

  @Patch()
  @ApiResponse({
    description: 'Update Admin Success Response',
    type: GetUserSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Admin Error Response',
    type: GetUserErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateUser(@Body() data: UpdatedUserDto, @AdminInfo() AdminInfo: Admin, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.adminService.updateUser(AdminInfo.id, data);
    res.status(code);
    return { code, ...response };
  }

  @Patch('change-password')
  @ApiResponse({
    description: 'Admin Change Password Success Response',
    type: ChangePasswordSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Admin Change Password Error Response',
    type: ChangePasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async changePassword(@Body() passwordDetails: ChangePasswordDto, @AdminInfo() AdminInfo: Admin, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.adminService.changePassword(AdminInfo.id, passwordDetails);
    res.status(code);
    return { code, ...response };
  }
}