import { OrderResponseData } from './order.response.interface';

export type OrderByUserId = Omit<OrderResponseData, 'userId'>;

export interface OrderByUserIdResponse {
  userId: string;
  orderInfo: OrderByUserId[];
}
