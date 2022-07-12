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
  updateAdminRest,
  changePasswordRest,
  createManufacturerRest,
  getManufacturerRest,
  deleteManufacturerRest,
  getSingleManufacturerRest,
  updateManufacturerRest,
  getUserProfileRest,
  getCategoryListRest,
  getCategoryRest,
} from './restApi';
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  createProductGraphQl,
  signinGraphQL,
  createAdminGraphql,
  getAdminsGraphql,
  getUserProfileGraphql,
  getCategoryListGraphQL,
  getCategoryGraphQL,
  // getManufacturerGraphQl,
  // deleteManufacturerGraphQl,
  // createManufacturerGraphQl,
} from './graphQL';
import { config } from '../config/index';
import { apiFunction } from '../utils/types';

const graphqlApi: apiFunction = {
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  getCategoryList: getCategoryListGraphQL,
  getCategory: getCategoryGraphQL,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  deleteProduct: deleteProductRest,
  signin: signinGraphQL,
  createAdmin: createAdminGraphql,
  getAdmins: getAdminsGraphql,
  getUserProfile: getUserProfileGraphql,
  // getManufacturer: getManufacturerGraphQl,
  // deleteManufacturer: deleteManufacturerGraphQl,
  // createManufacturer: createManufacturerGraphQl
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  getCategoryList: getCategoryListRest,
  getCategory: getCategoryRest,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  deleteProduct: deleteProductRest,
  signin: signinRest,
  createAdmin: createAdminRest,
  getAdmins: getAdminsRest,
  updateAdmin: updateAdminRest,
  changePassword: changePasswordRest,
  createManufacturer: createManufacturerRest,
  getManufacturer: getManufacturerRest,
  deleteManufacturer: deleteManufacturerRest,
  getSingleManufacturer: getSingleManufacturerRest,
  updateManufacturer: updateManufacturerRest,
  getUserProfile: getUserProfileRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
