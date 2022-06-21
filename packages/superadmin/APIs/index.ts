import {
  getProductsRest,
  getProductSearchRest,
  createProductRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  createProductGraphQl,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  createProduct: createProductGraphQl,
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  createProduct: createProductRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
