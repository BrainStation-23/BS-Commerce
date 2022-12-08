import Link from 'next/link';
import Image from 'next/image';

import { FC, useState } from 'react';
import { CustomerProduct } from '@bs-commerce/models';
import ProductInfo from '@/modules/common/product/horizontalProduct/components/horizontalProductInfo';
import ProductHoverActions from '@/modules/common/product/common/productHoverActions';

const HorizontalProduct: FC<{ product: CustomerProduct }> = ({ product }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
      className="duration-0 justify-items-left group grid w-56 cursor-pointer transition hover:bg-white hover:duration-700 dark:hover:bg-dark_bg"
    >
      <Link
        href={{
          pathname: `/product/${product.meta.friendlyPageName}`,
        }}
        passHref
        legacyBehavior
      >
        <div className="group relative grid w-80 grid-cols-12 pb-2 md:pl-0 lg:pl-0">
          <div className="col-span-3 ">
            <div className="flex justify-center rounded bg-gray-200 p-1">
              <Image
                src={product.photos![0].url!}
                alt={product?.info?.name}
                height={100}
                width={100}
                className="h-16 w-20"
              />
            </div>
          </div>
          <div className="col-span-9">
            <ProductInfo product={product} />
          </div>
          <div
            className={`absolute bottom-2 left-48  w-36 origin-left transition-transform duration-300 ${
              showIcons ? ' -translate-y-3 opacity-90' : 'md:opacity-0'
            } hidden duration-300 md:left-24 md:block`}
          >
            <ProductHoverActions product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalProduct;
