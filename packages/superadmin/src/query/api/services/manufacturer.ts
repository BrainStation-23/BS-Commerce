import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import {
  CreateManufacturerPayload,
  Manufacturer,
  ManufacturerListParams,
  ManufacturerListResponse,
  UpdateManufacturerPayload,
} from 'src/types/manufacturers';

export const getManufacturerList = async (params?: ManufacturerListParams): Promise<ManufacturerListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.manufacturers.list,
      params,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getManufacturerList:', error);
    throw error;
  }
};

export const getManufacturerDetails = async (manufacturerId: string): Promise<Manufacturer> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.manufacturers.details(manufacturerId),
    });

    return response.data.data?.manufacturer || response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getManufacturerDetails:', error);
    throw error;
  }
};

export const createManufacturer = async (manufacturerData: CreateManufacturerPayload): Promise<Manufacturer> => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.manufacturers.create,
      data: manufacturerData,
    });

    return response.data.data?.manufacturer || response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in createManufacturer:', error);
    throw error;
  }
};

export const updateManufacturer = async (
  manufacturerId: string,
  manufacturerData: UpdateManufacturerPayload
): Promise<Manufacturer> => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: endpoints.manufacturers.update(manufacturerId),
      data: manufacturerData,
    });

    return response.data.data?.manufacturer || response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in updateManufacturer:', error);
    throw error;
  }
};
