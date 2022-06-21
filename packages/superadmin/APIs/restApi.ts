import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import { CreateProductRequest, UpdateProductRequest } from "../../models/src/product";
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
export async function createProductRest(
  data: CreateProductRequest,
  router
): Promise<CreateProductRequest | undefined> {
  console.log(data);

  try {
    const response = await axios.post<CreateProductRequest>(
      `${apiEndPoints.product}`,
      data
    );
    console.log(response);
    router.push("/Product");
    return response.data as CreateProductRequest;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

export async function getProductsRest(
  pageSize: number
): Promise<Product[] | undefined> {
  try {
    const { data } = await axios?.get(
      `${apiEndPoints?.product}?skip=1&limit=${pageSize}`
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
    const { data } = await axios.get(`${apiEndPoints?.product}/sku/${search}`);
    return data?.data as Product;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductRest(
  data: GetProductParams
): Promise<GetProductParams | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.product}/${data.productId}`);

    return res?.data as Product;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductRest(data: UpdateProductRequest, router): Promise<UpdateProductRequest | undefined> {
  console.log("api", data);
  console.log("api", data.newData);

  try {
    const response = await axios.patch<UpdateProductRequest>(`${apiEndPoints.product}/${data.id}`, data.newData);
    console.log(response);

    router.push("/Product");
    return response.data as UpdateProductRequest;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
