import {
  checkoutRest,
  addToWishlistRest,
  deleteFullWishlistRest,
  deleteWishlistItemRest,
  addToCompareRest,
  deleteFromCompareRest,
  forgotPasswordRest,
  getCustomerWishlistRest,
  getFeaturedProductsRest,
  getOrderProductsRest,
  getPublicProductByIdRest,
  getPublicProductByCategoryIDRest,
  getPublicProductsRest,
  getSignedInUserRest,
  signinRest,
  signUpRest,
  getCategoryListRest,
  getOrderProductRest,
  getCustomerProfileRest,
  deleteCustomerAddressRest,
  updateCustomerAddressRest,
  addCustomerNewAddressRest,
  getCustomerRest,
  updateCustomerRest,
} from './restApi';

import {
  addToWishlistGraphql,
  deleteFullWishlistGraphql,
  deleteWishlistItemGraphql,
  addToCompareGraphql,
  deleteFromCompareGraphql,
  forgotPasswordGraphql,
  getCustomerWishlistGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getSignedInUserGraphql,
  getPublicProductByCategoryIDGraphql,
  signInGraphql,
  signUpGraphql,
  getCategoryListGraphql,
  getCustomerProfileGraphql,
  deleteCustomerAddressGraphql,
  updateCustomerAddressGraphql,
  addCustomerNewAddressGraphql,
  checkoutGraphql,
  getCustomerGraphql,
  updateCustomerGraphql,
  getOrderProductsGraphql,
  getOrderProductGraphql,
} from './graphQL';
import { config } from 'config';
import { apiFunction } from 'utils/types';

const graphqlApi: apiFunction = {
  signIn: signInGraphql,
  signUp: signUpGraphql,
  getSignedInUser: getSignedInUserGraphql,
  forgotPassword: forgotPasswordGraphql,
  getPublicProducts: getPublicProductsGraphql,
  getPublicProductsById: getPublicProductByIdGraphql,
  getPublicProductByCategoryId: getPublicProductByCategoryIDGraphql,
  getFeaturedProducts: getFeaturedProductsGraphql,
  getCategoryList: getCategoryListGraphql,
  checkout: checkoutGraphql,
  getOrderProducts: getOrderProductsGraphql,
  getOrderProduct: getOrderProductGraphql,
  addToWishList: addToWishlistGraphql,
  getCustomerWishlist: getCustomerWishlistGraphql,
  deleteWishlistItem: deleteWishlistItemGraphql,
  deleteFullWishlist: deleteFullWishlistGraphql,
  addToCompare: addToCompareGraphql,
  deleteFromCompare: deleteFromCompareGraphql,
  getCustomerProfile: getCustomerProfileGraphql,
  deleteCustomerAddress: deleteCustomerAddressGraphql,
  updateCustomerAddress: updateCustomerAddressGraphql,
  addCustomerNewAddress: addCustomerNewAddressGraphql,
  getCustomer: getCustomerGraphql,
  updateCustomer: updateCustomerGraphql,
};

const restApi: apiFunction = {
  signUp: signUpRest,
  signIn: signinRest,
  getSignedInUser: getSignedInUserRest,
  forgotPassword: forgotPasswordRest,
  getPublicProducts: getPublicProductsRest,
  getPublicProductsById: getPublicProductByIdRest,
  getPublicProductByCategoryId: getPublicProductByCategoryIDRest,
  getFeaturedProducts: getFeaturedProductsRest,
  getCategoryList: getCategoryListRest,
  checkout: checkoutRest,
  getOrderProducts: getOrderProductsRest,
  getOrderProduct: getOrderProductRest,
  addToWishList: addToWishlistRest,
  getCustomerWishlist: getCustomerWishlistRest,
  deleteWishlistItem: deleteWishlistItemRest,
  deleteFullWishlist: deleteFullWishlistRest,
  addToCompare: addToCompareRest,
  deleteFromCompare: deleteFromCompareRest,
  getCustomerProfile: getCustomerProfileRest,
  deleteCustomerAddress: deleteCustomerAddressRest,
  updateCustomerAddress: updateCustomerAddressRest,
  addCustomerNewAddress: addCustomerNewAddressRest,
  getCustomer: getCustomerRest,
  updateCustomer: updateCustomerRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
