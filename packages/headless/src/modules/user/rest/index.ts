import { Body, Controller, Get, HttpStatus, Patch, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { UserService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { User } from 'src/entity/user';
import { Response } from 'express';
import {
  ChangePasswordDto,
  UpdatedUserDto,
  GetUserErrorResponseDto,
  GetUserSuccessResponseDto,
  ChangePasswordSuccessResponseDto,
  ChangePasswordErrorResponseDto
} from '../dto';

@Controller('user')
@ApiTags('User Profile API')
@ApiBearerAuth('BearerAuth')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @ApiResponse({
    description: 'Get User Success Response',
    type: GetUserSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get User Error Response',
    type: GetUserErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getUser(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.getUser(user.id);
    res.status(code);
    return response;
  }

  @Patch()
  @ApiResponse({
    description: 'Update User Success Response',
    type: GetUserSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update User Error Response',
    type: GetUserErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateUser(@Body() data: UpdatedUserDto, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.updateUser(userInfo.id, data);
    res.status(code);
    return response;
  }

  @Patch('password')
  @ApiResponse({
    description: 'Change Password Success Response',
    type: ChangePasswordSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Change Password Error Response',
    type: ChangePasswordErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async changePassword(@Body() passwordDetails: ChangePasswordDto, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.changePassword(userInfo.id, passwordDetails);
    res.status(code);
    return response;
  }
}