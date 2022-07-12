import {
  CustomerSignInResponse,
  GetCustomerQuery,
  GetCustomerResponse,
  GetCustomerProductParams,
  GetCustomerProductResponse,
  GetCustomerAllProductsResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  CreateCustomerResponse,
  CreateCustomerRequest,
  CustomerSignInRequest,
  addToWishlistRequest,
  AddToWishlistResponse,
  getUserWishlistResponse,
  DeleteWishlistItemParams,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
} from 'models';

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
  signIn: (
    data: CustomerSignInRequest
  ) => Promise<CustomerSignInResponse | undefined>;
  getSignedInUser: (
    isEmail: boolean,
    data: GetCustomerQuery
  ) => Promise<GetCustomerResponse | undefined>;
  signUp: (
    data: CreateCustomerRequest
  ) => Promise<CreateCustomerResponse | undefined>;
  forgotPassword: (
    data: ForgotPasswordRequest
  ) => Promise<ForgotPasswordResponse | undefined>;
  getPublicProducts: () => Promise<GetCustomerAllProductsResponse | undefined>;
  getFeaturedProducts: () => Promise<
    GetCustomerAllProductsResponse | undefined
  >;
  getPublicProductsById: (
    productId: GetCustomerProductParams
  ) => Promise<GetCustomerProductResponse | undefined>;
  addToWishList: (data: addToWishlistRequest) => Promise<AddToWishlistResponse | undefined>;
  getCustomerWishlist: (token: string) => Promise<getUserWishlistResponse | undefined>;
  deleteWishlistItem: (data: string) => Promise<deleteWishlistItemResponse | undefined>
  deleteFullWishlist: () => Promise<deleteAllWishlistItemsResponse | undefined>
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
