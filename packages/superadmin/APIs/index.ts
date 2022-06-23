import {
  getUserRest,
  getProductsRest,
  getProductSearchRest,
  createProductRest,
  getProductRest,
  updateProductRest,
  getCategoriesRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  getCategoriesGraphQL,
  createProductGraphQl,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  getCategories: getCategoriesGraphQL,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  getCategories: getCategoriesRest,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
