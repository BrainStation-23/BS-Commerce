export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductsinitialState {
  products: Product[];
  loading: boolean;
  error: {};
}

export type Action = 
| {
  type: "FETCH_PRODUCT";
  payload: Product[];
} 
| {
  type: "FETCH_PRODUCT_ERROR";
  payload: {};
}
