import { CreateProductOrderDetails } from './order.create.interface';

export interface IOrderProductPhoto {
  url?: string;
  id?: string;
  title?: string;
  alt?: string;
  displayOrder?: number;
}

export interface IOrderProduct extends CreateProductOrderDetails {
  photos?: IOrderProductPhoto[];
  totalPrice: number;
}
