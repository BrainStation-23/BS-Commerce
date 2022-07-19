import Image from 'next/image';
import Link from 'next/link';

import { Product } from 'models';

import Icon from '@/components/global/components/icon';
import ProductInfo from '@/components/global/components/product/productInfo';
interface SingleProduct {
  product: Product;
}

const Product = ({ product }: SingleProduct) => {
  return (
    <Link
      href={{
        pathname: `product/${product.info.name}`,
        query: {
          id: product.id,
          name: product.info.name,
        },
      }}
      as={`product/${product.info.name}`}
    >
      <div className="duration-0 group grid cursor-pointer justify-items-center transition hover:bg-white hover:duration-700">
        <div className="group relative m-auto flex pl-10 md:pl-0 lg:pl-0">
          <Image
            product={product}
            src={product?.photos[0].url}
            height={120}
            width={120}
            alt={product?.tags[0]}
          />
          <div className="absolute bottom-5 left-40 w-36 origin-left scale-0 transition-transform duration-300 group-hover:scale-100 md:left-28">
            <Icon product={product} />
          </div>
          <ProductInfo product={product} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
