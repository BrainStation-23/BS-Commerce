import { GET_PRODUCTS } from "graphqlSchema/queries/productQueries";
import { CreateUserRequest, CreateUserResponse, ForgotPasswordRequest, ForgotPasswordResponse, SignInRequest, SignInResponse } from "models";
import { User } from "utils/types";
import client from "../graphqlSchema/apollo-client";

export async function getUserGraphQl(): Promise<User[] | undefined> {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data as User[];
}

export async function signInGraphql(data: SignInRequest): Promise<SignInResponse | undefined> {
  return undefined;
}

export async function signUpGraphql(data: CreateUserRequest): Promise<CreateUserResponse | undefined> {
  return undefined;
}

export async function forgotPasswordGraphql(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse | undefined> {
  return undefined;
}