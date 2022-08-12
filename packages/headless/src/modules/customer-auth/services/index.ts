import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { authConfig } from 'config/auth';
import { CustomerRepository } from 'src/modules/customer/repositories';
import {
  CreateCustomerResponse,
  CreateCustomerErrorMessages,
  CreateCustomerSuccessMessages,
  CreateCustomerRequest,
  GetCustomerResponse,
  GetCustomerErrorMessages,
  GetCustomerQuery,
  CustomerSignInResponse,
  CustomerSignInRequest,
  SignInErrorMessages,
  CustomerForgotPasswordRequest,
  CustomerForgotPasswordResponse,
  CustomerForgotPasswordErrorMessages,
  SendCreateCustomerOtpRequest,
  SendCreateCustomerOtpResponse,
  SendCreateCustomerOtpErrorMessages,
  VerifyCreateCustomerOtpRequest,
  VerifyCreateCustomerOtpResponse,
  VerifyCreateCustomerOtpErrorMessages,
  VerifyCreateCustomerOtpSuccessMessages,
  CustomerForgotPasswordSuccessMessages,
} from 'models';
import { JwtService } from '@nestjs/jwt';
import { CustomerJwtPayload } from 'src/entity/customer-auth';
import { Customer } from 'src/entity/customer';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class CustomerAuthService {
  constructor(private customerRepo: CustomerRepository, private helper: Helper, private jwtService: JwtService) { }

  async register(data: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    if (doesCustomerEmailExist) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    const otpVerified = await this.customerRepo.findOtp({ $and: [{ $or: [{ email: data.email }, { phone: data.phone }] }, { isVerified: true, otpVerifiedAt: { $gt: Date.now() } }] });
    if (!otpVerified) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER, null, HttpStatus.BAD_REQUEST,);

    let customer: any = { ...data };
    customer.email = data.email && data.email.toLowerCase();
    customer.password = await bcrypt.hash(data.password, authConfig.salt!);

    const registeredCustomer = await this.customerRepo.createCustomer(customer);
    if (!registeredCustomer) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CAN_NOT_CREATE_CUSTOMER, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL }, HttpStatus.CREATED);
  }

  async registerSendOTP(data: SendCreateCustomerOtpRequest): Promise<SendCreateCustomerOtpResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    if (doesCustomerEmailExist) return this.helper.serviceResponse.errorResponse(SendCreateCustomerOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(SendCreateCustomerOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    return await this.sendOtp(data);
  }

  async sendOtp(data: SendCreateCustomerOtpRequest): Promise<SendCreateCustomerOtpResponse> {
    let otpExists = null;
    otpExists = data.email && await this.customerRepo.findOtp({ email: data.email });
    otpExists = data.phone && await this.customerRepo.findOtp({ phone: data.phone });
    const randomOtp = 100000 + Math.floor(Math.random() * 900000);

    if (otpExists && (data.email || data.phone)) {
      let otpUpdated = null;
      otpUpdated = data.email && await this.customerRepo.updateOtp({ email: data.email }, { otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES, isVerified: false });
      otpUpdated = data.phone && await this.customerRepo.updateOtp({ phone: data.phone }, { otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES, isVerified: false });
      if (!otpUpdated) return this.helper.serviceResponse.errorResponse(SendCreateCustomerOtpErrorMessages.CAN_NOT_UPDATE_OTP, null, HttpStatus.BAD_REQUEST);
      return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, HttpStatus.OK);
    }
    const otpSend = (data.email || data.phone) && await this.customerRepo.sendOtp({ ...data, otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES });
    if (!otpSend) return this.helper.serviceResponse.errorResponse(SendCreateCustomerOtpErrorMessages.CAN_NOT_SEND_OTP, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, HttpStatus.OK);
  }

  async registerVerifyOTP(data: VerifyCreateCustomerOtpRequest): Promise<VerifyCreateCustomerOtpResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    if (doesCustomerEmailExist) return this.helper.serviceResponse.errorResponse(VerifyCreateCustomerOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(VerifyCreateCustomerOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    return await this.verifyOtp(data);
  }

  async verifyOtp(data: VerifyCreateCustomerOtpRequest): Promise<VerifyCreateCustomerOtpResponse> {
    const verifyOtp = (data.email || data.phone) && await this.customerRepo.verifyOtp({ ...data, otpExpireTime: { $gt: Date.now() } });
    if (!verifyOtp) return this.helper.serviceResponse.errorResponse(VerifyCreateCustomerOtpErrorMessages.OTP_EXPIRED, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: VerifyCreateCustomerOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL }, HttpStatus.OK);
  }

  async getCustomer(data: GetCustomerQuery): Promise<GetCustomerResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(GetCustomerErrorMessages.CAN_NOT_GET_CUSTOMER, null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(doesCustomerEmailExist || doesCustomerPhoneExist, HttpStatus.OK);
  }

  async signIn(data: CustomerSignInRequest): Promise<CustomerSignInResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.getCustomerPassword({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.getCustomerPassword({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(SignInErrorMessages.INVALID_CREDENTIALS, null, HttpStatus.BAD_REQUEST,);

    let customer: Customer = doesCustomerEmailExist || doesCustomerPhoneExist;
    const doesCustomerPasswordMatch = await bcrypt.compare(data.password, customer.password);
    if (!doesCustomerPasswordMatch) return this.helper.serviceResponse.errorResponse(SignInErrorMessages.INVALID_CREDENTIALS, null, HttpStatus.BAD_REQUEST,);

    const payload: CustomerJwtPayload = {
      id: customer.id,
      email: customer.email,
      phone: customer.phone,
      logInTime: Date.now(),
      role: 'customer'
    };

    const token = this.jwtService.sign(payload);
    return this.helper.serviceResponse.successResponse({ token }, HttpStatus.OK,);
  }

  async forgotPassword(data: CustomerForgotPasswordRequest): Promise<CustomerForgotPasswordResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.getCustomerPassword({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.getCustomerPassword({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(CustomerForgotPasswordErrorMessages.CAN_NOT_GET_CUSTOMER, null, HttpStatus.BAD_REQUEST,);

    const otpVerified = await this.customerRepo.findOtp({ $and: [{ $or: [{ email: data.email }, { phone: data.phone }] }, { isVerified: true, otpVerifiedAt: { $gt: Date.now() } }] });
    if (!otpVerified) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER, null, HttpStatus.BAD_REQUEST,);

    const customer = doesCustomerEmailExist || doesCustomerPhoneExist;
    customer.password = await bcrypt.hash(data.password, authConfig.salt!);

    const updatedPassword = await this.customerRepo.updateCustomer(customer.id, customer);
    if (!updatedPassword) return this.helper.serviceResponse.errorResponse(CustomerForgotPasswordErrorMessages.CAN_NOT_UPDATE_CUSTOMER_PASSWORD, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: CustomerForgotPasswordSuccessMessages.FORGOT_PASSWORD_SUCCESSFUL }, HttpStatus.OK);
  }

  async forgotPasswordSendOTP(data: SendCreateCustomerOtpRequest): Promise<SendCreateCustomerOtpResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.getCustomerPassword({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.getCustomerPassword({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(CustomerForgotPasswordErrorMessages.CAN_NOT_GET_CUSTOMER, null, HttpStatus.BAD_REQUEST,);
    return this.sendOtp(data);
  }

  async forgotPasswordVerifyOTP(data: VerifyCreateCustomerOtpRequest): Promise<VerifyCreateCustomerOtpResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.getCustomerPassword({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.getCustomerPassword({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(CustomerForgotPasswordErrorMessages.CAN_NOT_GET_CUSTOMER, null, HttpStatus.BAD_REQUEST,);
    return this.verifyOtp(data);
  }
}