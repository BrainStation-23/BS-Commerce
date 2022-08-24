export class CustomerAddress {
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
export class Customer {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
    addresses?: CustomerAddress[];
}