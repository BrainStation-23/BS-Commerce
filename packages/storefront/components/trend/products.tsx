import type { GetServerSideProps, NextPage } from "next";
import productData from "../../allData/product-data.json";
import Product from "../global/components/product/product";

const Products: NextPage = (props) => {
    return (
        <>
            <div className="text-center">
                <p className="text-lg font-serif italic">Recently added our store</p>
                <h1 className="text-4xl text-bold ">Trending Products</h1>
                <br />
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-0 justify-items-center">
                {productData["products"] &&
                    productData["products"].length > 0 &&
                    productData.products.map((product: any) => (
                        <Product key = {product.id} product={product}></Product>
                    ))}
            </div>
        </>
    );
};

export default Products;
