import { CustomerAuthService } from '../services';
import { CreateCustomerInput, CustomerSignInDataInput, GetAuthCustomerQuery, SendOtpInput, VerifyOtpInput, CustomerForgotPasswordDataInput } from './auth.model';
import { Helper } from '../../../helper/helper.interface';
export declare class CustomerAuthResolver {
    private authService;
    private helper;
    constructor(authService: CustomerAuthService, helper: Helper);
    getCustomer(query?: GetAuthCustomerQuery): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    register(customer: CreateCustomerInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    sendOtpForRegistration(data?: SendOtpInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    customerSignIn(data: CustomerSignInDataInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    sendOtpForForgotPassword(data?: SendOtpInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    verifyOtpForForgotPassword(data?: VerifyOtpInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    forgotPassword(data: CustomerForgotPasswordDataInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
