import axios from "axios"
import { apiEndPoints } from "utils/apiEndPoints";
import { User } from "utils/types";

export async function getUserRest():Promise<User[] | undefined> {
    try {
      const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
      return response.data as User[];
    } catch (error) {
      console.error(error);
    }
  }