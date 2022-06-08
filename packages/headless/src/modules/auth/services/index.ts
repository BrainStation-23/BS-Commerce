import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { authConfig } from 'config/auth';
import { JwtPayload } from 'src/entity/auth';
import { UserRepository } from 'src/modules/user/repositories';
import * as crypto from 'crypto';
const ONE_HOUR = 3600000 // 1 hour = 3600000 milliseconds
const token = crypto.randomBytes(20).toString('hex');
import { CreateUserDto, SignInDataDto } from '../dto';
import {
  CreateUserResponse,
  ForgotPasswordResponse,
  SignInResponse,
  SignInErrorMessages,
  SignUpErrorMessages,
  ForgotPasswordErrorMessages,
  SignUpSuccessMessages
} from 'models';

@Injectable()
export class AuthService {
  constructor(private userRepo: UserRepository, private helper: Helper, private jwtService: JwtService) { }

  async signUp(data: CreateUserDto): Promise<CreateUserResponse> {
    const doesUserExist = await this.userRepo.findUser({ email: data.email });
    if (doesUserExist) return { error: SignUpErrorMessages.USER_ALREADY_EXITS, errors: null, code: HttpStatus.BAD_REQUEST };

    let user: any = { ...data };
    user.provider = 'local';
    user.displayName = data.firstName + ' ' + data.lastName;
    user.email = data.email.toLowerCase();
    user.username = data.email;
    user.password = await bcrypt.hash(data.password, authConfig.salt!);

    const registeredUser = await this.userRepo.createUser(user);
    if (!registeredUser) return { error: SignUpErrorMessages.CAN_NOT_CREATE_USER, errors: null, code: HttpStatus.BAD_REQUEST };
    return { data: { message: SignUpSuccessMessages.USER_CREATED_SUCCESSFUL }, code: HttpStatus.CREATED };;
  }

  async signIn(data: SignInDataDto): Promise<SignInResponse> {
    const user = await this.userRepo.getUserPassword({ username: data.username });
    if (!user) return { error: SignInErrorMessages.INVALID_CREDENTIALS, errors: null, code: HttpStatus.BAD_REQUEST, };

    const doesPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!doesPasswordMatch) return { error: SignInErrorMessages.INVALID_CREDENTIALS, errors: null, code: HttpStatus.BAD_REQUEST };

    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      logInTime: Date.now(),
    };

    const token = this.jwtService.sign(payload);
    return { data: { token }, code: HttpStatus.OK };
  }

  async forgotPassword(username: string, baseUrl: string): Promise<ForgotPasswordResponse> {

    const user = await this.userRepo.findUser({ username });
    if (!user) return { error: ForgotPasswordErrorMessages.CAN_NOT_GET_USER, errors: null, code: HttpStatus.BAD_REQUEST };

    if (user.provider !== 'local') return { error: ForgotPasswordErrorMessages.SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT, errors: null, code: HttpStatus.BAD_REQUEST };

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + ONE_HOUR;

    const updatedUser = await this.userRepo.updateUser(user.id, user);
    if (!updatedUser) return { error: ForgotPasswordErrorMessages.CAN_NOT_UPDATE_USER_PASSWORD, errors: null, code: HttpStatus.BAD_REQUEST };

    const resetUrl = baseUrl + process.env.AUTH_RESET_ORIGINAL_URL || '/auth/reset/' + token;
    await this.helper.mailService.sendMail(user.email, 'Password Reset Link', resetUrl);
    return { data: { message: 'An email has been sent to ' + user.email + ' with further instructions.' }, code: HttpStatus.OK };
  }
}