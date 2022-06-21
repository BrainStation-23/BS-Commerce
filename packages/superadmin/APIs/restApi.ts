import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "../../models/src/product";
import { User } from "../utils/types";
import { Product } from "models";
import { toast } from "react-toastify";

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
export async function createProductRest(
  data: CreateProductRequest,
  router
): Promise<CreateProductRequest | undefined> {
  try {
    const response = await axios.post<CreateProductRequest>(
      `${apiEndPoints.product}`,
      data
    );
    router.push("/Product");
    toast.success("Create Successful");
    return response.data as CreateProductRequest;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
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
    toast.error(error?.response?.data?.message);
  }
}

export async function getProductSearchRest(
  search: string
): Promise<Product | undefined> {
  try {
    const { data } = await axios.get(`${apiEndPoints?.product}/sku/${search}`);
    return data?.data as Product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getProductRest(
  data: GetProductParams
): Promise<GetProductParams | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.product}/${data.productId}`);

    return res?.data as Product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateProductRest(
  data: UpdateProductRequest,
  id: string
): Promise<UpdateProductRequest | undefined> {
  try {
    const response = await axios.patch<UpdateProductRequest>(
      `${apiEndPoints.product}/${id}`,
      data
    );
    toast.success("Edit Successful");
    return response.data as UpdateProductRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}
