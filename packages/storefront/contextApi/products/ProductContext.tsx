import React, {
  createContext,
  useReducer,
} from "react";
import ProductsReducer from "./ProductReducer";
import { Action, ProductsinitialState, Product } from "../../types";

export const initialState:ProductsinitialState = {
  products: [],
  loading: true,
  error: {},
};

interface GlobalProductsProps {
  children: React.ReactNode;
}

type contextProps = {
  state:ProductsinitialState, 
  // dispatch:React.Dispatch<Action>,
  storeProductInfo: (products:Product[]) => void,
}

export const ProductsApi = createContext<contextProps>({} as contextProps);

export const GlobalProducts = ({ children }: GlobalProductsProps) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

 function storeProductInfo(products:Product[]) {
    try {
      dispatch({
        type: "FETCH_PRODUCT",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCT_ERROR",
        payload: {},
      });
    }
  }

  return (
    <ProductsApi.Provider
      value={{
        storeProductInfo,
        // dispatch,
         state,
      }}
    >
      {children}
    </ProductsApi.Provider>
  );
};
