import { userAPI } from "APIs";
import type { NextPage } from "next";

import CartComponent from "../components/cart/index";
const newData = {
    productId: "1035465768",
    quantity: 2,
};
userAPI.addToCart(newData);
const Cart: NextPage = ({ cartData }: any) => {
    // console.log("From Cart", cartData);
    return (

        <>
            <div className="">
                <CartComponent />
            </div>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const res = await userAPI.getCart();

    return {
        props: {
            cartData: res,
        },
    };
}

export default Cart;
