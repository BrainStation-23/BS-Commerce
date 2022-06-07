import { gql } from "@apollo/client";
import client from "./apollo-client";

export async function getUserGraphQl(){
    const { data } = await client.query({
        query: gql`
          query Example {
            countries {
              code
              name
              emoji
            }
          }
        `,
      });
 return data
}