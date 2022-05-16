import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SignInData } from 'src/entity/auth';
import { User } from 'src/entity/user';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  async register(@Body() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.signUp(user);
    res.status(code);
    return response;
  }

  @Post('signin')
  async signin(@Body() data: SignInData, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.authService.signIn(data);
    res.status(code);
    return response;
  }

  @Post('forgot')
  async forgotPassword(@Body() username: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.authService.forgotPassword(username);
    res.status(code);
    return response;
  }
}