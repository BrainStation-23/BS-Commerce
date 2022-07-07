import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userAPI } from '../../../APIs';
import ManufacturerInfoCard from './viewCards/manufacturerInfo';
import DisplayOrderCard from './viewCards/displayOrder';
import SeoCard from './viewCards/seo';
import Link from 'next/link';
interface Props {
  manufacturer: any;
}
const ViewManufacturerComp: FC<Props> = ({ manufacturer }) => {
  return (
    <>
      {manufacturer ? (
        <div>
          <div className="content-header clearfix mt-3">
            <h1 className="float-start">
              View Manufacturer details
              <span className="fs-5 p-3">
                <Link href={'/Manufacturer'}>
                  <a className="text-decoration-none">
                    <i className="bi bi-arrow-left-circle-fill p-2" />
                    Back to Manufacturer list
                  </a>
                </Link>
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <ManufacturerInfoCard manufacturer={manufacturer} />
            <DisplayOrderCard manufacturer={manufacturer} />
            <SeoCard manufacturer={manufacturer} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewManufacturerComp;
