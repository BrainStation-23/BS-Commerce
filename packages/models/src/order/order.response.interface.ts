import { IOrderProduct } from './order.product.response.interface';
import { CreateOrderRequest } from "./order.create.interface";

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
  
export interface BaseOrderModel{
    billingAddress: IOrderAddress;
    shippingAddress: IOrderAddress;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    shippingCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
}

export interface OrderResponseData extends BaseOrderModel{
    userId: string,
    orderId: string;
    orderedDate: Date;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string; 
    totalCost: number;
    products: IOrderProduct[];
} 