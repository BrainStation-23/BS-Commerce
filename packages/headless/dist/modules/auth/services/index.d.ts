import { JwtService } from '@nestjs/jwt';
import { Helper } from '../../../helper/helper.interface';
import { SignInData } from '../../../entity/auth';
import { UserRepository } from '../../../modules/user/repositories';
import { CreateUserResponse, ForgotPasswordResponse, SignInResponse, CreateUserRequest } from '@bs-commerce/models';
export declare class AuthService {
    private userRepo;
    private helper;
    private jwtService;
    constructor(userRepo: UserRepository, helper: Helper, jwtService: JwtService);
    signUp(data: CreateUserRequest): Promise<CreateUserResponse>;
    signIn(data: SignInData): Promise<SignInResponse>;
    forgotPassword(username: string, baseUrl: string): Promise<ForgotPasswordResponse>;
}
