import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import { Category, CategoryListResponse, CreateCategoryPayload } from 'src/types/categories';

export const getCategoryList = async (): Promise<CategoryListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.categories.list,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getCategoryList:', error);
    throw error;
  }
};

export const getCategoryDetails = async (categoryId: string): Promise<Category> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.categories.details(categoryId),
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getCategoryDetails:', error);
    throw error;
  }
};

export const createCategory = async (categoryData: CreateCategoryPayload): Promise<Category> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.categories.create,
      data: categoryData,
    });

    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in createCategory:', error);
    throw error;
  }
};
