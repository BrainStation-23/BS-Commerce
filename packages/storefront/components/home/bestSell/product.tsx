import Icon from '@/components/global/components/icon';
import ProductInfo from '@/components/global/components/product/productInfo';
import { CustomerProduct } from '@bs-commerce/models';
import Image from 'next/image';
import Link from 'next/link';
interface SingleProduct {
  product: CustomerProduct;
}

const Product = ({ product }: SingleProduct) => {
  return (
    <Link
      href={{
        pathname: `/product/${product.meta.friendlyPageName}`,
        // query: {
        //   id: product.id,
        //   name: product.info.name,
        // },
      }}
      // as={`product/${product.info.name}`}
      passHref
    >
      <div className="duration-0 group grid cursor-pointer justify-items-center transition hover:bg-white hover:duration-700">
        <div className="group relative flex pl-10 md:pl-0 lg:pl-0">
          <Image
            src={product.photos![0].url!}
            alt={product.photos![0].alt}
            height={120}
            width={120}
          />
          <div className="absolute bottom-5 left-40 w-36 origin-left transition-transform duration-300 group-hover:scale-100 md:left-28 md:scale-0">
            <Icon product={product} />
          </div>
          <ProductInfo product={product} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
