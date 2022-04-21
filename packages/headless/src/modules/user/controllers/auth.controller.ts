import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/entity/user';
import { ILoginData } from '../interface/user.interface';
import { UserAuthService } from '../services/user-auth.service';

@Controller('auth')
@ApiTags('User Authentication')
export class UserAuthController {
  constructor(private userService: UserAuthService) {}
  @Post('signup')
  async register(@Body() body: UserEntity) {
    return await this.userService.handleRegister(body);
  }

  @Post('signin')
  async login(@Body() body: ILoginData) {
    return await this.userService.handleLogin(body);
  }
}
