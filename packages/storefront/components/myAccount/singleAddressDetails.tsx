import Link from 'next/link';
import { useRouter } from 'next/router';
import { CustomerAddress } from 'models';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import ChevronLeft from '@/components/myAccount/icons/chevron-left';
import ChevronRight from '@/components/myAccount/icons/chevron-right';
import { NextComponentType } from 'next';
import { useAppSelector } from 'customHooks/hooks';
import { useEffect, useState } from 'react';
import SingleAddressDetailsTable from '@/components/myAccount/singleAddressDetailsTable';

const SingleAddressDetails: NextComponentType = () => {
  const router = useRouter();
  const addressID = router.query.addressId;
  const [singleAddress, setSingleAddress] = useState<CustomerAddress>({});

  const customerAddresses = useAppSelector(
    (state) => state?.persistedReducer?.customerAddress.addresses
  );

  useEffect(() => {
    const address = customerAddresses.find(
      (customerAddress) => customerAddress.id === addressID
    );
    setSingleAddress(address);
  }, []);

  return (
    <>
      <Breadcrumb
        title="Order Details"
        pathArray={['Home', 'Details']}
        linkArray={['/', '/']}
      />
      <div className="container mx-auto mt-5 px-4">
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              router.push('/myAccount/addresses');
            }}
          >
            <ChevronLeft />
          </button>
          <p className="text-2xl font-semibold">Delivery Address</p>
        </div>
        <div className="mt-5 flex items-center gap-x-2">
          <Link href="/myAccount/addresses" passHref>
            <p className="cursor-pointer text-sm text-[#7c827f]">
              Delivery Address
            </p>
          </Link>
          <ChevronRight />
          <p className="cursor-pointer text-sm">Details</p>
        </div>

        <div className="mt-5 rounded-lg border md:w-1/2">
          <SingleAddressDetailsTable
            label="Address Line"
            text={singleAddress?.addressLine1}
            extraClass="mt-5"
          />

          <SingleAddressDetailsTable
            label="Flat/Building Name "
            text={
              singleAddress?.addressLine2 ? singleAddress?.addressLine2 : 'N/A'
            }
          />

          <SingleAddressDetailsTable
            label="City "
            text={singleAddress?.state}
          />

          <SingleAddressDetailsTable
            label="Post Code "
            text={singleAddress?.postCode}
          />

          <SingleAddressDetailsTable
            label="Phone Number "
            text={singleAddress?.phone ? singleAddress?.phone : 'N/A'}
          />
        </div>
      </div>
    </>
  );
};

export default SingleAddressDetails;
