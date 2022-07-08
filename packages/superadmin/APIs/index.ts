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
  getUserProfileRest,
  getCategoryListRest,
  getCategoryRest,
  createCategoryRest,
  getTagsRest,
} from './restApi';
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  signinGraphQL,
  createAdminGraphql,
  getAdminsGraphql,
  getUserProfileGraphql,
  getCategoryListGraphQL,
  getCategoryGraphQL,
  createCategoryGraphQL,
  getTagsGraphQL,
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
  createCategory: createCategoryGraphQL,
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
  getTags: getTagsGraphQL,
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  getCategoryList: getCategoryListRest,
  getCategory: getCategoryRest,
  createCategory: createCategoryRest,
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
  getTags: getTagsRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
