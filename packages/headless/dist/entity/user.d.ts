export declare class Address {
    id?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    postCode: string;
}
export declare class User {
    id?: string;
    firstName: string;
    lastName: string;
    displayName?: string;
    phone?: string;
    username: string;
    email: string;
    password?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    gender?: string;
    addresses?: Address[];
    status: string;
}
export declare class ChangePassword {
    currentPassword: string;
    newPassword: string;
}
