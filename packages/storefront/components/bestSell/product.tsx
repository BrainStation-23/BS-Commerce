import Icon from "../global/components/icon";
import Picture from "../global/components/product/picture";
import ProductInfo from "../global/components/product/productInfo";

interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  images: [string];
  category: string;
}

const Product = (props: { product: productInterface }) => {
  const product = props.product;
  return (
    <div className="transition duration-0 hover:duration-700 group hover:bg-white cursor-pointer lg:pl-3">
      <div className="group flex relative pl-10 md:pl-0 lg:pl-0">
        <Picture
          product={product}
          height={120}
          width={120}
          src={product.images[0]}
          alt={product.category}
        />
        <div className="scale-0 group-hover:scale-100 transition-transform origin-left duration-300 absolute bottom-5 left-40 md:left-28 ">
          <Icon />
        </div>
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default Product;
