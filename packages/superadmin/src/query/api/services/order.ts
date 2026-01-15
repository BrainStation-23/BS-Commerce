import axios from 'src/query/api/axios';
import { endpoints } from 'src/query/api/endpoints';
import { OrderListParams, OrderListResponse, ChangeOrderStatusPayload, Order } from 'src/types/orders';

export const getOrderList = async (params?: OrderListParams): Promise<OrderListResponse> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.orders.list,
      params,
    });

    return response.data;
  } catch (error: any) {
    console.error('Error in getOrderList:', error);
    throw error;
  }
};

export const getOrderDetails = async (orderId: string): Promise<Order> => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.orders.details(orderId),
    });
    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in getOrderDetails:', error);
    throw error;
  }
};

export const changeOrderStatus = async (payload: ChangeOrderStatusPayload): Promise<Order> => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: endpoints.orders.changeStatus,
      data: payload,
    });
    return response.data.data || response.data;
  } catch (error: any) {
    console.error('Error in changeOrderStatus:', error);
    throw error;
  }
};
