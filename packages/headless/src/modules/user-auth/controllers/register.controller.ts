import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDto, LoginDto, UserEntityResponse } from '../dto/user.dto';
import { UserAuthService } from '../services/user.service';

@Controller('user-auth')
@ApiTags('User Authentication')
export class UserRegisterController {
  constructor(private userAuthService: UserAuthService) {}
  @Post('register')
  async register(@Body() body: CreateUserDto): Promise<UserEntityResponse> {
    return this.userAuthService.handleRegister(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto): Promise<string> {
    return this.userAuthService.handleLogin(body);
  }

  @Get('logout')
    async logout(@Res({passthrough: true}) response: Response): Promise<{} | null> {
        return this.userAuthService.logout(response);
    }
}
