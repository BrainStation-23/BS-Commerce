export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductsinitialState {
  products: Product[];
  loading: boolean;
  error: boolean;
}

export interface ProductAction {
  type: string;
  payload: Product[] | boolean;
}
