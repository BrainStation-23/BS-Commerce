import { NextComponentType } from 'next';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeUserToken } from 'toolkit/authSlice';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

const AccountDetails: NextComponentType = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  //   const token = useAppSelector(
  //     (state) => state.persistedReducer.auth.access_token
  //   );

  const userData = {
    name: 'Test User',
    email: 'test@user.com',
    firstName: 'Test',
    lastName: 'User',
    phone: '+8801674314359',
    isPhoneVerified: false,
    isEmailVerified: true,
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };

  const handleSubmit = (values: any) => {
    console.log('clicked on save');

    console.log(values);
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
                    <div className="w-full md:w-1/3">
                      <span className="">
                        <span className="text-2xl font-semibold">
                          Account Details
                        </span>
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
                      </span>
                      {/* Account Form */}
                      <div className="mt-2 flex flex-col gap-y-2">
                        <div className="flex flex-row">
                          <span className="mr-2 font-semibold">
                            First name:{' '}
                          </span>
                          <Field
                            className=""
                            id="firstName"
                            name="firstName"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-row">
                          <span className="mr-2 font-semibold">
                            Last name:{' '}
                          </span>
                          <Field
                            className=""
                            id="lastName"
                            name="lastName"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-row">
                          <span className="mr-2 font-semibold">Phone: </span>
                          <Field
                            className=""
                            id="phone"
                            name="phone"
                            type="text"
                            disabled={userData.isPhoneVerified}
                            //
                          />
                          {editable
                            ? ''
                            : userData.isPhoneVerified
                            ? ''
                            : '(unverified)'}
                        </div>
                        <div className="flex flex-row">
                          <span className="mr-2 font-semibold">Email: </span>
                          <Field
                            className=""
                            id="email"
                            name="email"
                            type="email"
                            disabled={userData.isEmailVerified}
                          />
                          {editable
                            ? ''
                            : userData.isEmailVerified
                            ? ''
                            : '(unverified)'}
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </Form>
            );
          }}
        </Formik>
        {/* <div className="mt-32"> Bangladesh </div>
            <Link href="/myAccount/addresses">
              <span className="cursor-pointer hover:text-green-600">
                View Addresses (1)
              </span>
            </Link> */}
      </div>
    </>
  );
};

export default AccountDetails;
