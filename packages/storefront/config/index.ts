const {
  NEXT_PUBLIC_REST_API_PREFIX_GRAPHQL,
  NEXT_PUBLIC_REST_API_PREFIX_REST,
  NEXT_PUBLIC_API,
  NEXT_PUBLIC_SIGN_IN_URL,
  NEXT_PUBLIC_REST_API_PREFIX_STATIC,
} = process?.env;

export const config = {
  apiService: process.env.NEXT_PUBLIC_API,
  graphqlPrefix: process.env.NEXT_PUBLIC_REST_API_PREFIX_GRAPHQL,
  restPrefix: process.env.NEXT_PUBLIC_REST_API_PREFIX_REST,
  staticPrefix: process.env.NEXT_PUBLIC_REST_API_PREFIX_STATIC,
  signIn:
    process.env.NEXT_PUBLIC_API === 'STATIC'
      ? process.env.NEXT_PUBLIC_REST_API_PREFIX_STATIC
      : process.env.NEXT_PUBLIC_REST_API_PREFIX_REST,
};
