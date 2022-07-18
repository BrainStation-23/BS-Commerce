import { NextComponentType } from 'next';
import Link from 'next/link';
import React from 'react';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { useState } from 'react';
import AddNewAddressForm from './addNewAddressForm';
import { useAppSelector } from 'customHooks/hooks';
import SingleAddress from './singleAddress';

const AccountDetails: NextComponentType = () => {
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
        title="Addresses"
        pathArray={['Home', 'Addresses']}
        linkArray={['/', '/myAccount/addresses']}
      />
      <div className="container mx-auto my-24 px-5 text-gray-800">
        <div className="mb-3 flex flex-wrap justify-between">
          <div className="text-3xl font-bold">My Account</div>
          {/* <Link href="/myAccount/form" passHref> */}
          <div className="mt-2 text-xl md:mt-0">
            <button
              className="rounded bg-green-600 py-2 px-4 text-sm text-white hover:bg-black focus:outline-none"
              type="button"
              onClick={() => addButtonOnClick()}
            >
              Add a new address
            </button>
          </div>
          {/* </Link> */}
        </div>
        <hr />
        <div className="mx-auto mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link href="/myAccount">
              <span className="cursor-pointer hover:text-blue-600">
                Return to Account Details
              </span>
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className={`${showAddAddress}`}>
              <AddNewAddressForm cancelForm={addButtonOnClick} />
              <hr className="my-2" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-4xl">Your Addresses</span>

              {customerAddresses?.length > 0 && (
                <>
                  {customerAddresses?.map((customerAddress, index) => {
                    return (
                      <React.Fragment key={customerAddress?.id!}>
                        {index === 0 && (
                          <div className="flex flex-wrap gap-x-2 text-4xl">
                            <p>{customerAddress?.firstName!}</p>
                            <p>{customerAddress?.lastName!}</p>
                            <p>(Default)</p>
                          </div>
                        )}
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

export default AccountDetails;
