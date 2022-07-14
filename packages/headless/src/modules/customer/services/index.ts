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
} from 'models';
import { CustomerAddress } from 'src/entity/customer';

@Injectable()
export class CustomerService {
    constructor(private customerRepo: CustomerRepository, private helper: Helper) { }

    async getCustomer(customerId: string): Promise<GetCustomerInformationResponse> {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(customer, HttpStatus.OK);
    }

    async updateCustomer(customerId: string, data: any): Promise<any> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);

        customer = Object.assign(customer, data);
        const { addresses, ...rest } = customer;

        const updatedCustomer = await this.customerRepo.updateCustomer(customerId, customer);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse('CAN_NOT_UPDATE_CUSTOMER_INFORMATION', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<AddCustomerNewAddressResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.addCustomerNewAddress(customerId, address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(AddCustomerNewAddressErrorMessages.CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<UpdateCustomerAddressResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.updateCustomerAddress(customerId, addressId, address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CAN_NOT_UPDATE_CUSTOMER_ADDRESS, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async deleteCustomerAddress(customerId: string, addressId: string): Promise<DeleteCustomerAddressResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.deleteCustomerAddress(customerId, addressId);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(DeleteCustomerAddressErrorMessages.CAN_NOT_DELETE_CUSTOMER_ADDRESS, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }
}