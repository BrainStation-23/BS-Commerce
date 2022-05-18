export class Address {
  id: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}
export class User {
  id: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  phone?: string;
  email: string;
  password: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  gender?: string;
  addresses?: Address;
  status: string;
}

export class UpdatedUser {
  firstName?: string;
  lastName?: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  phone?: string;
  addresses?: Address;
  active?: boolean;
  gender?: string;
  status?: string;
}

export class ChangePassword {
  currentPassword: string;
  newPassword: string;
  verifyPassword: string;
}