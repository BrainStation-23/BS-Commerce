import { ProductPhoto } from 'src/index';
import { IOrderAddress, IProductOrderData  } from './order.create.interface';

export interface ProductDataWithPhoto extends IProductOrderData{
    photos: ProductPhoto[];
}

export interface UserOrderList{
    userId?: string;
    orderId: string;
    billingAddress: IOrderAddress;
    shippingAddress: IOrderAddress;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    products?: ProductDataWithPhoto[];
    shippingCost: number;
    totalCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string; 
    orderedDate: Date;
} 