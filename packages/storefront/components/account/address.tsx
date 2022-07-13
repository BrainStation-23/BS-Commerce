import { NextComponentType } from 'next';
import Link from 'next/link';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';

const AccountDetails: NextComponentType = () => {
  return (
    <>
      <Breadcrumb
        title="Addresses"
        pathArray={['Home', 'Addresses']}
        linkArray={['/', '/account/addresses']}
      />
      <div className="container mx-auto my-24 px-5 text-gray-800">
        <div className="border-b-2">
          <span className="text-3xl font-bold">My Account</span>
          <Link href="/" passHref>
            <span className="float-right text-xl font-bold">
              <button
                className="lg:px-auto rounded bg-green-600 py-1 text-white hover:bg-black focus:outline-none sm:px-12"
                type="button"
              >
                Add a new address
              </button>
            </span>
          </Link>
        </div>
        <div className="mx-auto mt-3 flex flex-wrap">
          <div className="w-full md:w-1/3">
            <Link href="/account">
              <span className="cursor-pointer hover:text-blue-600">
                Return to Account Details
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <span className="text-4xl">Your Addresses</span>
            <div className="mt-2 text-3xl">Customer Name (Default)</div>
            <div className="mt-32 mb-5"> Bangladesh </div>

            <div>
              <Link href="/account/addresses">
                <span className="cursor-pointer hover:text-blue-600">Edit </span>
              </Link>
              <span>| </span>
              <span className="cursor-pointer hover:text-blue-600">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
