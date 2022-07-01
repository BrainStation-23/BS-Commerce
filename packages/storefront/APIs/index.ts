import {
  forgotPasswordRest,
  getFeaturedProductsRest,
  getPublicProductByIdRest,
  getPublicProductsRest,
  getUserRest,
  signinRest,
  signUpRest,
} from './restApi';
import {
  forgotPasswordGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getUserGraphQl,
  signInGraphql,
  signUpGraphql,
} from './graphQL';
import { config } from 'config';
import { apiFunction } from 'utils/types';

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  signIn: signInGraphql,
  signUp: signUpGraphql,
  forgotPassword: forgotPasswordGraphql,
  getPublicProducts: getPublicProductsGraphql,
  getPublicProductsById: getPublicProductByIdGraphql,
  getFeaturedProducts: getFeaturedProductsGraphql,
};

const restApi: apiFunction = {
  getUser: getUserRest,
  signIn: signinRest,
  signUp: signUpRest,
  forgotPassword: forgotPasswordRest,
  getPublicProducts: getPublicProductsRest,
  getPublicProductsById: getPublicProductByIdRest,
  getFeaturedProducts: getFeaturedProductsRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
