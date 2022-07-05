import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "../../models/src/product";
import {
  SignInRequest,
  SignInSuccessResponse,
  CreateManufacturerRequest,
  UpdateManufacturerRequest,
  GetUserResponse,
  GetUserSuccessResponse,
  UpdatedUserRequest,
  ChangePasswordRequest,
  getCategoryBySlugRequest,
  getCategoryBySlugSuccessResponse,
} from "models";

import { User } from "../utils/types";
import { GetManufacturerSuccessResponse, Manufacturer, Product } from "models";
import { toast } from "react-toastify";
import { CategoryInterface } from "../components/category/catergory-model";
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

//  Create Manufacturer Rest API Post

export async function getProductsRest(
  pageSize: number
): Promise<Product[] | undefined> {
  try {
    const { data } = await axios?.get(
      `${apiEndPoints?.product}?skip=0&limit=${pageSize}`
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

export async function createAdminRest(
  data: User,
  cb: any
): Promise<User | undefined> {
  try {
    await axios.post(`${apiEndPoints.auth}/signup`, data);
    toast.success("Create Successful");
    cb();
    return;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
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

export async function getAdminsRest(): Promise<User[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.user}`);
    return data?.data as User[];
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateAdminRest(
  data: UpdatedUserRequest,
  //id: string
  router
): Promise<UpdatedUserRequest | undefined> {
  try {
    const response = await axios.patch<UpdatedUserRequest>(
      `${apiEndPoints.user}`,
      data
    );
    router.push("/users/admin");
    toast.success("Edit Successful");
    return response.data as UpdatedUserRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function changePasswordRest(
  data: ChangePasswordRequest,
  //id: string
  router
): Promise<ChangePasswordRequest | undefined> {
  try {
    const response = await axios.patch<ChangePasswordRequest>(
      `${apiEndPoints.user}`,
      data
    );
    router.push("/users/admin");
    toast.success("Edit Successful");
    return response.data as ChangePasswordRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getManufacturerRest(
  pageSize: number
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.manufacturerList}`);
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
export async function createManufacturerRest(
  data: CreateManufacturerRequest,
  router: any
): Promise<CreateManufacturerRequest | undefined> {
  try {
    const response = await axios.post<CreateManufacturerRequest>(
      `${apiEndPoints.manufacturer}`,
      data
    );
    router.push("/Manufacturer/");
    toast.success("Create Successful");
    return response.data as CreateManufacturerRequest;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
  }
}

export async function deleteManufacturerRest(
  id: string,
  router: any
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.delete(
      `${apiEndPoints?.manufacturerList}/${id}`
    );
    router.push("/Manufacturer/");
    toast.success("Successfully deleted");
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getSingleManufacturerRest(
  data: any,
  manufacturerId: any
): Promise<any | undefined> {
  try {
    // const res = await axios.get(`${apiEndPoints.manufacturer}/${data.productId}`);
    const res = await axios.get(`manufacturers/${data}`);

    return res?.data as Manufacturer;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateManufacturerRest(
  data: UpdateManufacturerRequest,
  id: string,
  router: any
): Promise<UpdateManufacturerRequest | undefined> {
  try {
    const response = await axios.patch<UpdateManufacturerRequest>(
      `manufacturers/${id}`,
      data
    );
    // alert("Hi");
    router.push("/Manufacturer/");
    toast.success("Edit Successful");
    return response.data as UpdateManufacturerRequest;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getCategoriesRest(): Promise<
  CategoryInterface[] | undefined
> {
  try {
    const response = await axios.get(`${apiEndPoints.category}`);

    return response?.data.data.categories as CategoryInterface[];
  } catch (error: any) {
    console.error(error);
  }
}

export async function getUserProfileRest(): Promise<
  GetUserSuccessResponse | undefined
> {
  try {
    const { data } = await axios.get(`${apiEndPoints.user}`);
    return data as GetUserSuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getCategoryBySlugRest(
  slug: getCategoryBySlugRequest
): Promise<getCategoryBySlugSuccessResponse | undefined> {
  try {
    const { data } = await axios.get(
      `${apiEndPoints.category}/slug/${slug.slug}`
    );
    return data as getCategoryBySlugSuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}
