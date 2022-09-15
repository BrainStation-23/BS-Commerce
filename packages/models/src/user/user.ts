import { Address } from './address';

export interface User {
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
  addresses?: Address[];
  status?: string;
}
