import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { validateParams } from 'src/decorators/service.validator';
import { HelperService } from 'src/helper/helper.service';
import { TypeServiceResponse } from 'src/helper/serviceResponse/service.response.interface';
import {
  CreateUserDto,
  IJwtPayload,
  LoginDto,
} from '../interface/user.interface';
import { UserAuthRepository } from '../repository';
import { UserCreateSchema } from '../validators/user.create.validator';

@Injectable()
export class UserAuthService {
  constructor(
    private userAuthRepo: UserAuthRepository,
    private helperService: HelperService,
    private jwtService: JwtService,
  ) {}

  @validateParams({ schema: UserCreateSchema })
  async handleRegister(body: CreateUserDto): Promise<TypeServiceResponse> {
    const salt = 10;
    body.password = await bcrypt.hash(body.password, salt);
    const doc = await this.userAuthRepo.save(body);
    if (!doc) {
      return this.helperService.serviceResponse.errorResponse(
        'User already exist',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
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

    const payload: IJwtPayload = {
      userId: user._id,
      phone: user.phone,
      username: `${user.firstName} ${user.lastName}`,
      logInTime: Date.now(),
    };
    const token = this.jwtService.sign(payload);
    return this.helperService.serviceResponse.successResponse({ token }, 200);
  }
}
