import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CustomerProduct, IProductSearchSchema } from 'models';

import { userAPI } from 'APIs';
import Icon from '@/components/search/icon';
import ProductInfo from '@/components/global/components/product/productInfo';

interface SingleProduct {
  product: IProductSearchSchema;
  imgHeight?: number;
  imgWeight?: number;
}

const Product = ({ product, imgHeight, imgWeight }: SingleProduct) => {
  const [customerProduct, setCustomerProduct] = useState<CustomerProduct>();
  const getProduct = async () => {
    const res = await userAPI.getPublicProductsById(product.info.productId);
    if ('data' in res!) setCustomerProduct(res.data);
    return res;
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div
      className="duration-0 my-3 mx-auto w-fit justify-items-center transition hover:bg-white hover:duration-700"
      id="searchProductTestID"
    >
      <Link
        href={{
          pathname: `product/${customerProduct?.meta.friendlyPageName}`,
          // query: {
          //   id: product.info.productId,
          //   name: product.info.name,
          // },
        }}
        passHref
      >
        <div className="group relative grid cursor-pointer grid-cols-2 ">
          <Image
            src={product.photos![0]!}
            alt={product.photos![0]}
            height={imgHeight ? imgHeight : 120}
            width={imgWeight ? imgWeight : 120}
            className="col-span-2"
          />
          <div className="absolute bottom-12 right-0 w-36 origin-left transition-transform duration-300 hover:-translate-y-3 group-hover:scale-100 md:scale-0">
            {customerProduct && <Icon product={customerProduct} />}
          </div>
          <div className="col-span-1">
            {customerProduct && <ProductInfo product={customerProduct} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
