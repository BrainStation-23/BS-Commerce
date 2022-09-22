import { NextRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  SignInRequest,
  SignInSuccessResponse,
  CreateManufacturerRequest,
  UpdateManufacturerRequest,
  GetUserSuccessResponse,
  UpdatedUserRequest,
  ChangePasswordRequest,
  getCategorySuccessResponse,
  getCategoryListSuccessResponse,
  getCategoryRequest,
  CreateProductRequest,
  UpdateProductRequest,
  GetProductParams,
  Manufacturer,
  Product,
  GetAllBrandsSuccessResponse,
  createCategoryRequest,
  createCategorySuccessResponse,
  UploadFileSuccessResponse,
  GetTagsResponse,
  GetManufacturersSuccessResponse,
  CreateBrandRequest,
  OrderResponseData,
  GetBrandByIdResponse,
  UpdateBrandResponse,
  UpdateBrandRequest,
  GetTagsSuccessResponse,
  CreateTagRequestBody,
  GetTagSuccessResponse,
  UpdateUserResponse,
  ChangePasswordResponse,
  GetProductResponse,
  GetAllBrandsResponse,
} from '@bs-commerce/models';

import { User } from '../utils/types';
import { apiEndPoints } from '../utils/apiEndPoints';

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
    router.push('/Product');
    toast.success('Create Successful');
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
): Promise<GetProductResponse | undefined> {
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
    router.push('/Product');
    toast.success('Edit Successful');
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
    toast.success('Delete Successful');
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
    toast.success('Create Successful');
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
    router.push('/');
    toast.success('Successfully signed in!');
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
  router: NextRouter
): Promise<UpdateUserResponse | undefined> {
  try {
    const response = await axios.patch<UpdateUserResponse>(
      `${apiEndPoints.user}`,
      data
    );
    router.push('/users/admin');
    toast.success('Edit Successful');
    return response.data as UpdateUserResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function changePasswordRest(
  data: ChangePasswordRequest,
  //id: string
  router: NextRouter
): Promise<ChangePasswordResponse | undefined> {
  try {
    const response = await axios.patch<ChangePasswordResponse>(
      `${apiEndPoints.user}`,
      data
    );
    router.push('/users/admin');
    toast.success('Edit Successful');
    return response.data as ChangePasswordResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getManufacturerRest(
  pageSize: number
): Promise<Manufacturer[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.manufacturerList}`);
    //toast.success(data.data.message);
    return data?.data as Manufacturer[];
  } catch (error: any) {
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
    router.push('/Manufacturer/');
    toast.success('Create Successful');
    return response.data as CreateManufacturerRequest;
  } catch (error: any) {
    // console.log(error);
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
    router.push('/Manufacturer/');
    toast.success('Successfully deleted');
    return data?.data as Manufacturer[];
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}
export async function getAllManufacturersRest(): Promise<
  GetManufacturersSuccessResponse | undefined
> {
  try {
    const response = await axios.get(`${apiEndPoints?.manufacturerList}`);
    return response.data as GetManufacturersSuccessResponse;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}
export async function getSingleManufacturerRest(
  data: any,
): Promise<any | undefined> {
  try {
    // const res = await axios.get(`${apiEndPoints.manufacturer}/${data.productId}`);
    const res = await axios.get(`manufacturers/${data}`);

    return res?.data as Manufacturer;
  } catch (error: any) {
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
    router.push('/Manufacturer/');
    toast.success('Edit Successful');
    return response.data as UpdateManufacturerRequest;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getOrderEnumRest(): Promise<any | undefined> {
  try {
    const response = await axios.get(`${apiEndPoints?.orderEnum}`);
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function getOrderListRest(): Promise<any | undefined> {
  try {
    const response = await axios.get(`${apiEndPoints?.orderList}`);
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function getOrderRest(id: string): Promise<any | undefined> {
  try {
    const response = await axios.get(`${apiEndPoints?.order}/${id}`);
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function updateOrderStatusRest(
  data: string
): Promise<any | undefined> {
  try {
    const response = await axios.patch(
      `${apiEndPoints?.updateOrderStatus}`,
      data
    );
    toast.success('Status updated successfully');
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function updatePaymentStatusRest(
  data: string
): Promise<any | undefined> {
  try {
    const response = await axios.patch(
      `${apiEndPoints?.updateOrderStatus}`,
      data
    );
    toast.success('Status updated successfully');
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function updateShippingStatusRest(
  data: string
): Promise<any | undefined> {
  try {
    const response = await axios.patch(
      `${apiEndPoints?.updateOrderStatus}`,
      data
    );
    toast.success('Status updated successfully');
    return response.data as any;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function getCategoryListRest(): Promise<
  getCategoryListSuccessResponse | undefined
> {
  try {
    const response = await axios.get(`${apiEndPoints.category}`);
    return response.data as getCategoryListSuccessResponse;
  } catch (error: any) {
    toast.error(error.response.message);
    // return error.response as getCategoryListErrorResponse;
  }
}

export async function getCategoryRest(
  id: getCategoryRequest
): Promise<getCategorySuccessResponse | undefined> {
  try {
    const { data } = await axios.get(
      `${apiEndPoints.category}/${id.categoryId}`
    );
    return data as getCategorySuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function createCategoryRest(
  data: createCategoryRequest,
  router: NextRouter
): Promise<createCategorySuccessResponse | undefined> {
  try {
    const response = await axios.post(`${apiEndPoints.category}`, data);
    router.push('/category');
    toast.success('Create Successful');
    return response.data as createCategorySuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getUserProfileRest(
  router: NextRouter
): Promise<GetUserSuccessResponse | undefined> {
  try {
    const { data } = await axios.get(`${apiEndPoints.user}`);
    return data as GetUserSuccessResponse;
  } catch (error: any) {
    router.push('/account/login');
    // toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getTagsRest(): Promise<GetTagsResponse | undefined> {
  try {
    const response = await axios.get(`${apiEndPoints.tags}`);

    return response?.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getBrandsRest(): Promise<
  GetAllBrandsResponse | undefined
> {
  try {
    const res = await axios?.get(`${apiEndPoints?.brands}?skip=0&limit=0`);
    return res?.data as GetAllBrandsSuccessResponse;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function createBrandRest(
  data: CreateBrandRequest,
  router: NextRouter
): Promise<any> {
  try {
    const response = await axios?.post(`${apiEndPoints?.brands}/create`, data);
    router.push('/Brands');
    toast.success('Create Successful');
    return response?.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateBrandRest(
  brandID: string,
  data: UpdateBrandRequest,
  router: NextRouter
): Promise<UpdateBrandResponse | undefined> {
  try {
    const response = await axios?.patch(
      `${apiEndPoints?.brands}/${brandID}`,
      data
    );
    router.push('/Brands');
    toast.success('Successfully updated');
    return response.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.error);
  }
}

export async function getBrandRest(brandId: any): Promise<any> {
  try {
    const { data } = await axios?.get(
      `${apiEndPoints?.brands}/${brandId.brandId}`
    );
    return data?.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}
export async function mediaUploadRest(
  data: FormData
): Promise<UploadFileSuccessResponse | undefined> {
  try {
    const response = await axios.post(`${apiEndPoints.media}/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data as UploadFileSuccessResponse;
  } catch (error: any) {
    toast.error(error?.response.error);
  }
}

export async function getAllOrderListRest(
  orderStatus: string,
  paymentStatus: string,
  shippingStaus: string,
  startDate: string,
  endDate: string
): Promise<OrderResponseData[] | undefined> {
  try {
    const splitedStartDate = startDate ? startDate.replace(/:/g, '%3A') : '';
    const splitedEndDate = endDate ? endDate.replace(/:/g, '%3A') : '';
    const sDate = startDate ? splitedStartDate : '';
    const eDate = endDate ? splitedEndDate : '';
    const { data } = await axios?.get(
      `${apiEndPoints?.ordersList}?orderStatus=${orderStatus}&paymentStatus=${paymentStatus}&shippingStatus=${shippingStaus}&startDate=${sDate}&endDate=${eDate}`
    );
    return data?.data as OrderResponseData[];
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.error);
  }
}

export async function getSingleOrderByIdRest(
  id: string
): Promise<OrderResponseData[] | undefined> {
  try {
    const { data } = await axios?.get(`${apiEndPoints?.singleOrder}/${id}`);
    // router.push('/Manufacturer/');
    //toast.success('Order Data Loaded Successfully');
    return data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function deleteBrandRest(
  brandId: string
): Promise<boolean | undefined> {
  try {
    await axios.delete(`${apiEndPoints.brands}/${brandId}`);
    toast.success('Delete Successful');
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getAllTagsRest(): Promise<
  GetTagsSuccessResponse | undefined
> {
  try {
    const { data } = await axios.get(`${apiEndPoints?.tag}`);
    //toast.success('All Tags Loaded Successfully');
    return data?.data;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export async function createTagsRest(
  data: CreateTagRequestBody,
  router: NextRouter
): Promise<CreateTagRequestBody | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints?.tag}`, data);
    router.push('/tags');
    toast.success('Tag Created Successfully');
    return res.data as CreateTagRequestBody;
  } catch (error: any) {
    toast.error(error);
  }
}

export async function getSingleTagRest(
  id: string
): Promise<GetTagSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints?.tag}/${id}`);
    return res.data as GetTagSuccessResponse;
  } catch (error: any) {
    toast.error(error);
  }
}
