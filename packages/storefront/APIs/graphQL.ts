import { GET_PRODUCTS } from 'graphqlSchema/queries/productQueries';
import {
  GetCustomerAllProductsResponse,
  GetCustomerQuery,
  GetCustomerResponse,
  updateCartItemRequest,
  updateCartItemResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  CreateCustomerRequest,
  GetCustomerProductResponse,
  CreateCustomerResponse,
  CustomerSignInRequest,
  GetCustomerProductParams,
  CustomerSignInResponse,
  addToCartRequest,
  AddToCartResponse,
  deleteCartItemRequest,
  deleteCartItemResponse,
  Cart,
  getCategoryListResponse,
  GetProductsByConditionQuery,
  GetProductsByConditionSuccessResponse,
  addToWishlistRequest,
  AddToWishlistResponse,
  getUserWishlistResponse,
  DeleteWishlistItemParams,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
  CompareResponse,
  GetCustomerInformationSuccessResponse,
  UpdateCustomerRequestBody,
  UpdateCustomerSuccessResponse,
  AddCustomerNewAddressResponse,
  CustomerAddress,
  GetCustomerInformationResponse,
  DeleteCustomerAddressResponse,
  IOrderResponseData,
  UpdateCustomerAddressResponse,
  Wishlist,
  getCategoryListSuccessResponse,
} from 'models';
import { NextRouter } from 'next/router';

// GraphQL example
// import client from '../graphqlSchema/apollo-client';
// export async function getUserGraphQl(): Promise<User[] | undefined> {
//   const { data } = await client.query({
//     query: GET_PRODUCTS,
//   });
//   return data as User[];
//}

export async function signInGraphql(
  data: CustomerSignInRequest
): Promise<CustomerSignInResponse | undefined> {
  return undefined;
}

export async function signUpGraphql(
  data: CreateCustomerRequest
): Promise<CreateCustomerResponse | undefined> {
  return undefined;
}

export async function forgotPasswordGraphql(
  data: ForgotPasswordRequest
): Promise<ForgotPasswordResponse | undefined> {
  return undefined;
}

export async function getPublicProductsGraphql(): Promise<
  GetCustomerAllProductsResponse | undefined
> {
  return undefined;
}

export async function getPublicProductByIdGraphql(
  productId: string
): Promise<GetCustomerProductResponse | undefined> {
  return undefined;
}

export async function getPublicProductByCategoryIDGraphql(
  categoryId: string
): Promise<GetCustomerAllProductsResponse | undefined> {
  return undefined;
}

export async function getFeaturedProductsGraphql(): Promise<
  GetCustomerAllProductsResponse | undefined
> {
  return undefined;
}

export async function getCartGraphql(): Promise<Cart | undefined> {
  return undefined;
}

export async function addToCartGraphql(
  productId: addToCartRequest
): Promise<AddToCartResponse | undefined> {
  return undefined;
}

export async function getSignedInUserGraphql(
  isEmail: boolean,
  data: GetCustomerQuery
): Promise<GetCustomerResponse | undefined> {
  return undefined;
}
export async function deleteCartItemGraphql(
  productId: deleteCartItemRequest
): Promise<deleteCartItemResponse | undefined> {
  return undefined;
}

export async function updateCartGraphql(
  item: updateCartItemRequest
): Promise<updateCartItemResponse | undefined> {
  return undefined;
}

export async function deleteAllFromCartGraphql(): Promise<
  deleteCartItemResponse | undefined
> {
  return undefined;
}

export async function getCategoryListGraphql(): Promise<
  getCategoryListSuccessResponse | undefined
> {
  return undefined;
}
export async function addToWishlistGraphql(
  data: addToWishlistRequest
): Promise<AddToWishlistResponse | undefined> {
  return undefined;
}

export async function addToCompareGraphql(
  productId: string
): Promise<CompareResponse | undefined> {
  return undefined;
}

export async function getCustomerWishlistGraphql(
  token: string
): Promise<Wishlist | undefined> {
  return undefined;
}

export async function deleteWishlistItemGraphql(
  data: string
): Promise<deleteWishlistItemResponse | undefined> {
  return undefined;
}

export async function deleteFullWishlistGraphql(): Promise<
  deleteAllWishlistItemsResponse | undefined
> {
  return undefined;
}
export async function deleteFromCompareGraphql(productId: string) {}

export async function getCustomerProfileGraphql(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  return undefined;
}
export async function addCustomerNewAddressGraphql(
  customerAddress: CustomerAddress
): Promise<AddCustomerNewAddressResponse | undefined> {
  return undefined;
}

export async function deleteCustomerAddressGraphql(
  productId: string
): Promise<DeleteCustomerAddressResponse | undefined> {
  return undefined;
}

export async function updateCustomerAddressGraphql(
  addressId: string,
  data: any
): Promise<UpdateCustomerAddressResponse | undefined> {
  return undefined;
}

export async function getCustomerGraphql(
  token: string
): Promise<GetCustomerInformationSuccessResponse | undefined> {
  return undefined;
}

export async function updateCustomerGraphql(
  data: UpdateCustomerRequestBody
): Promise<UpdateCustomerSuccessResponse | undefined> {
  return undefined;
}

export async function checkoutGraphql(
  data: any,
  router: NextRouter
): Promise<IOrderResponseData | undefined> {
  return undefined;
}

export async function getOrderProductsGraphql(
  token: string
): Promise<IOrderResponseData | undefined> {
  return undefined;
}

export async function getOrderProductGraphql(
  token: string,
  OrderId: string
): Promise<IOrderResponseData | undefined> {
  return undefined;
}
