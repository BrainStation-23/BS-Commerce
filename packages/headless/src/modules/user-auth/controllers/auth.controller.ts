import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginDto } from '../dto/user.dto';
import { UserAuthService } from '../services/user-auth.service';

@Controller('user-auth')
@ApiTags('User Authentication')
export class UserAuthController {
  constructor(private userAuthService: UserAuthService) {}
  @Post('register')
  async register(@Body() body: CreateUserDto) {
    return await this.userAuthService.handleRegister(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return await this.userAuthService.handleLogin(body);
  }
}
