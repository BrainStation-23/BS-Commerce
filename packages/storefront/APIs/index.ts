import { getUserRest } from "./restApi";
import { getUserGraphQl } from "./graphQL";
import { config } from "config";

const graphqlApi = {
    getUser: getUserGraphQl,
}

const restApi = {
    getUser: getUserRest
}

export const userAPI = config.apiService === 'GRAPHQL' ? graphqlApi : restApi
