import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import { User } from "../utils/types";
import { Product } from "models";

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsRest(
  pageSize: number
): Promise<Product[] | undefined> {
  try {
    const { data } = await axios?.get(
      `${apiEndPoints.product}?skip=1&limit=${pageSize}`
    );
    return data?.data as Product[];
  } catch (error) {
    console.error(error);
  }
}

export async function getProductSearchRest(
  search: string
): Promise<Product | undefined> {
  try {
    const { data } = await axios.get(`${apiEndPoints.product}/sku/${search}`);
    return data?.data as Product;
  } catch (error) {
    console.error(error);
  }
}
