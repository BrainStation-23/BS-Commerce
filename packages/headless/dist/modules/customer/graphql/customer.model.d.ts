import { Customer, CustomerAddress, UpdateCustomerRequestBody } from '@bs-commerce/models';
export declare class GraphqlCustomerAddress implements CustomerAddress {
    id?: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    isDefault?: boolean;
    company?: string;
    state?: string;
    country?: string;
    postCode?: string;
    phone: string;
    tag: string;
}
export declare class CustomerAddressInput {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    isDefault?: boolean;
    company?: string;
    state?: string;
    country?: string;
    postCode?: string;
    phone: string;
    tag: string;
}
export declare class GraphqlCustomer implements Customer {
    id: string;
    name: string;
    phone?: string;
    email?: string;
    addresses?: GraphqlCustomerAddress[];
}
export declare class UpdateCustomerInput implements UpdateCustomerRequestBody {
    name?: string;
    phone?: string;
    email?: string;
}
export declare class CustomerChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}
export declare class CustomerResponse {
    code: number;
    data?: GraphqlCustomer;
}
export declare class CustomerChangePasswordResponseMessage {
    message: string;
}
export declare class CustomerChangePasswordResponse {
    code: number;
    data?: CustomerChangePasswordResponseMessage;
}
