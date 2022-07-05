import {
  addToCartRest,
  deleteAllFromCartRest,
  deleteFromCartRest,
  forgotPasswordRest,
  getCartRest,
  getFeaturedProductsRest,
  getPublicProductByIdRest,
  getPublicProductsRest,
  getSignedInUserRest,
  getUserRest,
  signinRest,
  signUpRest,
  updateCartRest,
} from './restApi';
import {
  addToCartGraphql,
  deleteCartItemGraphql,
  forgotPasswordGraphql,
  getCartGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getSignedInUserGraphql,
  getUserGraphQl,
  signInGraphql,
  signUpGraphql,
  updateCartGraphql,
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
  getFeaturedProducts: getFeaturedProductsGraphql,
  getCart: getCartGraphql,
  addToCart: addToCartGraphql,
  deleteCartItem: deleteCartItemGraphql,
  updateCartItem: updateCartGraphql,
  deleteAllCartItem: deleteCartItemGraphql,
};

const restApi: apiFunction = {
  signUp: signUpRest,
  signIn: signinRest,
  getSignedInUser: getSignedInUserRest,
  getUser: getUserRest,
  forgotPassword: forgotPasswordRest,
  getPublicProducts: getPublicProductsRest,
  getPublicProductsById: getPublicProductByIdRest,
  getFeaturedProducts: getFeaturedProductsRest,
  getCart: getCartRest,
  addToCart: addToCartRest,
  deleteCartItem: deleteFromCartRest,
  updateCartItem: updateCartRest,
  deleteAllCartItem: deleteAllFromCartRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
