import { CustomerService } from '../services';
import { Customer } from '../../../entity/customer';
import { CustomerAddressInput, UpdateCustomerInput } from './customer.model';
import { Helper } from '../../../helper/helper.interface';
export declare class CustomerResolver {
    private customerService;
    private helper;
    constructor(customerService: CustomerService, helper: Helper);
    getCustomerInfo(customer: Customer): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    updateCustomer(data: UpdateCustomerInput, customer: Customer): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    addCustomerNewAddress(address: CustomerAddressInput, customer: Customer): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    updateCustomerAddress(address: CustomerAddressInput, addressId: string, customer: Customer): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    deleteCustomerAddress(addressId: string, customer: Customer): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
