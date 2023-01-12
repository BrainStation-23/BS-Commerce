import { Response, Request } from 'express';
import { CustomerAuthService } from '../services';
import { CreateCustomerDto, CustomerForgotPasswordDto, CustomerSignInDto, GetCustomerQueryDto, SendOtpDto, VerifyOtpDto } from './dto';
export declare class CustomerAuthController {
    private authService;
    constructor(authService: CustomerAuthService);
    sendOtp(data: SendOtpDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").SendOtpSuccessMessages;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").SendOtpErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    register(customer: CreateCustomerDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").CreateCustomerSuccessMessages;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").CreateCustomerErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    handleLogin(): {
        msg: string;
    };
    googleAuthRedirect(req: Request, res: Response): Promise<any>;
    facebookLogin(): Promise<any>;
    facebookLoginRedirect(req: Request, res: Response): Promise<any>;
    signIn(data: CustomerSignInDto, res: Response): Promise<any>;
    logout(res: Response): Promise<{
        code: number;
        data: {
            message: string;
        };
    }>;
    getCustomer(query: GetCustomerQueryDto, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    forgotPasswordSendOTP(data: SendOtpDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").SendOtpSuccessMessages;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").SendOtpErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    forgotPasswordVerifyOtp(data: VerifyOtpDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").VerifyOtpSuccessMessages;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").VerifyOtpErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    forgotPassword(data: CustomerForgotPasswordDto, res: Response): Promise<{
        data: import("@bs-commerce/models").CustomerForgotPasswordMessage;
        code: number;
    } | {
        error: import("@bs-commerce/models").CustomerForgotPasswordErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
