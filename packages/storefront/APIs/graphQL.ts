import { GET_PRODUCTS } from "graphqlSchema/queries/productQueries";
import { addToCartRequest, AddToCartResponse, Cart, deleteCartItemRequest, deleteCartItemResponse, GetCustomerAllProductsResponse } from "models";
import { GetCustomerProductResponse } from "models";
import { CustomerSignInResponse } from "models";
import { CreateCustomerRequest } from "models";
import { CreateCustomerResponse } from "models";
import { CustomerSignInRequest } from "models";
import { GetCustomerProductParams } from "models";
import { CreateUserRequest, CreateUserResponse, ForgotPasswordRequest, ForgotPasswordResponse, SignInRequest, SignInResponse } from "models";
import { User } from "utils/types";
import client from "../graphqlSchema/apollo-client";

export async function getUserGraphQl(): Promise<User[] | undefined> {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data as User[];
}

export async function signInGraphql(data: CustomerSignInRequest): Promise<CustomerSignInResponse | undefined> {
  return undefined;
}

export async function signUpGraphql(data: CreateCustomerRequest): Promise<CreateCustomerResponse | undefined> {
  return undefined;
}

export async function forgotPasswordGraphql(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse | undefined> {
  return undefined;
}

export async function getPublicProductsGraphql(): Promise<GetCustomerAllProductsResponse | undefined> {
 return undefined;
}

export async function getPublicProductByIdGraphql(productId: GetCustomerProductParams): Promise<GetCustomerProductResponse | undefined> {
  return undefined;
}

export async function getFeaturedProductsGraphql(): Promise<GetCustomerAllProductsResponse | undefined> {
  return undefined;
}

export async function getCartGraphql(): Promise<Cart[] | undefined> {
  return undefined
}

export async function addToCartGraphql(productId: addToCartRequest): Promise<AddToCartResponse | undefined> {
  return undefined;
}
export async function deleteCartItemGraphql(productId:deleteCartItemRequest): Promise<deleteCartItemResponse | undefined> {
  return undefined;
}