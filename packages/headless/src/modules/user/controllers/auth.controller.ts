import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserEntity } from 'src/entity/user';
import { ILoginData } from '../interface/user.interface';
import { UserAuthService } from '../services/user-auth.service';

@Controller('auth')
@ApiTags('User Authentication')
export class UserAuthController {
  constructor(private userService: UserAuthService) {}
  @Post('signup')
  async register(
    @Body() body: UserEntity,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userService.handleRegister(body);
    res.status(code);
    return response;
  }

  @Post('signin')
  async login(
    @Body() body: ILoginData,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userService.handleLogin(body);
    res.status(code);
    return response;
  }
}
