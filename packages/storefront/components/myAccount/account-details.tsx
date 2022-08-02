import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';

import { UpdateCustomerRequestBody } from 'models';

import { userAPI } from 'APIs';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeUserToken } from 'toolkit/authSlice';
import { storeCustomerDetails } from 'toolkit/userSlice';

import { CustomerSchema } from './schema/customer.schema';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import AccountDetailsForm from '@/components/myAccount/account-detailForm';
import SingleDetail from '@/components/myAccount/singleDetail';
import WithAuth from '@/components/auth/withAuth';

var cookie = require('cookie');

const AccountDetails: React.FC = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const userData = {
    email: customer.email === undefined ? '' : customer.email,
    firstName: customer.firstName === undefined ? '' : customer.firstName,
    lastName: customer.lastName === undefined ? '' : customer.lastName,
    phone: customer.phone === undefined ? '' : customer.phone,

    isPhoneVerified: false,
    isEmailVerified: true,
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };

  const handleSubmit = async (values: UpdateCustomerRequestBody) => {
    // const firstName = values.firstName === '' ? null : values.firstName;
    // const lastName = values.lastName === '' ? null : values.lastName;
    // const phone = values.phone === '' ? null : values.phone;
    // const email = values.email === '' ? null : values.email;

    const response = await userAPI.updateCustomer(values);
    dispatch(storeCustomerDetails(response!.data));
    setEditable(false);
  };
  



  return (
    <>
      <Breadcrumb
        title="Account"
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

        <Formik
          initialValues={{
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            email: userData.email,
          }}
          validationSchema={CustomerSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {(formikProps) => {
            return (
              <Form onSubmit={formikProps.handleSubmit} className="">
                <fieldset disabled={!editable}>
                  <div className="mx-auto mt-3 flex flex-wrap">
                    <div className="w-full md:w-1/2">
                      <div className="mt-2 flex items-center">
                        <div className="w-1/3 my-auto">
                          <span className="text-2xl font-semibold">
                            Account Details
                          </span>
                        </div>
                        <div className="w-2/3">
                          <span
                            className="ml-2 cursor-pointer rounded-md bg-green-600 px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900"
                            hidden={editable}
                            onClick={() => setEditable(true)}
                          >
                            Edit
                          </span>
                          <button
                            hidden={!editable}
                            type="submit"
                            className="ml-2 rounded-md bg-green-600 px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900"
                          >
                            Save
                          </button>
                          <span
                            hidden={!editable}
                            className="ml-2 cursor-pointer rounded-md bg-green-600 px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900"
                            onClick={() => setEditable(false)}
                          >
                            Cancel
                          </span>
                        </div>
                      </div>
                      {/* Account Form */}
                      <div className="mt-2 flex flex-col gap-y-2">
                        <SingleDetail
                          value={userData.firstName}
                          label="First name"
                        />
                        <SingleDetail
                          value={userData.lastName}
                          label="Last name"
                        />
                        <SingleDetail
                          value={userData.phone}
                          label="Phone"
                          verified={userData.isPhoneVerified}
                        />
                        <SingleDetail
                          value={userData.email}
                          label="Email"
                          verified={userData.isEmailVerified}
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className={`${editable ? '' : 'hidden'}`}>
                  <hr className="m-5" />
                  <AccountDetailsForm
                    isPhoneVerified={false}
                    isEmailVerified={true}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default WithAuth(AccountDetails);
