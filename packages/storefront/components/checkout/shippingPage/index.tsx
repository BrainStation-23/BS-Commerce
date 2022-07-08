import React from "react";
import Path from "@/components/global/components/path";
import OrderList from "@/components/checkout/orderList";
import Shipping from "@/components/checkout/shippingPage/shipping";

const path = {
    cart: false,
    info: false,
    shipping: true,
    payment: false,
};

interface Props {
    setModal: Function
}

const ShippingPage: React.FC<Props> = (props: Props) => {
    const {setModal} = props;

    return (
        <div>
            <div className="row">
                <div className="lg:mt-10 xl:mt-10 lg:mx-28 xl:mx-28 hidden sm:hidden md:hidden lg:block xl:block">
                    <Path
                        cart={path.cart}
                        info={path.info}
                        shipping={path.shipping}
                        payment={path.payment}
                        setModal={setModal}
                    />
                </div>
                <div className="divide-x-0 sm:divide-x-0 md:divide-x-0 lg:divide-x-2 xl:divide-x-2 flex flex-wrap flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row justify-between">
                    <Shipping setModal={setModal} />
                    <div className="mx-5 sm:mx-5 md:mx-28 block sm:block md:block lg:hidden xl:hidden">
                        <Path
                            cart={path.cart}
                            info={path.info}
                            shipping={path.shipping}
                            payment={path.payment}
                            setModal={setModal}
                        />
                    </div>
                    <OrderList />
                </div>
            </div>
        </div>
    );
};

export default ShippingPage;