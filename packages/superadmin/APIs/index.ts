import {
  getProductsRest,
  getProductSearchRest,
  createProductRest,
  getProductRest,
  updateProductRest,
  createManufacturerRest,
  getManufacturerRest,
  deleteManufacturerRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  createProductGraphQl,
  // getManufacturerGraphQl,
  // deleteManufacturerGraphQl,
  // createManufacturerGraphQl,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  // getManufacturer: getManufacturerGraphQl,
  // deleteManufacturer: deleteManufacturerGraphQl,
  // createManufacturer: createManufacturerGraphQl
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  createManufacturer: createManufacturerRest,
  getManufacturer: getManufacturerRest,
  deleteManufacturer: deleteManufacturerRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
