import type { GetServerSideProps, NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import Icon from "./common/icon";
import ProductInfo from "./common/productInfo";
import Picture from "./common/picture";

const Product = (props: any) => {
    const { product }: any = props;

    return (
        <>
            <div className="col mb-0" key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                    <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative">
                            <div className="relative text-white overflow-hidden transition-all duration-700">
                                <div className="relative inset-0 bg-cover bg-center z-0">
                                    <Picture
                                        product={product}
                                        height={280}
                                        width={280}
                                        src={product.images[0]}
                                        alt={product.category}
                                    ></Picture>
                                </div>
                            </div>
                            <div className="hover:-translate-y-3 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
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
