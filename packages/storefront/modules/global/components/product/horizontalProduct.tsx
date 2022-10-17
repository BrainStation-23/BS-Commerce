import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import { CustomerProduct } from '@bs-commerce/models';
import Icon from '@/modules/global/components/icon';
import ProductInfo from '@/modules/global/components/product/productInfo';

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
      >
        <div className="group relative grid w-80 grid-cols-12 md:pl-0 lg:pl-0">
          <div className="col-span-3 ">
            <div className="border-grey-500 rounded border-2 p-1">
              <Image
                src={product.photos![0].url!}
                alt={product.photos![0].alt}
                height={120}
                width={120}
                className="bg-red rounded border-8 border-sky-500 p-1"
              />
            </div>
          </div>
          <div className="col-span-9">
            <ProductInfo product={product} />
          </div>
          <div
            className={`absolute bottom-5 left-48  w-36 origin-left transition-transform duration-300 ${
              showIcons ? ' -translate-y-3 opacity-90' : 'md:opacity-0'
            } duration-300 md:left-24`}
          >
            <Icon product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalProduct;
