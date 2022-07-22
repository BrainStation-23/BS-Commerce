export interface IOrderProductPhoto {
    url?: string,
    id?: string,
    title?: string,
    alt?: string,
    displayOrder?: number

}
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

export interface IProductOrderData {
  productId: string;
  name: string;
  price: number;
  photos?: IOrderProductPhoto[],
  quantity: number;
  sku: string;
}

export interface IOrderCreateData {
  userId?: string;
  orderId?: string;
  billingAddress: IOrderAddress;
  shippingAddress: IOrderAddress;
  shippingMethod: string;
  paymentMethod: string;
  productCost: number;
  products: IProductOrderData[];
  shippingCost: number;
  totalCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
}

export interface IOrderResponseData extends IOrderCreateData{
  orderStatus: string;
  shippingStatus: string;
  paymentStatus: string; 
  orderId: string;
  userId: string;
  orderedDate: Date;
}