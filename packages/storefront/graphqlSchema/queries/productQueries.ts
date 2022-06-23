import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query getExample {
    countries {
    code
    name
  }
  }
`;

export { GET_PRODUCTS };