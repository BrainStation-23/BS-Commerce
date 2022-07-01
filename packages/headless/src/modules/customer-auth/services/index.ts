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
} from 'models';
import { JwtService } from '@nestjs/jwt';
import { CustomerJwtPayload } from 'src/entity/customer-auth';
import { Customer } from 'src/entity/customer';

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
    customer.password = await bcrypt.hash(data.password, authConfig.salt!);

    const registeredCustomer = await this.customerRepo.createCustomer(customer);
    if (!registeredCustomer) return this.helper.serviceResponse.errorResponse(CreateCustomerErrorMessages.CAN_NOT_CREATE_CUSTOMER, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL }, HttpStatus.CREATED);
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
      userType: 'customer'
    };

    const token = this.jwtService.sign(payload);
    return this.helper.serviceResponse.successResponse({ token }, HttpStatus.OK,);
  }
}