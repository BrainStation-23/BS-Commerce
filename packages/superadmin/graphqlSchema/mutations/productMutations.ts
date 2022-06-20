import { gql } from "@apollo/client";

const ADD_PRODUCTS = gql`
  mutation addProducts($name: String!, $email: String!, $phone: String!) {
    addProducts(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_PRODUCTS };
