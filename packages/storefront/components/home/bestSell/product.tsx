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
    <div className="duration-0 justify-items-left group grid cursor-pointer transition hover:bg-white hover:duration-700">
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
        <div className="group relative grid w-fit grid-cols-5 md:pl-0 lg:pl-0">
          <div className="col-span-2">
            <Image
              src={product.photos![0].url!}
              alt={product.photos![0].alt}
              height={120}
              width={120}
              //layout="fixed"
            />
          </div>
          <div className="col-span-3">
            <ProductInfo product={product} />
          </div>

          <div className="absolute bottom-5 left-32 w-36 origin-left scale-0 transition-transform duration-300 group-hover:scale-100 md:left-28">
            <Icon product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
