import {
  CustomerSignInResponse,
  OrderResponseData,
  getCategoryResponse,
  GetAllBrandsResponse,
  OrderResponseData,
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
  getCategoryListResponse,
  GetProductsByConditionQuery,
  GetProductsByConditionSuccessResponse,
  GetCustomerAllProductsQuery,
  OrderByUserIdResponse,
  addToWishlistRequest,
  AddToWishlistResponse,
  getUserWishlistResponse,
  DeleteWishlistItemParams,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
  CompareResponse,
  GetCustomerInformationSuccessResponse,
  UpdateCustomerSuccessResponse,
  UpdateCustomerRequestBody,
  AddCustomerNewAddressResponse,
  CustomerAddress,
  GetCustomerInformationResponse,
  UpdateCustomerAddressResponse,
  DeleteCustomerAddressResponse,
  Wishlist,
  getCategoryListSuccessResponse,
  getCartResponse,
  addToCartRequest,
  AddToCartResponse,
  getCartSuccessResponse,
  addToCartSuccessResponse,
  deleteCartItemSuccessResponse,
  deleteAllCartItemsSuccessResponse,
  updateCartItemSuccessResponse,
  updateCartItemRequest,
  VerifyOtpRequest,
  VerifyOtpSuccessResponse,
  CustomerForgotPasswordRequest,
  CustomerForgotPasswordSuccessResponse,
  SendOtpRequest,
  SendOtpSuccessResponse,
  GetCustomerAllProductsSuccessResponse,
  getCategoryBySlugResponse,
  GetCustomerProductByURLResponse,
  IProductSearchResponse,
} from 'models';
import { NextRouter } from 'next/router';

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

export interface apiFunction {
  signIn: (
    data: CustomerSignInRequest
  ) => Promise<CustomerSignInResponse | undefined>;
  getSignedInUser: (
    isEmail: boolean,
    data: GetCustomerQuery
  ) => Promise<GetCustomerResponse | undefined>;
  sendOTP: (data: string) => Promise<SendOtpSuccessResponse | undefined>;
  signUp: (
    data: CreateCustomerRequest
  ) => Promise<CreateCustomerResponse | undefined>;
  getPublicProducts: () => Promise<
    GetCustomerAllProductsSuccessResponse | undefined
  >;
  getFeaturedProducts: () => Promise<
    GetCustomerAllProductsResponse | undefined
  >;
  getPublicProductsById: (
    productId: string
  ) => Promise<GetCustomerProductResponse | undefined>;
  getCategoryList: () => Promise<getCategoryListSuccessResponse | undefined>;
  getPublicProductByCategoryId: (
    categoryId: string,
    orderBy: string,
    minPrice: number,
    maxPrice: number,
    brands: string
  ) => Promise<GetCustomerAllProductsResponse | undefined>;
  checkout: (
    data: any,
    router: NextRouter
  ) => Promise<OrderResponseData | undefined>;
  getOrderProducts: (
    token: string
  ) => Promise<OrderByUserIdResponse | undefined>;
  getOrderProduct: (
    token: string,
    OrderId: string
  ) => Promise<OrderResponseData | undefined>;
  addToWishList: (
    data: addToWishlistRequest
  ) => Promise<AddToWishlistResponse | undefined>;
  getCustomerWishlist: (token: string) => Promise<Wishlist | undefined>;
  deleteWishlistItem: (
    data: string
  ) => Promise<deleteWishlistItemResponse | undefined>;
  deleteFullWishlist: () => Promise<deleteAllWishlistItemsResponse | undefined>;
  addToCompare: (productId: string) => Promise<CompareResponse | undefined>;
  deleteFromCompare: (productId: string) =>Promise<CompareResponse | undefined>;
  getCustomerProfile: (
    token: string
  ) => Promise<GetCustomerInformationSuccessResponse | undefined>;
  deleteCustomerAddress: (
    addressId: string
  ) => Promise<DeleteCustomerAddressResponse | undefined>;
  updateCustomerAddress: (
    addressId: string,
    data: CustomerAddress
  ) => Promise<UpdateCustomerAddressResponse | undefined>;

  addCustomerNewAddress: (
    customerAddress: CustomerAddress
  ) => Promise<AddCustomerNewAddressResponse | undefined>;
  getCustomer: (
    token: string
  ) => Promise<GetCustomerInformationSuccessResponse | undefined>;
  updateCustomer: (
    data: UpdateCustomerRequestBody
  ) => Promise<UpdateCustomerSuccessResponse | undefined>;

  getCart: (data: string) => Promise<getCartSuccessResponse | undefined>;
  addToCart: (
    data: addToCartRequest
  ) => Promise<addToCartSuccessResponse | undefined>;
  deleteAllCartItem: () => Promise<
    deleteAllCartItemsSuccessResponse | undefined
  >;
  deleteSingleCartItem: (
    productId: string
  ) => Promise<deleteCartItemSuccessResponse | undefined>;
  updateCartItem: (
    cartItem: updateCartItemRequest
  ) => Promise<updateCartItemSuccessResponse | undefined>;
  forgetPasswordSendOtp: (
    data: string
  ) => Promise<SendOtpSuccessResponse | undefined>;
  forgetPasswordVerifyOtp: (
    data: VerifyOtpRequest
  ) => Promise<VerifyOtpSuccessResponse | undefined>;
  resetPassword: (
    data: CustomerForgotPasswordRequest
  ) => Promise<CustomerForgotPasswordSuccessResponse>;
  getBrands(): Promise<GetAllBrandsResponse | undefined>;
  getPublicProductByUniqueName(
    productUniqueName: string
  ): Promise<GetCustomerProductByURLResponse | undefined>;
  getCategoryDetailsById: (
    categoryId: string
  ) => Promise<getCategoryResponse | undefined>;
  getCategoryDetailsBySlug: (
    categorySlug: string
  ) => Promise<getCategoryBySlugResponse | undefined>;
  searchProducts(
    searchText: string,
    pageNumber: number,
    limit: number
  ): Promise<IProductSearchResponse>;
  getCompare: () => Promise<CompareResponse | undefined>;
}
