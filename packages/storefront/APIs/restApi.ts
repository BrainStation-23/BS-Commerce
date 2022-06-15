import axios from "axios"
import { config } from "config";
import { User } from "utils/types";

export async function getUserRest():Promise<User[] | undefined> {
    try {
      const response = await axios.get(`${config.restPrefix}/user`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }