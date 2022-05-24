import Types from './product.types';

const initialState = {
    productData: [],
};
  
export default function reducer(state: object = initialState, {type, payload}: any ) {
    console.log("dhukse--------------------",  type, payload)
    switch (type) { 
        case Types.GET_PRODUCTS_FULFILLED: {
            const productData = payload.data;
            console.log("----------------xxxxxxxxxx--------------------------", productData)
            return {
                ...state,
                productData,
            };
        }
        default: {
            // const productData = action.payload.data;
            console.log("------------------yyyyyyyyyyyyyyyyyy------------------------")
            // return {
            //     ...state,
            //     productData,
            // };
        }

    }
    console.log("out---------------")
    return state;
} 