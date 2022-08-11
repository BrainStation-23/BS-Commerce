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

// export interface CreateProductOrderDetails{
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   sku: string;
// }
export interface CreateProductOrderDetails{
  productId: string;
  quantity: number;
}
export interface IProductOrderData extends CreateProductOrderDetails{
  photos?: IOrderProductPhoto[],
  totalPrice: number;
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
export interface OrderByUserIdResponseData extends CreateOrderRequest{
  orderStatus: string;
  shippingStatus: string;
  paymentStatus: string; 
  orderId: string;
  orderedDate: Date;
}
export interface OrderResponseData extends CreateOrderRequest{
  userId: string,
  orderId: string;
  orderStatus: string;
  shippingStatus: string;
  paymentStatus: string;
  orderedDate: Date;
}