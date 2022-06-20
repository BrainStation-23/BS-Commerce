import { getUserRest } from "./restApi";
import { getUserGraphQl } from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
};

const restApi: apiFunction = {
  getUser: getUserRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
