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

export class AddressInOrder {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode?: string;
  phoneNumber: string;
}

export class ProductInOrder {
  productId: string;
  name: string;
  price: string;
  quantity: number;
  quantityShipped: number;
  sku: string;
}

export class OrderEntity {
  user: string;
  billingAddress: AddressInOrder;
  shippingAddress: AddressInOrder;
  shippingMethod: string;
  paymentMethod: string;
  orderedDate: Date;
  orderStatus: OrderStatusEnum;
  shippingStatus: ShippingStatusEnum;
  paymentStatus: PaymentStatusEnum;
  products: [ProductInOrder];
  productCost: number;
  shippingCost: number;
  totalCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
}
