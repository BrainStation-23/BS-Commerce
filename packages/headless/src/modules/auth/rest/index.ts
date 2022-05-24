import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services';
import { CreateUserDto, ForgotPasswordDto, SignInDataDto } from '../dto/auth.dto';

@Controller('auth')
@ApiTags('User Authentication API')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  async register(@Body() user: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.authService.signUp(user);
    res.status(code);
    return response;
  }

  @Post('signin')
  async signin(@Body() data: SignInDataDto, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.authService.signIn(data);
    res.status(code);
    return response;
  }

  @Post('forgot')
  async forgotPassword(@Body() data: ForgotPasswordDto, @Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const url = req.protocol + "://" + req.headers.host;
    const { code, ...response } = await this.authService.forgotPassword(data.username, url);
    res.status(code);
    return response;
  }
}