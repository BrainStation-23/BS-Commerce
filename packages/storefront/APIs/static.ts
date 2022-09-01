import axios from 'axios';
import {
  addToCartRequest,
  addToCartSuccessResponse,
  deleteCartItemSuccessResponse,
  getCartSuccessResponse,
  CustomerSignInRequest,
  CustomerSignInResponse,
  getCategoryListSuccessResponse,
  GetCustomerAllProductsSuccessResponse,
  GetCustomerProductByURLResponse,
  GetCustomerProductByURLSuccessResponse,
  GetCustomerProductResponse,
  GetCustomerProductSuccessResponse,
  deleteAllCartItemsSuccessResponse,
} from 'models';
import { toast } from 'react-toastify';
import { apiEndPoints } from 'utils/apiEndPoints';

export async function getPublicProductsStatic(): Promise<
  GetCustomerAllProductsSuccessResponse | undefined
> {
  try {
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

export async function addToCartStatic(
  data: addToCartRequest
): Promise<addToCartSuccessResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToCart}`, data);

    return res.data as addToCartSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function getCartStatic(
  token: string
): Promise<getCartSuccessResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCart}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data as getCartSuccessResponse;
  } catch (error: any) {
    const data = {
      userId: '',
      id: '',
      items: [],
    };
    const errorData = {
      data,
    };
    return errorData as any;
  }
}
export async function signInStatic(
  data: CustomerSignInRequest
): Promise<CustomerSignInResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.login}`, data);
    return res.data;
  } catch (error: any) {
    toast.error('Some error happend. Try again.', {
      containerId: 'bottom-right',
    });
    return error;
  }
}
export async function deleteSingleCartItemStatic(
  productId: string
): Promise<deleteCartItemSuccessResponse | undefined> {
  try {
    const res = await axios.delete(
      `${apiEndPoints.deleteSingleCartItem}?productId=${productId}`
    );
    return res.data as deleteCartItemSuccessResponse;
  } catch (error: any) {
    return error;
  }
}
export async function deleteAllCartItemStatic(): Promise<
  deleteAllCartItemsSuccessResponse | undefined
> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteAllCartItem}`);
    return res.data as deleteAllCartItemsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}