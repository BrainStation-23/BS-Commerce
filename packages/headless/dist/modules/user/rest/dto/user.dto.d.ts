import type { Address, User } from '@bs-commerce/models';
export declare class AddressDto implements Address {
    id?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    postCode: string;
}
export declare class UserDto implements User {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phone?: string;
    username: string;
    email: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    gender?: string;
    addresses?: AddressDto[];
    status?: string;
}
