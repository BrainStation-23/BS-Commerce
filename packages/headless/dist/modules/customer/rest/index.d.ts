import { CustomerService } from '../services';
import { Response } from 'express';
import { Customer } from '../../../entity/customer';
import { CustomerAddressDto, DeleteCustomerAddressParamsDto, UpdateCustomerAddressParamsDto, UpdateCustomerDto } from './dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    getCustomer(customer: Customer, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerInformationErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateCustomer(data: UpdateCustomerDto, customer: Customer, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateCustomerErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    addCustomerNewAddress(address: CustomerAddressDto, customer: Customer, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").AddCustomerNewAddressErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateCustomerAddress(params: UpdateCustomerAddressParamsDto, address: CustomerAddressDto, customer: Customer, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateCustomerAddressErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    deleteCustomerAddress(params: DeleteCustomerAddressParamsDto, customer: Customer, res: Response): Promise<{
        data: Customer;
        code: number;
    } | {
        error: import("@bs-commerce/models").DeleteCustomerAddressErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
