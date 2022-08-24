import { BaseOrderModel } from "./order.response.interface";

export interface CreateProductOrderDetails{
  productId: string;
  name: string;
  price: number;
  quantity: number;
  sku: string;
}
export interface CreateOrderRequest extends BaseOrderModel{
  products: CreateProductOrderDetails[];
}