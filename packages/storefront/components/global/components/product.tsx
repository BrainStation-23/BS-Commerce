import type { GetServerSideProps, NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import Icon from "./product/icon";
import ProductInfo from "./product/productInfo";
import Picture from "./product/picture";

const Product = (props: any) => {
    const { product }: any = props;

    return (
        <>
            <div className="col mb-5" key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                    <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative">
                            <div className="relative text-white overflow-hidden transition-all duration-700">
                                <div className="relative inset-0 bg-cover bg-center z-0">
                                    <Picture product={product}></Picture>
                                </div>
                            </div>
                            <div className="hover:-translate-y-3 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-black font-semibold">
                                <Icon></Icon>
                            </div>
                            <ProductInfo product={product}></ProductInfo>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
