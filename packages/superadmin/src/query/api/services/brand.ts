import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import { Brand, BrandListParams, BrandListResponse, CreateBrandPayload, UpdateBrandPayload } from 'src/types/brands';

export const getBrandList = async (params?: BrandListParams): Promise<BrandListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.brands.list,
      params,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getBrandList:', error);
    throw error;
  }
};

export const getBrandDetails = async (brandId: string): Promise<Brand> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.brands.details(brandId),
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getBrandDetails:', error);
    throw error;
  }
};

export const createBrand = async (brandData: CreateBrandPayload): Promise<Brand> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.brands.create,
      data: brandData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in createBrand:', error);
    throw error;
  }
};

export const updateBrand = async (brandId: string, brandData: UpdateBrandPayload): Promise<Brand> => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: endpoints.brands.update(brandId),
      data: brandData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in updateBrand:', error);
    throw error;
  }
};
