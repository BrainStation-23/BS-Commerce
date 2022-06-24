import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "../../models/src/product";
import { SignInRequest, SignInSuccessResponse } from "models";
import { User } from "../utils/types";
import { Product } from "models";
import { toast } from "react-toastify";
import { NextRouter } from "next/router";

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}
export async function createProductRest(
  data: CreateProductRequest,
  router: any
): Promise<CreateProductRequest | undefined> {
  try {
    const response = await axios.post<CreateProductRequest>(`/product`, data);
    router.push("/Product");
    toast.success("Create Successful");
    return response.data as CreateProductRequest;
  } catch (error: any) {
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
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.error);
  }
}

export async function getProductSearchRest(
  search: string
): Promise<Product | undefined> {
  try {
    const { data } = await axios.get(`${apiEndPoints?.product}/sku/${search}`);
    return data?.data as Product;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.error);
  }
}

export async function getProductRest(
  data: GetProductParams
): Promise<GetProductParams | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.product}/${data.productId}`);
    return res?.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateProductRest(
  data: UpdateProductRequest,
  id: string,
  router: any
): Promise<UpdateProductRequest | undefined> {
  try {
    const response = await axios.patch<UpdateProductRequest>(
      `${apiEndPoints.product}/${id}`,
      data
    );
    router.push("/Product");
    toast.success("Edit Successful");
    return response.data as UpdateProductRequest;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteProductRest(
  productId: string
): Promise<boolean | undefined> {
  try {
    await axios.delete(`${apiEndPoints.product}/${productId}`);
    toast.success("Delete Successful");
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function signinRest(
  data: SignInRequest,
  router: NextRouter
): Promise<SignInSuccessResponse | undefined> {
  try {
    const response = await axios.post<UpdateProductRequest>(
      `${apiEndPoints.signin}`,
      data
    );
    router.push("/");
    toast.success("Successfully signed in!");
    return response.data as SignInSuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
  }
}
