import { ProductsinitialState, Action } from "../../types";

export default function ProductsReducer(state: ProductsinitialState, action: Action) {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCT_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
