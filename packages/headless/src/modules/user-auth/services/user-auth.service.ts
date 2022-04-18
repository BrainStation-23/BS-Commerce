import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { HelperService } from 'src/helper/helper.service';
import { TypeServiceResponse } from 'src/helper/serviceResponse/service.response.interface';
import { CreateUserDto, LoginDto } from '../dto/user.dto';
import { UserAuthRepository } from '../repository';

@Injectable()
export class UserAuthService {
  constructor(
    private userAuthRepo: UserAuthRepository,
    private helperService: HelperService,
    private jwtService: JwtService,
  ) {}

  async handleRegister(body: CreateUserDto): Promise<TypeServiceResponse> {
    const salt = 10;
    body.password = await bcrypt.hash(body.password, salt);
    const doc = await this.userAuthRepo.save(body);
    return this.helperService.serviceResponse.successResponse(
      doc,
      HttpStatus.CREATED,
    );
  }

  async handleLogin(body: LoginDto): Promise<TypeServiceResponse> {
    const user = await this.userAuthRepo.findOneForLogin({ phone: body.phone });
    if (!user._id) {
      return this.helperService.serviceResponse.errorResponse(
        'Phone number not found.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      return this.helperService.serviceResponse.errorResponse(
        'Invalid password.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload = {
      userId: user._id,
      logInTime: Date.now(),
    };
    const token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return this.helperService.serviceResponse.successResponse({ token }, 200);
  }
}
