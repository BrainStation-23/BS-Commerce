import { Response, Request } from 'express';
import { AuthService } from '../services';
import { CreateUserDto, SignInDataDto, ForgotPasswordDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: CreateUserDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").SignUpSuccessMessages;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").SignUpErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    signin(data: SignInDataDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Token;
        code: number;
    } | {
        error: import("@bs-commerce/models").SignInErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    forgotPassword(data: ForgotPasswordDto, res: Response, req: Request): Promise<{
        data: import("@bs-commerce/models").ForgotMessageResponse;
        code: number;
    } | {
        error: import("@bs-commerce/models").ForgotPasswordErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
