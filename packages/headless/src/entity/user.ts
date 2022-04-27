export class User {
  id: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  username?: string;
  email: string;
  password: string;
  provider?: string;
  providerData?: object;
  additionalProviderData?: object;
  resetPasswordToken?: string;
	resetPasswordExpires?: Date
}