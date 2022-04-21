export class UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  username?: string;
  email: string;
  phone: string;
  password: string;
  provider?: string;
  providerData?: Record<string, any>;
  additionalProviderData?: Record<string, any>;
}
