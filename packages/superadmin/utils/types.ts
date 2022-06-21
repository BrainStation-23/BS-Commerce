import { GetProductParams } from './../../models/src/product/getProduct';
import { CreateProductRequest } from './../../models/src/product/createProduct';
import { Product } from '../../models/src/product';

export interface User {
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

export interface Address {
  id?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}

export interface apiFunction {
  getUser: () => Promise<User | undefined>;
  createProduct: () => Promise<CreateProductRequest | undefined>;
  getProduct: () => Promise<Product | undefined>;
}
