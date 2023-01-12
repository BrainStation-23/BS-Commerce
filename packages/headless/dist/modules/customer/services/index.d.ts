import { Helper } from '../../../helper/helper.interface';
import { CustomerRepository } from '../repositories';
import { GetCustomerInformationResponse, AddCustomerNewAddressResponse, UpdateCustomerAddressResponse, DeleteCustomerAddressResponse, UpdateCustomerRequestBody, UpdateCustomerResponse } from '@bs-commerce/models';
import { CustomerAddress } from '../../../entity/customer';
export declare class CustomerService {
    private customerRepo;
    private helper;
    constructor(customerRepo: CustomerRepository, helper: Helper);
    getCustomer(customerId: string): Promise<GetCustomerInformationResponse>;
    updateCustomer(customerId: string, data: UpdateCustomerRequestBody): Promise<UpdateCustomerResponse>;
    addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<AddCustomerNewAddressResponse>;
    updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<UpdateCustomerAddressResponse>;
    deleteCustomerAddress(customerId: string, addressId: string): Promise<DeleteCustomerAddressResponse>;
}
