import { FC } from 'react';

import { Brand } from 'models';
import SingleView from '@/components/brands/singleView';
interface MetaCardInterface {
  brand: Brand;
}
const BrandMetaCard: FC<MetaCardInterface> = (props: MetaCardInterface) => {
  const { brand } = props;

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="brand-meta"
        id="brand-meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center ps-2 pt-2">
            <i
              className="bi bi-meta col-1 align-text-top"
              style={{ fontSize: '25px' }}
            />
            <div className="fs-5 col text-start px-3">Brand Meta</div>
          </div>
        </div>
        <div className="" id="prouctInfoTab">
          <div className="card-body">
            <SingleView label="brand cost" value={brand?.meta?.keywords} />
            <SingleView label="brand cost" value={brand?.meta?.description} />
            <SingleView label="brand cost" value={brand?.meta?.title} />
            <SingleView label="brand cost" value={brand?.meta?.SEFN} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandMetaCard;