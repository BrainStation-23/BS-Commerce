import {
  addToWishlistRest,
  deleteFullWishlistRest,
  deleteWishlistItemRest,
  forgotPasswordRest,
  getCustomerWishlistRest,
  getFeaturedProductsRest,
  getPublicProductByIdRest,
  getPublicProductsRest,
  getSignedInUserRest,
  getUserRest,
  signinRest,
  signUpRest,
} from './restApi';
import {
  addToWishlistGraphql,
  deleteFullWishlistGraphql,
  deleteWishlistItemGraphql,
  forgotPasswordGraphql,
  getCustomerWishlistGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getSignedInUserGraphql,
  getUserGraphQl,
  signInGraphql,
  signUpGraphql,
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
  addToWishList: addToWishlistGraphql,
  getCustomerWishlist: getCustomerWishlistGraphql,
  deleteWishlistItem: deleteWishlistItemGraphql,
  deleteFullWishlist: deleteFullWishlistGraphql,
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
  addToWishList: addToWishlistRest,
  getCustomerWishlist: getCustomerWishlistRest,
  deleteWishlistItem: deleteWishlistItemRest,
  deleteFullWishlist: deleteFullWishlistRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
