import { addToCartRest, deleteAllFromCartRest, deleteFromCartRest, forgotPasswordRest, getCartRest, getFeaturedProductsRest, getPublicProductByIdRest, getPublicProductsRest, getUserRest, signinRest, signUpRest, updateCartRest } from "./restApi";
import { addToCartGraphql, deleteCartItemGraphql, forgotPasswordGraphql, getCartGraphql, getFeaturedProductsGraphql, getPublicProductByIdGraphql, getPublicProductsGraphql, getUserGraphQl, signInGraphql, signUpGraphql } from "./graphQL";
import { config } from "config";
import { apiFunction } from "utils/types";

const graphqlApi:apiFunction = {
    getUser: getUserGraphQl,
    signIn: signInGraphql,
    signUp: signUpGraphql,
    forgotPassword: forgotPasswordGraphql,
    getPublicProducts: getPublicProductsGraphql,
    getPublicProductsById: getPublicProductByIdGraphql,
    getFeaturedProducts: getFeaturedProductsGraphql,
    getCart: getCartGraphql,
    addToCart: addToCartGraphql,
    deleteCartItem: deleteCartItemGraphql,
}

const restApi:apiFunction = {
    getUser: getUserRest,
    signIn: signinRest,
    signUp: signUpRest,
    forgotPassword: forgotPasswordRest,
    getPublicProducts: getPublicProductsRest,
    getPublicProductsById: getPublicProductByIdRest,
    getFeaturedProducts: getFeaturedProductsRest,
    getCart: getCartRest,
    addToCart: addToCartRest,
    deleteCartItem: deleteFromCartRest,
    updateCartItem: updateCartRest,
    deleteAllCartItem: deleteAllFromCartRest
}

export const userAPI:apiFunction = config?.apiService === 'GRAPHQL' ? graphqlApi : restApi
