import Icon from "@/components/global/components/icon";
import Picture from "@/components/global/components/product/picture";
import ProductInfo from "@/components/global/components/product/productInfo";

const Product = ({product}: any) => {
  return (
    <div className="transition duration-0 hover:duration-700 group hover:bg-white cursor-pointer lg:pl-0">
      <div className="group flex relative pl-10 md:pl-0 lg:pl-0">
        <Picture
          product={product}
          height={120}
          width={120}
          src={product.photos[0].url}
          alt={product.tags[0]}
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
