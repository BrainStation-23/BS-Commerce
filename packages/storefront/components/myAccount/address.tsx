import { NextComponentType } from 'next';
import Link from 'next/link';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { useState } from 'react';
import AddNewAddressForm from './addNewAddressForm';

const AccountDetails: NextComponentType = () => {
  const [showAddress, setShowAddress] = useState('hidden');
  const toggleButton = () => {
    showAddress === '' ? setShowAddress('hidden') : setShowAddress('');
  };
  return (
    <>
      <Breadcrumb
        title="Addresses"
        pathArray={['Home', 'Addresses']}
        linkArray={['/', '/myAccount/addresses']}
      />
      <div className="container mx-auto my-24 px-5 text-gray-800">
        <div className='mb-3 flex flex-wrap justify-between'>
          <div className="text-3xl font-bold">My Account</div>
          {/* <Link href="/myAccount/form" passHref> */}
          <div className="text-xl mt-2 md:mt-0">
            <button
              className="rounded text-sm bg-green-600 py-2 text-white hover:bg-black focus:outline-none px-4"
              type="button"
              onClick={() => toggleButton()}
            >
              Add a new address
            </button>
          </div>
          {/* </Link> */}
        </div>
        <hr/>
        <div className="mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <Link href="/myAccount">
              <span className="cursor-pointer hover:text-blue-600">
                Return to Account Details
              </span>
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className={`${showAddress}`}><AddNewAddressForm/> <hr className='my-2' /></div>
            <div className='text-center md:text-left'>
              <span className="text-4xl">Your Addresses</span>
              <div className="mt-2 text-3xl">Customer Name (Default)</div>
              <div className="mt-32 mb-5"> Bangladesh </div>

              <div>
                <Link href="/account/addresses">
                  <span className="cursor-pointer hover:text-blue-600">
                    Edit{' '}
                  </span>
                </Link>
                <span>| </span>
                <span className="cursor-pointer hover:text-blue-600">Delete</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
