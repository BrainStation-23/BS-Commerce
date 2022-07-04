import {
  getUserRest,
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
  getUserProfileRest,
  getCategoriesRest,
  getCategoryBySlugRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  getCategoriesGraphQL,
  createProductGraphQl,
  signinGraphQL,
  createAdminGraphql,
  getAdminsGraphql,
  getUserProfileGraphql,
  getCategoryBySlugGraphQL,
  // getManufacturerGraphQl,
  // deleteManufacturerGraphQl,
  // createManufacturerGraphQl,
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
  deleteProduct: deleteProductRest,
  signin: signinGraphQL,
  createAdmin: createAdminGraphql,
  getAdmins: getAdminsGraphql,
  getUserProfile: getUserProfileGraphql,
  getCategoryBySlug: getCategoryBySlugGraphQL,
  // getManufacturer: getManufacturerGraphQl,
  // deleteManufacturer: deleteManufacturerGraphQl,
  // createManufacturer: createManufacturerGraphQl
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  getCategories: getCategoriesRest,
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
  getUserProfile: getUserProfileRest,
  getCategoryBySlug: getCategoryBySlugRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
