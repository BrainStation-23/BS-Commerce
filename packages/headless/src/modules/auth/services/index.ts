import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { validateParams } from 'src/decorators/service.validator';
import { User } from 'src/entity/user';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { AuthRepository } from '../repositories';
import { SigninSchema, UserSchema } from '../validators/user.create.validator';
import { authConfig } from 'config/auth';
import { JwtPayload, SignInData } from 'src/entity/auth';

@Injectable()
export class AuthService {
  constructor(private authRepo: AuthRepository, private helper: Helper, private jwtService: JwtService) { }

  @validateParams({ schema: UserSchema })
  async signUp(user: User): Promise<ServiceErrorResponse | ServiceSuccessResponse> {

    const doesUserExist = await this.authRepo.findUser(user.email);
    if (doesUserExist) {
      return this.helper.serviceResponse.errorResponse('The user already exists. Please choose a different Email Address.', null, HttpStatus.BAD_REQUEST,);
    }

    user.provider = 'local';
    user.displayName = user.firstName + ' ' + user.lastName;
    user.username = user.email.toLowerCase();
    user.password = await bcrypt.hash(user.password, authConfig.salt!);

    const registeredUser = await this.authRepo.createUser(user);
    if (!registeredUser) { return this.helper.serviceResponse.errorResponse('Can\'t Create User.', null, HttpStatus.BAD_REQUEST); }
    return this.helper.serviceResponse.successResponse(registeredUser, HttpStatus.CREATED,
    );
  }

  @validateParams({ schema: SigninSchema })
  async signIn(data: SignInData): Promise<ServiceErrorResponse | ServiceSuccessResponse> {

    const user = await this.authRepo.findSigninUser(data.username);
    if (!user) return this.helper.serviceResponse.errorResponse('Invalid Credentials.', null, HttpStatus.BAD_REQUEST,);

    const doesMatch = await bcrypt.compare(data.password, user.password);
    if (!doesMatch) return this.helper.serviceResponse.errorResponse('Invalid Credentials.', null, HttpStatus.BAD_REQUEST,);

    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      logInTime: Date.now(),
    };

    const token = this.jwtService.sign(payload);
    return this.helper.serviceResponse.successResponse({ token }, HttpStatus.OK,);
  }
}