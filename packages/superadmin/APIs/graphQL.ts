import { GET_PRODUCTS } from "../graphqlSchema/queries/productQueries";
import { User } from "../utils/types";
import client from "../graphqlSchema/apollo-client";
import { CreateProductRequest, Product } from "models";

export async function getUserGraphQl(): Promise<User[] | undefined> {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data as User[];
}
export async function createProductGraphQl(data: CreateProductRequest) {
  return;
}

export async function getProductsGraphQL(): Promise<Product[] | undefined> {
  return;
}

export async function getProductSearchGraphQL(): Promise<Product | undefined> {
  return;
}
