export class CustomerAddress {
    id?: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    company?: string;
    state?: string;
    country?: string;
    postCode?: string;
    phone: string;
    tag: string;
}
export class Customer {
    id?: string;
    phone?: string;
    email?: string;
    password?: string;
    otp: string;
    otpVerified?: boolean;
    addresses?: CustomerAddress[];
}