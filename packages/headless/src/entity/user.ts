<<<<<<< HEAD
export class UserEntity {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}
=======
export class Address {
  id?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}
export class User {
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

export class ChangePassword {
  currentPassword: string;
  newPassword: string;
}
>>>>>>> a21e665f167390885e2c59c0219a77d94c366598
