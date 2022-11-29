import { FC } from 'react';
import { Brand } from '@bs-commerce/models';
import BrandInfoCard from '@/components/brands/cards/brandInfoCard';
import BrandMetaCard from '@/components/brands/cards/metaCard';
import Link from 'next/link';
const ViewBrand: FC<{ brand: Brand }> = ({ brand }) => {
  return <>
    {brand ? (
      <div>
        <div className="content-header clearfix mt-3">
          <h1 className="float-start">
            View brand details
            <span className="fs-5 p-3">
              <Link href="/Brands" className="text-decoration-none ">

                <i className="bi bi-arrow-left-circle-fill p-2" />Back to brand list
              </Link>
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
  </>;
};

export default ViewBrand;
