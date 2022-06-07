import axios from "axios"
import { config } from "config";

export async function getUserRest() {
    try {
      const response = await axios.get(`${config.restPrefix}/user`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }