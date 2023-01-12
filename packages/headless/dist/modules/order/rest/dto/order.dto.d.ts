import { OrderResponseData } from '@bs-commerce/models';
import { OrderAddressDto } from './order.create.dto';
import { OrderProductDto } from './OrderProduct.dto';
export declare class OrderDto implements OrderResponseData {
    orderId: string;
    userId: string;
    billingAddress: OrderAddressDto;
    shippingAddress: OrderAddressDto;
    shippingMethod: string;
    paymentMethod: string;
    orderedDate: Date;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string;
    products: OrderProductDto[];
    productCost: number;
    shippingCost: number;
    totalCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
}
