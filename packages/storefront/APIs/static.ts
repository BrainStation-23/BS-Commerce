import axios from 'axios';
import {
  getCategoryListSuccessResponse,
  GetCustomerAllProductsSuccessResponse,
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
