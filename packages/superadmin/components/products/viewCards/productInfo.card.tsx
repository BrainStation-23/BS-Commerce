import { FC } from 'react';

import { Product } from '@bs-commerce/models';
import SingleView from '@/components/products/singleView';

const ProductInfoCard: FC<{
  product: Product;
}> = (props: { product: Product }) => {
  const { product } = props;

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        id="product-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center ps-2 pt-2">
            <i
              className="bi bi-info-lg col-1 align-text-top"
              style={{ fontSize: '25px' }}
            />
            <div className="fs-5 col px-3 text-start">Product info</div>
          </div>
        </div>
        <div className="" id="prouctInfoTab">
          <div className="card-body">
            <SingleView label="Product name" value={product?.info?.name} />
            <SingleView
              label="Short description"
              value={product?.info?.shortDescription}
            />
            <SingleView
              label="Full description"
              value={product?.info?.fullDescription}
            />
            <SingleView label="SKU" value={product?.info?.sku} />
            <SingleView label="Price" value={product?.info?.price} />
            <SingleView label="Old price" value={product?.info?.oldPrice} />
            <SingleView label="Product cost" value={product?.info?.cost} />
            <SingleView
              label="Publish Date"
              value={product?.info?.publishDate}
            />
            <SingleView label="Tags" value={product?.tags} />
            <SingleView label="Brands" value={product?.brands} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoCard;
