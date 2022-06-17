import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { customerAuthConfig } from 'config/auth';
import { JwtPayload } from 'src/entity/auth';
import { CustomerRepository } from 'src/modules/customer/repositories';
import * as crypto from 'crypto';
const ONE_HOUR = 3600000 // 1 hour = 3600000 milliseconds
const TWO_MINUTES = 2 * 60 * 1000;
const token = crypto.randomBytes(20).toString('hex');
import {
  CreateCustomerResponse,
  CreateCustomerErrorMessages,
  CreateCustomerSuccessMessages,
  CreateCustomerRequest,
  CreateCustomerSendOtpRequest,
  CreateCustomerSendOtpErrorMessages,
  CreateCustomerSendOtpResponse,
} from 'models';

@Injectable()
export class CustomerAuthService {
  constructor(private customerRepo: CustomerRepository, private helper: Helper, private jwtService: JwtService) { }

  async register(data: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    if (doesCustomerEmailExist) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, null, HttpStatus.BAD_REQUEST,);

    let customer: any = { ...data };
    customer.email = data.email && data.email.toLowerCase();
    customer.password = await bcrypt.hash(data.password, customerAuthConfig.salt!);

    const registeredCustomer = await this.customerRepo.createCustomer(customer);
    if (!registeredCustomer) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CAN_NOT_CREATE_CUSTOMER, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL }, HttpStatus.CREATED);
  }

  async sendOtp(data: CreateCustomerSendOtpRequest): Promise<CreateCustomerSendOtpResponse> {
    const doesCustomerExist = await this.customerRepo.findCustomer({ $or: [{ email: data.email }, { phone: data.phone }] });
    if (doesCustomerExist && doesCustomerExist.otpVerified) return this.helper.serviceResponse.errorResponse(CreateCustomerSendOtpErrorMessages.OTP_ALREADY_VERIFIED_SUCCEED, null, HttpStatus.BAD_REQUEST,);

    let customer: any = { ...data };
    customer.email = data.email && data.email.toLowerCase();
    customer.otp = Math.floor(Math.random() * 1000000);
    customer.otpExpireTime = Date.now() + TWO_MINUTES;

    const registeredCustomer = await this.customerRepo.insertOtp(customer);
    if (!registeredCustomer) return this.helper.serviceResponse.errorResponse(CreateCustomerSendOtpErrorMessages.CAN_NOT_SEND_OTP, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: `Your OTP is ${customer.otp}` }, HttpStatus.CREATED);
  }
}