import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { CustomerRepository } from '../repositories';
import {
  GetCustomerInformationErrorMessages,
  GetCustomerInformationResponse,
  AddCustomerNewAddressResponse,
  AddCustomerNewAddressErrorMessages,
  UpdateCustomerAddressResponse,
  UpdateCustomerAddressErrorMessages,
  DeleteCustomerAddressResponse,
  DeleteCustomerAddressErrorMessages,
  UpdateCustomerRequestBody,
  UpdateCustomerResponse,
  UpdateCustomerErrorMessages,
} from '@bs-commerce/models';
import { CustomerAddress } from 'src/entity/customer';

@Injectable()
export class CustomerService {
  constructor(
    private customerRepo: CustomerRepository,
    private helper: Helper,
  ) {}

  async getCustomer(
    customerId: string,
  ): Promise<GetCustomerInformationResponse> {
    const customer = await this.customerRepo.findCustomer({ id: customerId });
    if (!customer)
      return this.helper.serviceResponse.errorResponse(
        GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(customer, HttpStatus.OK);
  }

  async updateCustomer(
    customerId: string,
    data: UpdateCustomerRequestBody,
  ): Promise<UpdateCustomerResponse> {
    let customer = await this.customerRepo.findCustomer({ id: customerId });
    if (!customer)
      return this.helper.serviceResponse.errorResponse(
        GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    if (customer && customer.phone && data.phone)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_PHONE,
        null,
        HttpStatus.BAD_REQUEST,
      );
    if (customer && customer.email && data.email)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_EMAIL,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const emailMatch =
      data.email &&
      (await this.customerRepo.findCustomer({ email: data.email }));
    if (emailMatch)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerAddressErrorMessages.CUSTOMER_EMAIL_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const phoneMatch =
      data.phone &&
      (await this.customerRepo.findCustomer({ phone: data.phone }));
    if (phoneMatch)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerAddressErrorMessages.CUSTOMER_PHONE_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );

    customer = Object.assign(customer, data);

    const updatedCustomer = await this.customerRepo.updateCustomer(
      customerId,
      customer,
    );
    if (!updatedCustomer)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerErrorMessages.CAN_NOT_UPDATE_CUSTOMER_INFORMATION,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      updatedCustomer,
      HttpStatus.OK,
    );
  }

  async addCustomerNewAddress(
    customerId: string,
    address: CustomerAddress,
  ): Promise<AddCustomerNewAddressResponse> {
    const updatedCustomer = await this.customerRepo.addCustomerNewAddress(
      customerId,
      address,
    );
    if (!updatedCustomer)
      return this.helper.serviceResponse.errorResponse(
        AddCustomerNewAddressErrorMessages.CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    if (
      address.isDefault &&
      updatedCustomer.addresses.length &&
      updatedCustomer.addresses.length > 1
    ) {
      let check = false;
      updatedCustomer.addresses.forEach((address) => {
        if (
          address.isDefault &&
          updatedCustomer.addresses[updatedCustomer.addresses.length - 1].id !==
            address.id
        ) {
          address.isDefault = false;
          check = true;
        }
      });
      check &&
        (await this.customerRepo.updateCustomer(customerId, updatedCustomer));
    }
    return this.helper.serviceResponse.successResponse(
      updatedCustomer,
      HttpStatus.OK,
    );
  }

  async updateCustomerAddress(
    customerId: string,
    addressId: string,
    address: CustomerAddress,
  ): Promise<UpdateCustomerAddressResponse> {
    const updatedCustomer = await this.customerRepo.updateCustomerAddress(
      customerId,
      addressId,
      address,
    );
    if (!updatedCustomer)
      return this.helper.serviceResponse.errorResponse(
        UpdateCustomerAddressErrorMessages.CAN_NOT_UPDATE_CUSTOMER_ADDRESS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    if (
      address.isDefault &&
      updatedCustomer.addresses.length &&
      updatedCustomer.addresses.length > 1
    ) {
      let check = false;
      updatedCustomer.addresses.forEach((address) => {
        if (address.isDefault && addressId !== address.id) {
          address.isDefault = false;
          check = true;
        }
      });
      check &&
        (await this.customerRepo.updateCustomer(customerId, updatedCustomer));
    }

    return this.helper.serviceResponse.successResponse(
      updatedCustomer,
      HttpStatus.OK,
    );
  }

  async deleteCustomerAddress(
    customerId: string,
    addressId: string,
  ): Promise<DeleteCustomerAddressResponse> {
    const customer = await this.customerRepo.findCustomer({ id: customerId });
    if (!customer)
      return this.helper.serviceResponse.errorResponse(
        GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const updatedCustomer = await this.customerRepo.deleteCustomerAddress(
      customerId,
      addressId,
    );
    if (!updatedCustomer)
      return this.helper.serviceResponse.errorResponse(
        DeleteCustomerAddressErrorMessages.CAN_NOT_DELETE_CUSTOMER_ADDRESS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      updatedCustomer,
      HttpStatus.OK,
    );
  }
}
