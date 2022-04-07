import { fetch_product, fetch_product_error} from "./ProductTypes"
import { ProductAction } from "../../types"

export default function ProductsReducer(state = initialState , action:ProductAction) {
  const { type, payload } = action;

  switch (type) {
 case fetch_product:
      return {
        ...state,
        products:payload,
        loading:false
    };
    case fetch_product_error:
      return {
        ...state,
        products:[],
        error:payload,
        loading:false
    };
    default:
      return state;
  }
}
