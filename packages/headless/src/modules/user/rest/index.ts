import { Body, Controller, Get, Patch, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { UserService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { ChangePassword, UpdatedUser, User } from 'src/entity/user';
import { Response } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  async getUser(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.getUser(user.id);
    res.status(code);
    return response;
  }

  @Patch()
  async updateUser(@Body() data: UpdatedUser, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.updateUser(userInfo.id, data);
    res.status(code);
    return response;
  }

  @Patch('password')
  async changePassword(@Body() passwordDetails: ChangePassword, @UserInfo() userInfo: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.userService.changePassword(userInfo.id, passwordDetails);
    res.status(code);
    return response;
  }
}