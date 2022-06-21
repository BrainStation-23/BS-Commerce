import { getUserRest, getProductsRest, getProductSearchRest, getCategoryRest } from "./restApi";
import {
  getUserGraphQl,
  getProductsGraphQL,
  getProductSearchGraphQL,
  getCategoryGraphQL,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  getCategory: getCategoryGraphQL,
};

const restApi: apiFunction = {
  getUser: getUserRest,
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  getCategory: getCategoryRest
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
