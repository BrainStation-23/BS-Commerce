import React, {
  createContext,
  useReducer,
} from "react";
import ProductsReducer from "./ProductReducer";
import { Action, ProductsinitialState } from "../../types";

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
  dispatch:React.Dispatch<Action>
}

export const ProductsApi = createContext<contextProps>({} as contextProps);

export const GlobalProducts = ({ children }: GlobalProductsProps) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  return (
    <ProductsApi.Provider
      value={{
        dispatch,
         state,
      }}
    >
      {children}
    </ProductsApi.Provider>
  );
};
