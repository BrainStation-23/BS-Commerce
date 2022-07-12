import { userAPI } from '../../APIs';
import { useEffect, useState } from 'react';
import BrandInfoCard from './cards/brandInfo';
import BrandMetaCard from './cards/metaCard';
const ViewBrand = (props: any) => {
  const { brand } = props;

  return (
    <>
      {brand ? (
        <div>
          <div className="content-header clearfix mt-3">
            <h1 className="float-start">
              View brand details
              <span className="fs-5 p-3">
                <a href="/brand" className="text-decoration-none ">
                  <i className="bi bi-arrow-left-circle-fill p-2" />
                  Back to brand list
                </a>
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <BrandInfoCard brand={brand} />
            {brand?.meta?.keywords ? <BrandMetaCard brand={brand} /> : ''}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewBrand;
