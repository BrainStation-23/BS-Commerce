import axios from "axios";
import Types from "./product.types";

export const getProducts = () => {
    const url = `http://localhost:3000/products`

    return {
        type: Types.GET_PRODUCTS,
        payload: axios({
            method: "get",
            url
        }),
    };
}