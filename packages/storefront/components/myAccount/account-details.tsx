import { NextComponentType } from 'next';
import Link from 'next/link';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';

import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeUserToken } from 'toolkit/authSlice';
import { toast } from 'react-toastify';

const AccountDetails: NextComponentType = () => {
  const dispatch = useAppDispatch();
//   const token = useAppSelector(
//     (state) => state.persistedReducer.auth.access_token
//   );
  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };
  return (
    <>
     <Breadcrumb
        title='Account'
        pathArray={['Home', 'Account']}
        linkArray={['/', '/myAccount']}
      />
    <div className="container mx-auto my-24 px-5 text-gray-800">
      <div className="border-b-2">
        <span className="text-3xl font-bold">My Account</span>
        <Link href="/" passHref>
          <span className="float-right text-xl font-bold">
            <a
              onClick={() => handleLogout()}
              className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600"
            >
              Logout
            </a>
          </span>
        </Link>
      </div>
      <div className="mx-auto mt-3 flex flex-wrap">
          <div className="w-full md:w-2/3">
            <span className="text-2xl font-semibold">Order History</span>
            <div className="mt-2">You haven't placed any orders yet.</div>
          </div>
          <div className="w-full md:w-1/3">
            <span className="text-2xl font-semibold">Account Details</span>
            <div className="mt-2 text-xl font-semibold">Customer Name</div>
            <div className="mt-32"> Bangladesh </div>
            <Link href="/myAccount/addresses">
              <span className="cursor-pointer hover:text-green-600">
                View Addresses (1)
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
