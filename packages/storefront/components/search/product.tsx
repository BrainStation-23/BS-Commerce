import Link from 'next/link';
import Image from 'next/image';
import { CustomerProduct } from 'models';
import Icon from '@/components/search/icon';
import ProductInfo from '@/components/global/components/product/productInfo';
interface SingleProduct {
  product: CustomerProduct;
  imgHeight?: number;
  imgWeight?: number;
}

const Product = ({ product, imgHeight, imgWeight }: SingleProduct) => {
  return (
    <div
      className="duration-0 my-3 mx-auto w-fit justify-items-center transition hover:bg-white hover:duration-700"
      id="searchProductTestID"
    >
      <Link
        href={{
          pathname: `product/${product.info.name}`,
          query: {
            id: product.id,
            name: product.info.name,
          },
        }}
        passHref
      >
        <div className="group relative grid cursor-pointer grid-cols-2 ">
          <Image
            src={product.photos![0].url!}
            alt={product.photos![0].alt}
            height={imgHeight ? imgHeight : 120}
            width={imgWeight ? imgWeight : 120}
            className="col-span-2"
          />
          <div className="absolute bottom-12 right-0 w-36 origin-left transition-transform duration-300 group-hover:block md:hidden">
            <Icon product={product} />
          </div>
          <div className="col-span-1">
            <ProductInfo product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
