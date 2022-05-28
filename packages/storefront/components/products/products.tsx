import type { GetServerSideProps, NextPage } from "next";
import productData from "../../allData/product-data.json";
import Product from "./product"

const Products: NextPage = (props) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
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
