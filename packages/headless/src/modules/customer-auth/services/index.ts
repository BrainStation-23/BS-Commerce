import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { customerAuthConfig } from 'config/auth';
import { CustomerRepository } from 'src/modules/customer/repositories';
import {
  CreateCustomerResponse,
  CreateCustomerErrorMessages,
  CreateCustomerSuccessMessages,
  CreateCustomerRequest,
  GetCustomerResponse,
  GetCustomerErrorMessages,
} from 'models';

@Injectable()
export class CustomerAuthService {
  constructor(private customerRepo: CustomerRepository, private helper: Helper) { }

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

  async getCustomer(data: any): Promise<GetCustomerResponse> {
    const doesCustomerEmailExist = data.email && await this.customerRepo.findCustomer({ email: data.email });
    const doesCustomerPhoneExist = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
    if (!doesCustomerEmailExist && !doesCustomerPhoneExist) return this.helper.serviceResponse.errorResponse(GetCustomerErrorMessages.CAN_NOT_GET_CUSTOMER, null, HttpStatus.BAD_REQUEST,);
    return this.helper.serviceResponse.successResponse(doesCustomerEmailExist || doesCustomerPhoneExist, HttpStatus.OK);
  }
}