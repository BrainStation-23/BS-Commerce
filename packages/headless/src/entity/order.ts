import { Photo } from "./product";

export enum OrderStatusEnum {
  Pending = 'Pending',
  Processing = 'Processing',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export enum ShippingStatusEnum {
  NotYetShipped = 'NotYetShipped',
  PartiallyShipped = 'PartiallyShipped',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
}

export enum PaymentStatusEnum {
  Pending = 'Pending',
  Paid = 'Paid',
  Cancelled = 'Cancelled',
}

export class OrderAddress {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  postCode?: string;
  phoneNumber: string;
}

export class ProductOrder {
  productId: string;
  name: string;
  photos?: Photo[];
  price: number;
  quantity: number;
  quantityShipped: number;
  sku: string;
}

export class OrderEntity {
  orderId: string;
  userId: string;
  billingAddress: OrderAddress;
  shippingAddress: OrderAddress;
  shippingMethod: string;
  paymentMethod: string;
  orderedDate: Date;
  orderStatus: OrderStatusEnum;
  shippingStatus: ShippingStatusEnum;
  paymentStatus: PaymentStatusEnum;
  products: [ProductOrder];
  productCost: number;
  shippingCost: number;
  totalCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
}
