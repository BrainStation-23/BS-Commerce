import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { AdminJwtPayload, SignInData } from 'src/entity/auth';
import { UserRepository } from 'src/modules/user/repositories';
import * as crypto from 'crypto';
const ONE_HOUR = 3600000 // 1 hour = 3600000 milliseconds
const token = crypto.randomBytes(20).toString('hex');
import {
  CreateUserResponse,
  ForgotPasswordResponse,
  SignInResponse,
  SignInErrorMessages,
  SignUpErrorMessages,
  ForgotPasswordErrorMessages,
  SignUpSuccessMessages
} from 'models';
import { authConfig } from 'config/auth';
import { User } from 'src/entity/user';

@Injectable()
export class AuthService {
  constructor(private userRepo: UserRepository, private helper: Helper, private jwtService: JwtService) { }

  async signUp(data: Partial<User>): Promise<CreateUserResponse> {
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

  async signIn(data: SignInData): Promise<SignInResponse> {
    const user = await this.userRepo.getUserPassword({ username: data.username });
    if (!user) return this.helper.serviceResponse.errorResponse(SignInErrorMessages.INVALID_CREDENTIALS, null, HttpStatus.BAD_REQUEST,);

    const doesPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse(SignInErrorMessages.INVALID_CREDENTIALS, null, HttpStatus.BAD_REQUEST,);

    const payload: AdminJwtPayload = {
      id: user.id,
      username: user.username,
      logInTime: Date.now(),
      role: 'admin'
    };

    const token = this.jwtService.sign(payload);
    return this.helper.serviceResponse.successResponse({ token }, HttpStatus.OK,);
  }

  async forgotPassword(username: string, baseUrl: string): Promise<ForgotPasswordResponse> {

    const user = await this.userRepo.findUser({ username });
    if (!user) return this.helper.serviceResponse.errorResponse(ForgotPasswordErrorMessages.CAN_NOT_GET_USER, null, HttpStatus.BAD_REQUEST,);

    if (user.provider !== 'local') return this.helper.serviceResponse.errorResponse(ForgotPasswordErrorMessages.SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT, null, HttpStatus.BAD_REQUEST,);

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + ONE_HOUR;

    const updatedUser = await this.userRepo.updateUser(user.id, user);
    if (!updatedUser) return this.helper.serviceResponse.errorResponse(ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD, null, HttpStatus.BAD_REQUEST);

    const resetUrl = baseUrl + process.env.AUTH_RESET_ORIGINAL_URL || '/auth/reset/' + token;

    await this.helper.mailService.sendMail(user.email, 'Password Reset Link', resetUrl);
    return this.helper.serviceResponse.successResponse({ message: 'An email has been sent to ' + user.email + ' with further instructions.' }, HttpStatus.OK,);
  }
}