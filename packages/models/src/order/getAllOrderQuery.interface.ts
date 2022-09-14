export interface GetAllOrderQuery {
  shippingStatus?: string;
  orderStatus?: string;
  paymentStatus?: string;
  skip?: number;
  limit?: number;
  startDate?: Date;
  endDate?: Date;
}
