import { FC } from 'react';

import { Brand } from '@bs-commerce/models';
import SingleView from '@/components/brands/singleView';
interface MetaCardInterface {
  brand: Brand;
}
const BrandInfoCard: FC<MetaCardInterface> = (props: MetaCardInterface) => {
  const { brand } = props;

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="brand-info"
        id="brand-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center ps-2 pt-2">
            <i
              className="bi bi-info-lg col-1 align-text-top"
              style={{ fontSize: '25px' }}
            />
            <div className="fs-5 col px-3 text-start">Brand info</div>
          </div>
        </div>
        <div className="" id="prouctInfoTab">
          <div className="card-body">
            <SingleView label="Brand name" value={brand?.info?.name} />
            <SingleView label="Description" value={brand?.info?.description} />
            <SingleView
              label="Display Order"
              value={brand?.info?.displayOrder}
            />
            <SingleView
              label="Published"
              value={brand?.info?.published ? 'Yes' : 'No'}
            />
            <SingleView
              label="Allow To Select Page Size"
              value={brand?.info?.allowToSelectPageSize ? 'Yes' : 'No'}
            />
            <SingleView
              label="Page Size Options"
              value={brand?.info?.pageSizeOptions}
            />
            {brand?.meta[0] ? (
              <>
                <SingleView label="brand cost" value={brand?.meta?.keywords} />
                <SingleView
                  label="brand cost"
                  value={brand?.meta?.description}
                />
                <SingleView label="brand cost" value={brand?.meta?.title} />
                <SingleView label="brand cost" value={brand?.meta?.SEFN} />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandInfoCard;
