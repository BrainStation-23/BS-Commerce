import Icon from "../global/components/product/common/icon";
import ProductInfo from "../global/components/product/common/productInfo";
import Picture from "../global/components/product/common/picture";
import Counter from "../global/components/product/common/counter";

const time = {
    day: "00",
    hour: "00",
    min: "00",
    sec: "00",
};

const DealProduct = (props: any) => {
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
                                    ></Picture>{" "}
                                </div>
                            </div>
                            <div className="hover:-translate-y-20 opacity-70 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
                                <Counter time={time}></Counter>
                                <div className="hover:translate-y-20 opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
                                    <Icon></Icon>
                                </div>
                            </div>
                            <ProductInfo product={product}></ProductInfo>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DealProduct;
