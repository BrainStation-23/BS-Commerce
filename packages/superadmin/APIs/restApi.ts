import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "../../models/src/product";
import {
  CreateManufacturerRequest,
  UpdateManufacturerRequest,
  UpdateManufacturerRequest,
} from "../../models/src/manufacturer";
import { User } from "../utils/types";
import { Manufacturer, Product } from "models";
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

//  Create Manufacturer Rest API Post
export async function createManufacturerRest(
  data: CreateManufacturerRequest,
  router
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
    router.push("/Product");
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

export async function getManufacturerRest(
  pageSize: number
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.manufacturerList}`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlYWZhNWE1LTRkMmQtNDg4MS05MjdjLTc5NWUzMzE3YjVjYiIsInVzZXJuYW1lIjoic3RyaW5nQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTkzMDU0OTQ0MiwiaWF0IjoxNjU1OTMwNTQ5LCJleHAiOjE2NTYwMTY5NDl9.yrFbvBFXwUj5w47CsRoaDGVsAgqXMIUJqpYtBh63nsE"}`,
      },
    });
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteManufacturerRest(
  id: string
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.delete(
      `${apiEndPoints?.manufacturerList}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4ZDdjZWVhLTMwYjAtNGZhYi1hNzhkLTZkN2ZlMjYyYTBmOCIsInVzZXJuYW1lIjoiYWJjeHl6QGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTg5MDg4MzgxOCwiaWF0IjoxNjU1ODkwODgzLCJleHAiOjE2NTU5NzcyODN9.pKEg5uhpYN3GVXwbEZBzFRl1nCpytvqy2AunLigfBZo"}`,
        },
      }
    );
    return data?.data as Manufacturer[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
