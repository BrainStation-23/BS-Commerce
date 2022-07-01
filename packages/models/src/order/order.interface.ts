export interface OrderAddressDto {
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

export interface ProductOrderDto {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  sku: string;
}

export interface RootObject {
  shippingCost: number;
  userId: string;
  billingAddress: OrderAddressDto;
  shippingAddress: OrderAddressDto;
  shippingMethod: string;
  paymentMethod: string;
  paymetnInfo: any;
  productCost: number;
  products: ProductOrderDto[];
  totalCost: number;
}
