import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { authConfig } from 'config/auth';
import { JwtPayload } from 'src/entity/auth';
import { UserRepository } from 'src/modules/user/repositories';
import * as crypto from 'crypto';
import { CreateUserDto, SignInDataDto } from '../dto/auth.dto';
const ONE_HOUR = 3600000 // 1 hour = 3600000 milliseconds
const token = crypto.randomBytes(20).toString('hex');
import type { CreateUserErrorResponse, CreateUserSuccessResponse, SignInSuccessResponse, SignInErrorResponse, ForgotPasswordSuccessResponse, ForgotPasswordErrorResponse } from 'models'

@Injectable()
export class AuthService {
  constructor(private userRepo: UserRepository, private helper: Helper, private jwtService: JwtService) { }

  async signUp(user: CreateUserDto): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
    const doesUserExist = await this.userRepo.findUser({ email: user.email });
    if (doesUserExist) return this.helper.serviceResponse.errorResponse('The user already exists. Please choose a different Email Address.', null, HttpStatus.BAD_REQUEST,) as CreateUserErrorResponse;

    user.provider = 'local';
    user.displayName = user.firstName + ' ' + user.lastName;
    user.email = user.email.toLowerCase();
    user.username = user.email;
    user.password = await bcrypt.hash(user.password, authConfig.salt!);

    const registeredUser = await this.userRepo.createUser(user);
    if (!registeredUser) return this.helper.serviceResponse.errorResponse('Can\'t Create User.', null, HttpStatus.INTERNAL_SERVER_ERROR) as CreateUserErrorResponse;
    return this.helper.serviceResponse.successResponse(registeredUser, HttpStatus.CREATED) as CreateUserSuccessResponse;
  }

  async signIn(data: SignInDataDto): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
    const user = await this.userRepo.getUserPassword({ username: data.username });
    if (!user) return this.helper.serviceResponse.errorResponse('Invalid Credentials.', null, HttpStatus.BAD_REQUEST,) as SignInErrorResponse;

    const doesPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse('Invalid Credentials.', null, HttpStatus.BAD_REQUEST,) as SignInErrorResponse;

    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      logInTime: Date.now(),
    };

    const token = this.jwtService.sign(payload);
    return this.helper.serviceResponse.successResponse({ token }, HttpStatus.OK,) as SignInSuccessResponse;
  }

  async forgotPassword(username: string, baseUrl: string): Promise<ServiceErrorResponse | ServiceSuccessResponse> {

    const user = await this.userRepo.findUser({ username });
    if (!user) return this.helper.serviceResponse.errorResponse('Can\'t Get User.', null, HttpStatus.BAD_REQUEST,) as ForgotPasswordErrorResponse;

    if (user.provider !== 'local') return this.helper.serviceResponse.errorResponse('It seems like you signed up using your ' + user.provider + ' account', null, HttpStatus.BAD_REQUEST,) as ForgotPasswordErrorResponse;

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + ONE_HOUR;

    const updatedUser = await this.userRepo.updateUser(user.id, user);
    if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Update User.', null, HttpStatus.BAD_REQUEST) as ForgotPasswordErrorResponse;

    const resetUrl = baseUrl + process.env.AUTH_RESET_ORIGINAL_URL || '/auth/reset/' + token;

    await this.helper.mailService.sendMail(user.email, 'Password Reset Link', resetUrl);
    return this.helper.serviceResponse.successResponse({ message: 'An email has been sent to ' + user.email + ' with further instructions.' }, HttpStatus.OK,) as ForgotPasswordSuccessResponse;
  }
}