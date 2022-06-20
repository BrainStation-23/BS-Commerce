import { createProductRest, getUserRest } from "./restApi";
import { createProductGraphQl, getUserGraphQl } from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  createProduct: createProductGraphQl,
};

const restApi: apiFunction = {
  getUser: getUserRest,
  createProduct: createProductRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
