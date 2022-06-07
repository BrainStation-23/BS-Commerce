import { gql } from "@apollo/client";
import { User } from "utils/types";
import client from "./apollo-client";

export async function getUserGraphQl():Promise<User[] | undefined>{
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