import { createProductRest, getProductRest, getUserRest } from "./restApi";
import { createProductGraphQl, getUserGraphQl } from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  createProduct: createProductGraphQl,
  getProduct:getProductRest,
};

const restApi: apiFunction = {
  getUser: getUserRest,
  createProduct: createProductRest,
  getProduct:getProductRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
