import { Body, Controller, Get, Patch, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { UserService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { User } from 'src/entity/user';
import { Response } from 'express';
import { ChangePasswordDto, UpdatedUserDto } from '../dto/user.dto';

@Controller('user')
@ApiTags('User Profile API')
@ApiBearerAuth('BearerAuth')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  async getUser(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.getUser(user.id);
    res.status(code);
    return response;
  }

  @Patch()
  async updateUser(@Body() data: UpdatedUserDto, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.updateUser(userInfo.id, data);
    res.status(code);
    return response;
  }

  @Patch('password')
  async changePassword(@Body() passwordDetails: ChangePasswordDto, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.changePassword(userInfo.id, passwordDetails);
    res.status(code);
    return response;
  }
}