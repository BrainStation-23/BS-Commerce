import Link from 'next/link';
import { useRouter } from 'next/router';
import { CustomerAddress } from '@bs-commerce/models';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import { NextComponentType } from 'next';
import { useAppSelector } from 'store/hooks/index';
import { useEffect, useState } from 'react';
import SingleAddressDetailsTableData from '@/modules/myAccount/addresses/components/singleAddressDetailsTableData';
import useTranslation from 'next-translate/useTranslation';
import ChevronLeft from '@/modules/common/icons/chevronLeft';
import ChevronRight from '@/modules/common/icons/chevronRight';
import ElementButton from '@/modules/common/buttons/elementButton';

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
          <ElementButton
            className="cursor-pointer fill-primary dark:fill-dark_primary"
            onClickFunction={() => {
              router.push('/myAccount/addresses');
            }}
          >
            <ChevronLeft height="h-9" width="w-9" />
          </ElementButton>
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
          <div className="fill-current stroke-current">
            <ChevronRight height="h-4" width="w-4" />
          </div>
          <p className="cursor-pointer text-sm">{t('myAccount:details')}</p>
        </div>

        <div className="mt-5 rounded-lg border md:w-1/2">
          <SingleAddressDetailsTableData
            label={t('myAccount:address_line')}
            text={singleAddress?.addressLine1}
            extraClass="mt-5"
          />

          <SingleAddressDetailsTableData
            label={t('myAccount:building_name')}
            text={
              singleAddress?.addressLine2 ? singleAddress?.addressLine2 : 'N/A'
            }
          />

          <SingleAddressDetailsTableData
            label={t('myAccount:city')}
            text={singleAddress?.state!}
          />

          <SingleAddressDetailsTableData
            label={t('myAccount:post_code')}
            text={singleAddress?.postCode!}
          />

          <SingleAddressDetailsTableData
            label={t('myAccount:phone_number')}
            text={singleAddress?.phone ? singleAddress?.phone : 'N/A'}
          />
        </div>
      </div>
    </>
  );
};

export default SingleAddressDetails;
