export class Address {
<<<<<<< HEAD
  id?: string;
=======
  id: string;
>>>>>>> headless/ismail0946/mysql-setup
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
  username: string;
  email: string;
  password?: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  gender?: string;
  addresses?: Address;
  status: string;
}

<<<<<<< HEAD
=======
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

>>>>>>> headless/ismail0946/mysql-setup
export class ChangePassword {
  currentPassword: string;
  newPassword: string;
}