import Link from 'next/link';
import { useRouter } from 'next/router';
import { CustomerAddress } from '@bs-commerce/models';

import Breadcrumb from '@/modules/global/breadcrumbs/breadcrumb';
import ChevronLeft from '@/modules/myAccount/icons/chevron-left';
import ChevronRight from '@/modules/myAccount/icons/chevron-right';
import { NextComponentType } from 'next';
import { useAppSelector } from 'store/hooks/index';
import { useEffect, useState } from 'react';
import SingleAddressDetailsTable from '@/modules/myAccount/singleAddressDetailsTable';
import useTranslation from 'next-translate/useTranslation';

const SingleAddressDetails: NextComponentType = () => {
  const router = useRouter();
  const addressID = router.query.addressId;
  const [singleAddress, setSingleAddress] = useState<CustomerAddress>({
    id: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    isDefault: false,
    company: '',
    state: '',
    country: '',
    postCode: '',
    phone: '',
    tag: '',
  });
  const { t } = useTranslation();
  const customerAddresses = useAppSelector(
    (state) => state?.persistedReducer?.customerAddress.addresses
  );

  useEffect(() => {
    const address = customerAddresses.find(
      (customerAddress) => customerAddress.id === addressID
    );
    setSingleAddress(address!);
  }, []);

  return (
    <>
      <Breadcrumb
        title={t('myAccount:order_details')}
        pathArray={[`${t('common:home')}`, `${t('myAccount:order_details')}`]}
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
          <p className="text-2xl font-semibold">
            {t('myAccount:delivery_address')}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-x-2">
          <Link href="/myAccount/addresses" passHref>
            <p className="cursor-pointer text-sm text-[#7c827f]">
              {t('myAccount:delivery_address')}
            </p>
          </Link>
          <ChevronRight />
          <p className="cursor-pointer text-sm">{t('myAccount:details')}</p>
        </div>

        <div className="mt-5 rounded-lg border md:w-1/2">
          <SingleAddressDetailsTable
            label={t('myAccount:address_line')}
            text={singleAddress?.addressLine1}
            extraClass="mt-5"
          />

          <SingleAddressDetailsTable
            label={t('myAccount:building_name')}
            text={
              singleAddress?.addressLine2 ? singleAddress?.addressLine2 : 'N/A'
            }
          />

          <SingleAddressDetailsTable
            label={t('myAccount:city')}
            text={singleAddress?.state!}
          />

          <SingleAddressDetailsTable
            label={t('myAccount:post_code')}
            text={singleAddress?.postCode!}
          />

          <SingleAddressDetailsTable
            label={t('myAccount:phone_number')}
            text={singleAddress?.phone ? singleAddress?.phone : 'N/A'}
          />
        </div>
      </div>
    </>
  );
};

export default SingleAddressDetails;
