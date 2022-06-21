import { forgotPasswordRest, getUserRest, signinRest, signUpRest } from "./restApi";
import { forgotPasswordGraphql, getUserGraphQl, signInGraphql, signUpGraphql } from "./graphQL";
import { config } from "config";
import { apiFunction } from "utils/types";

const graphqlApi:apiFunction = {
    getUser: getUserGraphQl,
    signIn: signInGraphql,
    signUp: signUpGraphql,
    forgotPassword: forgotPasswordGraphql,

}

const restApi:apiFunction = {
    getUser: getUserRest,
    signIn: signinRest,
    signUp: signUpRest,
    forgotPassword: forgotPasswordRest,
}

export const userAPI:apiFunction = config?.apiService === 'GRAPHQL' ? graphqlApi : restApi
