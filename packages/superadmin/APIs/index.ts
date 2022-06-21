import {
  getProductsRest,
  getProductSearchRest,
  createProductRest,
  getProductRest,
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
  createProduct: createProductRest,
  getProduct: getProductRest,
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  createProduct: createProductRest,
  getProduct: getProductRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
