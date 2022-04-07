import React, {
  createContext,
  useReducer,
  ReactChildren,
  ReactChild,
} from "react";
import ProductsReducer from "./ProductReducer";
import { fetch_product, fetch_product_error } from "./ProductTypes";
import { Product, ProductsinitialState } from "../../types";

export const initialState: ProductsinitialState = {
  products: [],
  loading: true,
  error: false,
};

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export type ContextType = {
  products: Product[];
  fetchProductInfo: (products: Product[]) => void;
  loading: boolean;
  error: boolean;
};

export const ProductsApi = createContext<ContextType | ProductsinitialState>(initialState);

export const GlobalProducts = ({ children }: AuxProps) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const fetchProductInfo = (products: Product[]) => {
    try {
      dispatch({
        type: fetch_product,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: fetch_product_error,
        payload: true,
      });
    }
  }

  return (
    <ProductsApi.Provider
      value={{
        fetchProductInfo,
        products: state.products,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </ProductsApi.Provider>
  );
};
