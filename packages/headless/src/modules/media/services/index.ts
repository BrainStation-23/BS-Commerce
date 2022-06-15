import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { authConfig } from 'config/auth';
import { UserRepository } from 'src/modules/user/repositories';
import {
  CreateUserResponse,
  SignUpErrorMessages,
  SignUpSuccessMessages
} from 'models';

@Injectable()
export class MediaService {
  constructor(private userRepo: UserRepository, private helper: Helper, private jwtService: JwtService) { }

  async upload(data: CreateUserDto): Promise<CreateUserResponse> {
    const doesUserExist = await this.userRepo.findUser({ email: data.email });
    if (doesUserExist) return this.helper.serviceResponse.errorResponse(SignUpErrorMessages.USER_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    let user: any = { ...data };
    user.provider = 'local';
    user.displayName = data.firstName + ' ' + data.lastName;
    user.email = data.email.toLowerCase();
    user.username = data.email;
    user.password = await bcrypt.hash(data.password, authConfig.salt!);

    const registeredUser = await this.userRepo.createUser(user);
    if (!registeredUser) return this.helper.serviceResponse.errorResponse(SignUpErrorMessages.CAN_NOT_CREATE_USER, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: SignUpSuccessMessages.USER_CREATED_SUCCESSFUL }, HttpStatus.CREATED);
  }
}