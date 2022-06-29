import Icon from "@/components/global/components/icon";
import Picture from "@/components/global/components/product/picture";
import ProductInfo from "@/components/global/components/product/productInfo";
import { Product } from "models";
import Image from "next/image";
import Link from "next/link";
interface SingleProduct {
  product: Product;
}

const Product = ({ product }: SingleProduct) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="transition duration-0 hover:duration-700 group hover:bg-white cursor-pointer grid justify-items-center">
        <div className="group flex relative pl-10 md:pl-0 lg:pl-0 m-auto">
          <Image
            product={product}
            src={product?.photos[0].url}
            height={120}
            width={120}
            alt={product.tags[0]}
          />
          <div className="scale-0 group-hover:scale-100 transition-transform origin-left duration-300 absolute bottom-5 left-40 md:left-28 w-36">
            <Icon />
          </div>
          <ProductInfo product={product} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
