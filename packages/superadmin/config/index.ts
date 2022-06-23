const { NEXT_PUBLIC_REST_API_PREFIX_GRAPHQL, NEXT_PUBLIC_REST_API_PREFIX_REST, NEXT_PUBLIC_API } = process?.env;

export const config = {
    apiService: NEXT_PUBLIC_API || 'REST',
    graphqlPrefix: NEXT_PUBLIC_REST_API_PREFIX_GRAPHQL || 'http://localhost:3000/graphql',
    restPrefix: NEXT_PUBLIC_REST_API_PREFIX_REST || 'http://localhost:3000/api',
}