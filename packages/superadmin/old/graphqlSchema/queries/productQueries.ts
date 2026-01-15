import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query ExampleQuery {
    countries {
      code
      name
    }
  }
`;

export { GET_PRODUCTS };
