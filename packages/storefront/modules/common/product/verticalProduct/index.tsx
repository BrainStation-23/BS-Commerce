import Link from 'next/link';

import { CustomerProduct } from '@bs-commerce/models';

import Picture from '@/modules/common/product/common/picture';
import ProductHoverActions from '@/modules/common/product/common/productHoverActions';
import ProductInfo from '@/modules/common/product/verticalProduct/components/verticalProductInfo';
import { FC } from 'react';

const VerticalProduct: FC<{ product: CustomerProduct }> = ({ product }) => {
  return (
    <>
      <Link
        href={{
          pathname: `/product/${product.meta.friendlyPageName}`,
        }}
        passHref
      >
        <div className="mb-0 h-96 overflow-hidden" key={product?.info?.name}>
          <div className="duration-0 group cursor-pointer transition hover:bg-white hover:duration-700 dark:hover:bg-dark_bg">
            <div className="max-w-sm overflow-hidden rounded">
              <div className="relative ">
                <div className="z-0 mx-1 rounded bg-gray-200 bg-cover bg-center p-1 pb-0">
                  <Picture
                    height={212}
                    width={212}
                    src={product?.photos![0]?.url!}
                    alt={product?.info?.name}
                  />

                  {Math.abs(product?.info.oldPrice - product?.info.price) >
                  0 ? (
                    <div className="absolute top-3 left-3 rounded-lg border border-primary bg-primary px-1 py-1 text-xs text-white dark:bg-dark_primary">
                      <p>Sale</p>
                    </div>
                  ) : null}

                  {/* {product?.discountPercentage && product?.stock > 0 ? (
                    <div className="absolute top-3 right-3 rounded-lg border border-primary bg-primary px-1 py-1 text-xs text-white">
                      <p>{`-${product?.discountPercentage}%`}</p>
                    </div>
                  ) : null} */}
                  {Math.abs(product?.info.oldPrice - product?.info.price) >
                  0 ? (
                    <div className="absolute top-3 right-3 rounded-lg border border-primary bg-primary px-1 py-1 text-xs text-white dark:bg-dark_primary">
                      <p>{`-$${Math.abs(
                        product?.info?.oldPrice - product?.info?.price
                      )}`}</p>
                    </div>
                  ) : null}
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black opacity-0 duration-300 hover:-translate-y-3 hover:opacity-70">
                  <ProductHoverActions product={product} />
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

export default VerticalProduct;
