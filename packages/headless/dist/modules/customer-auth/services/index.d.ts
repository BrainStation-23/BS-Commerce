import { Helper } from '../../../helper/helper.interface';
import { CustomerRepository } from '../../../modules/customer/repositories';
import { CreateCustomerResponse, CreateCustomerRequest, GetCustomerResponse, GetCustomerQuery, CustomerSignInResponse, CustomerSignInRequest, SendOtpRequest, SendOtpResponse, CustomerForgotPasswordRequest, CustomerForgotPasswordResponse, VerifyOtpRequest, VerifyOtpResponse } from '@bs-commerce/models';
import { JwtService } from '@nestjs/jwt';
export declare class CustomerAuthService {
    private customerRepo;
    private helper;
    private jwtService;
    constructor(customerRepo: CustomerRepository, helper: Helper, jwtService: JwtService);
    register(data: CreateCustomerRequest): Promise<CreateCustomerResponse>;
    registerSendOTP(data: SendOtpRequest): Promise<SendOtpResponse>;
    sendOtp(data: SendOtpRequest): Promise<SendOtpResponse>;
    verifyOtp(data: VerifyOtpRequest): Promise<VerifyOtpResponse>;
    getCustomer(data: GetCustomerQuery): Promise<GetCustomerResponse>;
    socialLogin(user: any): Promise<CustomerSignInResponse>;
    signIn(data: CustomerSignInRequest): Promise<CustomerSignInResponse>;
    forgotPassword(data: CustomerForgotPasswordRequest): Promise<CustomerForgotPasswordResponse>;
    forgotPasswordSendOTP(data: SendOtpRequest): Promise<SendOtpResponse>;
    forgotPasswordVerifyOTP(data: VerifyOtpRequest): Promise<VerifyOtpResponse>;
}
