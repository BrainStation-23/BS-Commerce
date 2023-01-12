import type { CustomerAddress, Customer } from '@bs-commerce/models';
export declare class CustomerAddressDto implements CustomerAddress {
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
export declare class CustomerInformationDto implements Customer {
    id: string;
    name: string;
    phone?: string;
    email: string;
    addresses?: CustomerAddressDto[];
}
