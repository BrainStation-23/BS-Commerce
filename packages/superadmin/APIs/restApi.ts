import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {CreateProductRequest} from "../../models/src/product"
import { User } from "../utils/types";

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error) {
    console.error(error);
  }
}
export async function createProductRest(data): Promise<CreateProductRequest | undefined> {
  console.log(data);
  
  try {
    const response = await axios.post<CreateProductRequest>(`${apiEndPoints.createProduct}`, data);
    console.log(response);
    
    return response.data as CreateProductRequest;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
