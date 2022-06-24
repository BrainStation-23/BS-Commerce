import {
  getProductsRest,
  getProductSearchRest,
  createProductRest,
  getProductRest,
  updateProductRest,
  deleteProductRest,
  signinRest,
  createAdminRest,
  getAdminsRest,
  createManufacturerRest,
  getManufacturerRest,
  deleteManufacturerRest,
  getSingleManufacturerRest,
  updateManufacturerRest,
  updateAdminRest,
  changePasswordRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  createProductGraphQl,
  signinGraphQL,
  createAdminGraphql,
  getAdminsGraphql,
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
  deleteProduct: deleteProductRest,
  signin: signinGraphQL,
  createAdmin: createAdminGraphql,
  getAdmins: getAdminsGraphql,
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
  deleteProduct: deleteProductRest,
  signin: signinRest,
  createAdmin: createAdminRest,
  getAdmins: getAdminsRest,
  createManufacturer: createManufacturerRest,
  getManufacturer: getManufacturerRest,
  deleteManufacturer: deleteManufacturerRest,
  getSingleManufacturer: getSingleManufacturerRest,
  updateManufacturer: updateManufacturerRest,
  updateAdmin: updateAdminRest,
  changePassword: changePasswordRest
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
