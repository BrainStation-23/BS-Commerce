import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import {
  CreateProductPayload,
  Product,
  ProductListParams,
  ProductListResponse,
  UpdateProductPayload,
} from 'src/types/products';

export const getProductList = async (requestParams?: ProductListParams): Promise<ProductListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.products.list,
      params: requestParams,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getProductList:', error);
    throw error;
  }
};

export const getProductBySku = async (sku: string): Promise<Product> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.products.getBySku(sku),
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getProductBySku:', error);
    throw error;
  }
};

export const getProductDetails = async (productId: string): Promise<Product> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.products.details(productId),
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getProductDetails:', error);
    throw error;
  }
};

export const createProduct = async (productData: CreateProductPayload): Promise<Product> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.products.create,
      data: productData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in createProduct:', error);
    throw error;
  }
};

export const updateProduct = async (
  productId: string,
  productData: UpdateProductPayload
): Promise<Product> => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: endpoints.products.update(productId),
      data: productData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in updateProduct:', error);
    throw error;
  }
};

export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await axios({
      method: 'DELETE',
      url: endpoints.products.delete(productId),
    });
  } catch (error: any) {
    console.error('Error in deleteProduct:', error);
    throw error;
  }
};
