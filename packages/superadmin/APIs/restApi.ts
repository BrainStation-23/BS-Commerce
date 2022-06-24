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
  UpdatedUserRequest,
  ChangePasswordRequest,
} from "models";
  

import { User } from "../utils/types";
import { GetManufacturerSuccessResponse, Manufacturer, Product } from "models";
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

//  Create Manufacturer Rest API Post
export async function createManufacturerRest(
  data: CreateManufacturerRequest,
  router: any
): Promise<CreateManufacturerRequest | undefined> {
  try {
    const response = await axios.post<CreateManufacturerRequest>(
      `${apiEndPoints.manufacturer}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYWZhNWE1LTRkMmQtNDg4MS05MjdjLTc5NWUzMzE3YjVjYiIsInVzZXJuYW1lIjoic3RyaW5nQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTkzMDU0OTQ0MiwiaWF0IjoxNjU1OTMwNTQ5LCJleHAiOjE2NTYwMTY5NDl9.yrFbvBFXwUj5w47CsRoaDGVsAgqXMIUJqpYtBh63nsE"}`,
        },
      }
    );
    router.push("/Admin/Manufacturer/list");
    toast.success("Create Successful");
    return response.data as CreateManufacturerRequest;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
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

export async function getManufacturerRest(
  pageSize: number
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.manufacturerList}`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMGQ5NGMzLWUwOGQtNDlkZS04ZDE4LTAwYmZiNzMwYTFiOCIsInVzZXJuYW1lIjoiYWFiYkBnbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTU5NjUwNzM1MzQsImlhdCI6MTY1NTk2NTA3MywiZXhwIjoxNjU2MDUxNDczfQ.qU6tm04pOVLVAfJFbrpDwf9AlLh_WYDc0wXwg7t6cgQ"}`,
      },
    });
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteManufacturerRest(
  id: string,
  router: any
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.delete(
      `${apiEndPoints?.manufacturerList}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMGQ5NGMzLWUwOGQtNDlkZS04ZDE4LTAwYmZiNzMwYTFiOCIsInVzZXJuYW1lIjoiYWFiYkBnbWFpbC5jb20iLCJsb2dJblRpbWUiOjE2NTU5NjUwNzM1MzQsImlhdCI6MTY1NTk2NTA3MywiZXhwIjoxNjU2MDUxNDczfQ.qU6tm04pOVLVAfJFbrpDwf9AlLh_WYDc0wXwg7t6cgQ"}`,
        },
      }
    );
    router.push("/Admin/Manufacturer/list");
    toast.success("Successfully deleted");
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}


export async function updateAdminRest(
  data: UpdatedUserRequest,
  //id: string
): Promise<UpdatedUserRequest | undefined> {
  try {
    const response = await axios.patch<UpdatedUserRequest>(
      `${apiEndPoints.user}`,
      data
    );
    toast.success("Edit Successful");
    return response.data as UpdatedUserRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getSingleManufacturerRest(
  data: any,
  manufacturerId: any
): Promise<any | undefined> {
  try {
    console.log("*", data);
    // const res = await axios.get(`${apiEndPoints.manufacturer}/${data.productId}`);
    const res = await axios.get(`manufacturers/${data}`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTk1ODY1NTkxNSwiaWF0IjoxNjU1OTU4NjU1LCJleHAiOjE2NTYwNDUwNTV9.pVu4Pm0EjUdg3sfEd4l2gvBazLO_BMzsTSq_vykVGuc"}`,
      },
    });
    console.log(res.data);

    return res?.data as Manufacturer;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateManufacturerRest(
  data: UpdateManufacturerRequest,
  id: string,
  router
): Promise<UpdateManufacturerRequest | undefined> {
  try {
    const response = await axios.patch<UpdateManufacturerRequest>(
      `manufacturers/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTk1ODY1NTkxNSwiaWF0IjoxNjU1OTU4NjU1LCJleHAiOjE2NTYwNDUwNTV9.pVu4Pm0EjUdg3sfEd4l2gvBazLO_BMzsTSq_vykVGuc"}`,
        },
      }
    );
    router.push("/Admin/Manufacturer/list");
    toast.success("Edit Successful");
    return response.data as UpdateManufacturerRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function changePasswordRest(
  data: ChangePasswordRequest,
  //id: string
): Promise<ChangePasswordRequest | undefined> {
  try {
    const response = await axios.patch<ChangePasswordRequest>(
      `${apiEndPoints.user}`,
      data
    );
    toast.success("Edit Successful");
    return response.data as ChangePasswordRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}
