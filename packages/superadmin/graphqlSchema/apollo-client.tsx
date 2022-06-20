import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com", //`${process.env.NEXT_PUBLIC_REST_API_PREFIX_GRAPHQL}`,
  cache: new InMemoryCache(),
});

export default client;
