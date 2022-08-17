import { OrderProductData } from './order.product.interface';

export interface IOrderAddress {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country?: string;
  postCode?: string;
  phoneNumber: string;
}

export interface CreateProductOrderDetails{
  productId: string;
  quantity: number;
}
export interface CreateOrderRequest {
  billingAddress: IOrderAddress;
  shippingAddress: IOrderAddress;
  shippingMethod: string;
  paymentMethod: string;
  productCost: number;
  products: CreateProductOrderDetails[];
  shippingCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
}