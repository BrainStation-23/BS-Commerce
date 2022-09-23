import Link from 'next/link';

import { CustomerProduct } from '@bs-commerce/models';

import ProductInfo from '@/components/global/components/product/common/productInfo';
import Picture from '@/components/global/components/product/common/picture';
import Icon from '@/components/global/components/icon';

interface SingleProduct {
  product: CustomerProduct;
}

const Product = (props: SingleProduct) => {
  const { product } = props;
  return (
    <>
      <Link href={`product/${product?.id}`} passHref>
        <div className="mb-0 overflow-hidden" key={product?.id}>
          <div className="duration-0 group cursor-pointer transition hover:bg-white hover:duration-700">
            <div className="max-w-sm overflow-hidden rounded">
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative overflow-hidden text-white transition-all duration-700">
                  <div className="relative inset-0 z-0 bg-cover bg-center">
                    <Picture
                      height={212}
                      width={212}
                      src={product?.photos![0]?.url!}
                      alt={product?.info?.name}
                    />

                    {product?.info?.oldPrice !== 0 ? (
                      <div className="absolute top-3 left-3 rounded-lg border border-primary bg-primary px-1 py-1 text-xs text-white">
                        <p>Sale</p>
                      </div>
                    ) : null}

                    {product?.info?.oldPrice !== 0 ? (
                      <div className="absolute top-3 right-3 rounded-lg border border-primary bg-primary px-1 py-1 text-xs text-white">
                        <p>{`-$${Math.abs(
                          product?.info?.oldPrice - product?.info?.price
                        )}`}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black opacity-0 duration-300 hover:-translate-y-3 hover:opacity-70">
                  <Icon product={product} />
                </div>
                <ProductInfo product={product} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
