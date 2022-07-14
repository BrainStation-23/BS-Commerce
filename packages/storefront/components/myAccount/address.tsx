import { NextComponentType } from 'next';
import Link from 'next/link';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { useState } from 'react';
import AddNewAddressForm from './addNewAddressForm';

const AccountDetails: NextComponentType = () => {
  const [showAddAddress, setShowAddAddress] = useState('hidden');
  const [showEditAddress, setShowEditAddress] = useState('hidden');

  const addButtonOnClick = () => {
    showAddAddress === '' ? setShowAddAddress('hidden') : setShowAddAddress('');
  };

  const editButtonOnClick = () => {
    showEditAddress === ''
      ? setShowEditAddress('hidden')
      : setShowEditAddress('');
  };

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
              <AddNewAddressForm /> <hr className="my-2" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-4xl">Your Addresses</span>
              <div className="mt-2 text-3xl">Customer Name (Default)</div>
              <div className="mt-32 mb-5"> Bangladesh </div>

              <div>
                {/* <Link href="/account/addresses"> */}
                <span
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => editButtonOnClick()}
                >
                  Edit{' '}
                </span>
                {/* </Link> */}
                <span>| </span>
                <span className="cursor-pointer hover:text-blue-600">
                  Delete
                </span>
              </div>
            </div>
            <div className={`${showEditAddress}`}>
              <hr className="my-2" />
              <p className='font-bold my-5'>Edit Address</p>
              <AddNewAddressForm /> <hr className="my-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
