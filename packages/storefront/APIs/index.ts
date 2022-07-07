import {
  forgotPasswordRest,
  getFeaturedProductsRest,
  getPublicProductByIdRest,
  getPublicProductByCategoryIDRest,
  getPublicProductsRest,
  getSignedInUserRest,
  getUserRest,
  signinRest,
  signUpRest,
  getCategoryListRest,
} from './restApi';
import {
  forgotPasswordGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getSignedInUserGraphql,
  getUserGraphQl,
  getPublicProductByCategoryIDGraphql,
  signInGraphql,
  signUpGraphql,
  getCategoryListGraphql,
} from './graphQL';
import { config } from 'config';
import { apiFunction } from 'utils/types';

const graphqlApi: apiFunction = {
  signIn: signInGraphql,
  signUp: signUpGraphql,
  getSignedInUser: getSignedInUserGraphql,
  forgotPassword: forgotPasswordGraphql,
  getUser: getUserGraphQl,
  getPublicProducts: getPublicProductsGraphql,
  getPublicProductsById: getPublicProductByIdGraphql,
  getPublicProductByCategoryId: getPublicProductByCategoryIDGraphql,
  getFeaturedProducts: getFeaturedProductsGraphql,
  getCategoryList: getCategoryListGraphql,
};

const restApi: apiFunction = {
  signUp: signUpRest,
  signIn: signinRest,
  getSignedInUser: getSignedInUserRest,
  getUser: getUserRest,
  forgotPassword: forgotPasswordRest,
  getPublicProducts: getPublicProductsRest,
  getPublicProductsById: getPublicProductByIdRest,
  getPublicProductByCategoryId: getPublicProductByCategoryIDRest,
  getFeaturedProducts: getFeaturedProductsRest,
  getCategoryList: getCategoryListRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
