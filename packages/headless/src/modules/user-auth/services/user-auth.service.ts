import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { HelperService } from 'src/helper/helper.service';
import { CreateUserDto, LoginDto, UserEntityResponse } from '../dto/user.dto';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserAuthService {
  constructor(
    private userAuthRepo: UserAuthRepository,
    private helperService: HelperService,
    private jwtService: JwtService,
  ) {}

  async handleRegister(body: CreateUserDto): Promise<UserEntityResponse> {
    const salt = 10;
    body.password = await bcrypt.hash(body.password, salt);
    return await this.userAuthRepo.save(body);
  }

  async handleLogin(body: LoginDto): Promise<any> {
    const user = await this.validateUser(body);
    console.log({ user });
    if (!user) {
      return this.helperService.serviceResponse.errorResponse(
        'Phone number not found.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    const payload = {
      userId: user._id,
      logInTime: Date.now(),
    };
    const token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return `Bearer ${token}`;
  }

  private async validateUser(body: LoginDto): Promise<any> {
    const user = await this.userAuthRepo.findOneForLogin({ phone: body.phone });

    if (!user._id) {
      // return this.helperService.serviceResponse.errorResponse(
      //   'Phone number not found.',
      //   null,
      //   HttpStatus.BAD_REQUEST,
      // );
      return null;
    }
    const isMatch = await bcrypt.compare(body.password, user.password);
    console.log({ isMatch });
    if (!isMatch) {
      // return this.helperService.serviceResponse.errorResponse(
      //   'Invalid password.',
      //   null,
      //   HttpStatus.BAD_REQUEST,
      // );
      return null;
    }

    delete user.password;
    return user;
  }
}
