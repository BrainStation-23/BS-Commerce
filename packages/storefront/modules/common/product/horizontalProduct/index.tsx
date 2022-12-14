import ProductHoverActions from '@/modules/common/product/common/productHoverActions';
import ProductInfo from '@/modules/common/product/horizontalProduct/components/horizontalProductInfo';
import { CustomerProduct } from '@bs-commerce/models';
import myImageLoader from 'image/loader';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

const HorizontalProduct: FC<{ product: CustomerProduct }> = ({ product }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
      className="duration-0 justify-items-left group grid h-full w-56 cursor-pointer transition hover:bg-white hover:duration-700 dark:hover:bg-dark_bg"
    >
      <Link
        href={{
          pathname: `/product/${product.meta.friendlyPageName}`,
        }}
        passHref
      >
        <div className="group relative grid w-80 grid-cols-12 pb-2 md:pl-0 lg:pl-0">
          <div className="col-span-3 ">
            <div className="border-grey-500 rounded border-2 p-1">
              <Image
                className="h-20 w-20"
                loader={myImageLoader}
                src={product.photos![0].url!}
                alt={product.photos![0].alt!}
                height={120}
                width={120}
              />
            </div>
          </div>
          <div className="col-span-9">
            <ProductInfo product={product} />
          </div>
          <div
            className={`absolute bottom-2 left-24 w-36  origin-left transition-transform duration-300 sm:left-48 ${
              showIcons ? ' -translate-y-3 opacity-90' : 'md:opacity-0'
            } duration-300 md:left-24`}
          >
            <ProductHoverActions product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalProduct;
