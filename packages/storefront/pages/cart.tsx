import { userAPI } from "APIs";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CartComponent from "../components/cart/index";

const Cart: NextPage = () => {
    return (

        <>
            <div className="">
                <CartComponent />
            </div>
        </>
    );
};

// export async function getServerSideProps(context: any) {
//     const res = await userAPI.getCart();

//     return {
//         props: {
//             cartData: res,
//         },
//     };
// }

export default Cart;
