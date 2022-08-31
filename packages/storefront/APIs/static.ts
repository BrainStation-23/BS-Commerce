import axios from 'axios';
import {
  getCategoryListSuccessResponse,
  GetCustomerAllProductsSuccessResponse,
  GetCustomerProductByURLResponse,
  GetCustomerProductByURLSuccessResponse,
  GetCustomerProductResponse,
  GetCustomerProductSuccessResponse,
} from 'models';
import { apiEndPoints } from 'utils/apiEndPoints';

export async function getPublicProductsStatic(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
    console.log(`${apiEndPoints.getPublicProducts}`);
    
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getFeaturedProductsStatic(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function getCategoryListStatic(): Promise<
  getCategoryListSuccessResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getCatagoryList}`);
    return res.data as getCategoryListSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByUniqueNameStatic(
  productUniqueName: string
): Promise<GetCustomerProductByURLResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProductByUniqueName}/${productUniqueName}`
    );
    return res.data.data as GetCustomerProductByURLSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByCategoryIDStatic(
  categoryId: string,
  orderBy: string,
  minPrice: number,
  maxPrice: number,
  brands: string
): Promise<GetCustomerAllProductsSuccessResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}?categoryId=${categoryId}${
        orderBy ? `&orderBy=${orderBy}` : ''
      }${brands ? `&brand=${brands}` : ''}${
        minPrice ? `&minPrice=${minPrice}` : ''
      }${maxPrice ? `&maxPrice=${maxPrice}` : ''}`
    );
    return res.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
