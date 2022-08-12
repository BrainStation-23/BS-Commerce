import { IOrderAddress, CreateOrderRequest } from "./order.create.interface";
import { OrderProductData } from "./order.product.interface";

// export interface OrderResponseData{
//     userId: string,
//     orderId: string;
//     orderedDate: Date;
//     orderStatus: string;
//     shippingStatus: string;
//     paymentStatus: string; 
//     totalCost: number;

//     billingAddress: IOrderAddress;
//     shippingAddress: IOrderAddress;
//     shippingMethod: string;
//     paymentMethod: string;
//     productCost: number;
//     products: OrderProductData[];
//     shippingCost: number;
//     stripeToken?: string;
//     stripeCustomerId?: string;
//     stripeChargeId?: string;
//     paypalPaymentId?: string;
//     paypalRedirectUrl?: string;
// }
type OrderResponse = Omit<CreateOrderRequest, "products">;
export type OrderResponseData = OrderResponse & {
    userId: string,
    orderId: string;
    orderedDate: Date;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string; 
    totalCost: number;
    products: OrderProductData[];
}    