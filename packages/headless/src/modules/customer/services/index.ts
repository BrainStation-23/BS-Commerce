import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { CustomerRepository } from '../repositories';

@Injectable()
export class CustomerService {
    constructor(private customerRepo: CustomerRepository, private helper: Helper) { }

    async getCustomer(customerId: string): Promise<any> {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse('CAN_NOT_GET_CUSTOMER', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(customer, HttpStatus.OK);
    }

    async updateCustomer(customerId: string, data: any): Promise<any> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse('CAN_NOT_GET_CUSTOMER', null, HttpStatus.BAD_REQUEST);

        customer = Object.assign(customer, data);
        const { addresses, ...rest } = customer;

        const updatedCustomer = await this.customerRepo.updateCustomer(customerId, customer);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse('CAN_NOT_UPDATE_Customer', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async addCustomerNewAddress(customerId: string, data: any): Promise<any> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse('CAN_NOT_GET_CUSTOMER', null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.addCustomerNewAddress(customerId, data.address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse('CAN_NOT_ADD_Customer_NEW_ADDRESS', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async updateCustomerAddress(customerId: string, addressId: string, data: any): Promise<any> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse('CAN_NOT_GET_CUSTOMER', null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.updateCustomerAddress(customerId, addressId, data.address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse('CAN_NOT_UPDATE_Customer_ADDRESS', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async deleteCustomerAddress(customerId: string, addressId: string, data: any): Promise<any> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse('CAN_NOT_GET_CUSTOMER', null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.deleteCustomerAddress(customerId, addressId);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse('CAN_NOT_ADD_Customer_NEW_ADDRESS', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }
}