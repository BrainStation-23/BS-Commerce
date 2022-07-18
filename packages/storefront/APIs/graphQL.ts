import { GET_PRODUCTS } from 'graphqlSchema/queries/productQueries';
import { GetCustomerInformationResponse } from 'models';
import { UpdateCustomerAddressResponse } from 'models';
import { DeleteCustomerAddressResponse } from 'models';
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
  AddCompareItem,
  CompareResponse,
} from 'models';

import { User } from 'utils/types';
import client from '../graphqlSchema/apollo-client';

export async function getUserGraphQl(): Promise<User[] | undefined> {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data as User[];
}

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
  productId: GetCustomerProductParams
): Promise<GetCustomerProductResponse | undefined> {
  return undefined;
}

export async function getPublicProductByCategoryIDGraphql(
  CategoryId: GetProductsByConditionQuery
): Promise<GetProductsByConditionSuccessResponse | undefined> {
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
  getCategoryListResponse | undefined
> {
  return undefined;
}
export async function addToWishlistGraphql(data: addToWishlistRequest): Promise<
  AddToWishlistResponse | undefined
  > {
    return undefined;
  }

export async function addToCompareGraphql(productId: AddCompareItem): Promise<
  CompareResponse | undefined
> {
  return undefined;
}

export async function getCustomerWishlistGraphql(token: string): Promise<
  getUserWishlistResponse | undefined
> {
  return undefined;
}

export async function deleteWishlistItemGraphql(data: string): Promise<
  deleteWishlistItemResponse | undefined
> {
  return undefined;
}

export async function deleteFullWishlistGraphql(): Promise<deleteAllWishlistItemsResponse | undefined> {
  return undefined;
}
export async function deleteFromCompareGraphql(productId: AddCompareItem) {
}

export async function getCustomerProfileGraphql(token: string): Promise<GetCustomerInformationResponse | undefined> {
  return undefined;
}

export async function deleteCustomerAddressGraphql(productId: AddCompareItem): Promise<DeleteCustomerAddressResponse | undefined> {
  return undefined
}

export async function updateCustomerAddressGraphql(addressId: string, data: any): Promise<UpdateCustomerAddressResponse | undefined> {
  return undefined
}