import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { useState } from 'react';
import AddNewAddressForm from '@/components/myAccount/addNewAddressForm';
import { useAppSelector } from 'customHooks/hooks';
import SingleAddress from '@/components/myAccount/singleAddress';
import WithAuth from '@/components/auth/withAuth';

const AccountDetails: NextComponentType = () => {
  const { t } = useTranslation();

  const [showAddAddress, setShowAddAddress] = useState('hidden');
  // const [showEditAddress, setShowEditAddress] = useState('hidden');

  const customerAddresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const addButtonOnClick = () => {
    showAddAddress === '' ? setShowAddAddress('hidden') : setShowAddAddress('');
  };

  // const editButtonOnClick = () => {
  //   showEditAddress === ''
  //     ? setShowEditAddress('hidden')
  //     : setShowEditAddress('');
  // };

  return (
    <>
      <Breadcrumb
        title={t('manage-address:addresses')}
        pathArray={[`${t('common:home')}`, `${t('manage-address:addresses')}`]}
        linkArray={['/', '/myAccount/addresses']}
      />
      <div className="container mx-auto my-24 px-5 text-gray-800 dark:text-dark_text">
        <div className="mb-3 flex flex-wrap justify-between">
          <div className="text-3xl font-bold">{t('common:my_account')}</div>
          {/* <Link href="/myAccount/form" passHref> */}
          <div className="mt-2 text-xl md:mt-0">
            <button
              className="rounded bg-primary py-2 px-4 text-sm text-white hover:bg-black focus:outline-none dark:bg-dark_primary dark:hover:border"
              type="button"
              onClick={() => addButtonOnClick()}
            >
              {t('common:add')} +
            </button>
          </div>
          {/* </Link> */}
        </div>
        <hr />
        <div className="mx-auto mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link href="/myAccount" passHref>
              <span className="cursor-pointer hover:text-primary dark:hover:text-dark_primary">
                {t('manage-address:return_to_account_details')}
              </span>
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className={`${showAddAddress}`}>
              <AddNewAddressForm cancelForm={addButtonOnClick} />
              <hr className="my-2" />
            </div>
            <div className="text-left">
              <span className="text-4xl">
                {t('manage-address:your_addresses')}
              </span>

              {customerAddresses?.length > 0 && (
                <>
                  {customerAddresses?.map((customerAddress, index) => {
                    return (
                      <React.Fragment key={customerAddress?.id!}>
                        <SingleAddress singleAddress={customerAddress} />
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithAuth(AccountDetails);
