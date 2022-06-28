import { addToCartRequest, AddToCartResponse, Cart, CustomerSignInResponse, deleteAllCartItemsResponse, deleteCartItemRequest, deleteCartItemResponse } from "models";
import { CreateCustomerResponse } from "models";
import { updateCartItemResponse } from "models";
import { updateCartItemRequest } from "models";
import { CreateCustomerRequest } from "models";
import { CustomerSignInRequest } from "models";
import { GetCustomerProductParams, GetCustomerProductResponse, GetCustomerAllProductsResponse, CreateUserRequest, CreateUserResponse, ForgotPasswordRequest, ForgotPasswordResponse, SignInRequest, SignInResponse } from "models";

export interface accordionBody {
  id: string;
  title: string;
  body: string;
}

export interface storiesBody {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface CarouselBody {
  id: string;
  title: string;
  body: string;
  image: string;
}

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
  getUser: () => Promise<User[] | undefined>;
  signIn: (data: CustomerSignInRequest) => Promise<CustomerSignInResponse | undefined>;
  signUp: (data: CreateCustomerRequest) => Promise<CreateCustomerResponse | undefined>;
  forgotPassword: (data: ForgotPasswordRequest) => Promise<ForgotPasswordResponse | undefined>;
  getPublicProducts: () => Promise<GetCustomerAllProductsResponse | undefined>;
  getFeaturedProducts: () => Promise<GetCustomerAllProductsResponse | undefined>;
  getPublicProductsById: (productId: GetCustomerProductParams) => Promise< GetCustomerProductResponse | undefined>;
  getCart: (token: string) => Promise<Cart[] | undefined>;
  addToCart: (data: addToCartRequest) => Promise<AddToCartResponse | undefined>
  deleteCartItem: (data: deleteCartItemRequest, token: string) => Promise<deleteCartItemResponse | undefined>
  deleteAllCartItem: () => Promise<deleteAllCartItemsResponse | undefined>
  updateCartItem: (data: updateCartItemRequest) => Promise<updateCartItemResponse | undefined >
}

export interface ProductStore {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  review?: string | undefined;
  stock?: number;
  vendor?: number;
  sku?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  color?: undefined | string;
}
