import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginDto, UserEntityResponse } from '../dto/user.dto';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserAuthService {
  constructor(
    private userAuthRepo: UserAuthRepository,
    private jwtService: JwtService,
  ) {}

  async handleRegister(body: CreateUserDto): Promise<UserEntityResponse> {
    const salt = 10;
    body.password = await bcrypt.hash(body.password, salt);
    return await this.userAuthRepo.save(body);
  }

  async handleLogin(body: LoginDto): Promise<string> {
    const user = await this.validateUser(body);
    const payload = {
      userId: user.id,
      logInTime: Date.now(),
    };
    const token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return `Bearer ${token}`;
  }

  private async validateUser(body: LoginDto): Promise<any> {
    const user = await this.userAuthRepo.findOneForLogin({ phone: body.phone });
    if (!user) {
      throw new HttpException(
        'Phone number not found.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      throw new HttpException('Invalid password.', HttpStatus.BAD_REQUEST);
    }
    delete user.password;
    return user;
  }
}
