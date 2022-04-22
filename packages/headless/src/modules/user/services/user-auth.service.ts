import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { validateParams } from 'src/decorators/service.validator';
import { UserEntity } from 'src/entity/user';
import { HelperService } from 'src/helper/helper.service';
import {
  ServiceErrorResponse,
  ServiceSuccessResponse,
} from 'src/helper/serviceResponse/service.response.interface';
import { IJwtPayload, ILoginData } from '../interface/user.interface';
import { UserRepository } from '../repository';
import {
  LoginSchema,
  UserCreateSchema,
} from '../validators/user.create.validator';

@Injectable()
export class UserAuthService {
  constructor(
    private userRepo: UserRepository,
    private helperService: HelperService,
    private jwtService: JwtService,
  ) {}

  @validateParams({ schema: UserCreateSchema })
  async handleRegister(
    body: UserEntity,
  ): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
    const salt = process.env.HASH_SALT || '10';
    body.password = await bcrypt.hash(body.password, parseInt(salt));

    const isExist = await this.userRepo.findOne({ phone: body.phone });
    if (isExist?.id) {
      return this.helperService.serviceResponse.errorResponse(
        'User already exist.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userRepo.save(body);
    if (!user) {
      return this.helperService.serviceResponse.errorResponse(
        'Something went wrong.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.helperService.serviceResponse.successResponse(
      user,
      HttpStatus.CREATED,
    );
  }

  @validateParams({ schema: LoginSchema })
  async handleLogin(
    body: ILoginData,
  ): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
    const user = await this.userRepo.findOneForLogin({ phone: body.phone });

    if (!user) {
      return this.helperService.serviceResponse.errorResponse(
        'Invalid phone or password.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(body.password, user);
    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      return this.helperService.serviceResponse.errorResponse(
        'Invalid phone or password.',
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const payload: IJwtPayload = {
      id: user.id,
      phone: user.phone,
      username: `${user.firstName} ${user.lastName}`,
      logInTime: Date.now(),
    };
    const token = this.jwtService.sign(payload);
    return this.helperService.serviceResponse.successResponse(
      { token },
      HttpStatus.OK,
    );
  }
}
