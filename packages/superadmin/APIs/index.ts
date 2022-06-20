import { getUserRest, getProductsRest, getProductSearchRest } from "./restApi";
import {
  getUserGraphQl,
  getProductsGraphQL,
  getProductSearchGraphQL,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
};

const restApi: apiFunction = {
  getUser: getUserRest,
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
