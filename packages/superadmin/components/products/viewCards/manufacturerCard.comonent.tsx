import { FC } from 'react';

import { Product } from '@bs-commerce/models';
import SingleView from '@/components/products/singleView';

const ManufacturerCard: FC<{
  product: Product;
}> = (props: { product: Product }) => {
  const { product } = props;
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center  ps-2 pt-2">
            <i
              className="bi bi-menu-button-wide-fill col-1 px-1"
              style={{ fontSize: '25px' }}
            />
            <div className="fs-5 col px-3 text-start">Manufacturer</div>
          </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView
              label="Manufacturer"
              value={product?.manufacturer?.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManufacturerCard;
