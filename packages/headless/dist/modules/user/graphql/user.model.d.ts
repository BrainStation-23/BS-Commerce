import { Address, User } from '@bs-commerce/models';
export declare class AdminAddress implements Address {
    id?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    postCode: string;
}
export declare class Admin implements User {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    username: string;
    email: string;
    provider?: string;
    phone?: string;
    gender?: string;
    addresses?: AdminAddress[];
    status?: string;
    active?: boolean;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
}
export declare class UpdateUserInput {
    firstName: string;
    lastName: string;
    provider: string;
    phone: string;
    gender: string;
    address: AdminAddress;
    status: string;
    active: boolean;
}
export declare class ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}
export declare class AdminResponse {
    code: number;
    data?: Admin;
}
export declare class ChangePasswordResponseMessage {
    message: string;
}
export declare class ChangePasswordResponse {
    code: number;
    data?: ChangePasswordResponseMessage;
}
