import Link from 'next/link';

import { useState } from 'react';
import { NextComponentType } from 'next';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';
import CreditCard from '@/components/global/icons-for-checkout-page/credit-card';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { addToBillingInfo, deleteCheckoutInfo } from 'toolkit/checkoutSlice';
import { useRouter } from 'next/router';
import { paymentSchema } from '@/components/global/schemas/checkout.schema';

interface FormData {
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  securityCode: string;
  shippingAddressPicked: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  addressOptional: string;
  city: string;
  postalCode: string;
}

const PaymentDetails: NextComponentType = () => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialValues = {
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    securityCode: '',
    shippingAddressPicked: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    addressOptional: '',
    city: '',
    postalCode: '',
  };

  const [showShippingForm, setShowShippingForm] = useState(false);

  const handlePaymentSubmit = (data: FormData) => {
    {
      data ? dispatch(addToBillingInfo(data)) : null;
    }
    {
      router.push('/submit');
    }
    dispatch(deleteCheckoutInfo());
  };

  const handleSameAddress = () => {
    setShowShippingForm(false);
  };

  return (
    <>
      <p className="mt-5 text-lg">Payment</p>
      <p className="text-sm text-gray-500">
        All transactions are secure and encrypted.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const data = {
            cardNumber: values.cardNumber,
            nameOnCard: values.nameOnCard,
            expirationDate: values.expirationDate,
            securityCode: values.securityCode,
            shippingAddressPicked: values.shippingAddressPicked,
            country: values.country,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            addressOptional: values.addressOptional,
            city: values.city,
            postalCode: values.postalCode,
          };
          handlePaymentSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={paymentSchema}
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                {/* credit card info div */}
                <div className="mt-5 rounded border border-gray-300">
                  <div className="border-b-1 flex flex-wrap items-center justify-between p-4">
                    <p className="text-sm font-semibold">Credit card</p>
                    <CreditCard />
                  </div>
                  <div className="bg-gray-100">
                    <div className="p-4">
                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`cardNumber`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            Card Number
                          </label>
                          <div className="errMsg text-red-600">
                              <ErrorMessage name="cardNumber" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="text"
                            id="nameOnCard"
                            name="nameOnCard"
                            className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`nameOnCard`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            Name on card
                          </label>
                          <div className="errMsg text-red-600">
                              <ErrorMessage name="nameOnCard" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                          <div className="relative">
                            <Field
                              type="month"
                              id="expirationDate"
                              name="expirationDate"
                              className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                              placeholder=" "
                            />
                            <label
                              htmlFor={`expirationDate`}
                              className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                            >
                              Expiration Date (MM / YY)
                            </label>
                            <div className="errMsg text-red-600">
                              <ErrorMessage name="expirationDate" />
                          </div>
                          </div>

                          <div className="relative">
                            <Field
                              type="text"
                              id="securityCode"
                              name="securityCode"
                              className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                              placeholder=" "
                            />
                            <label
                              htmlFor={`securityCode`}
                              className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                            >
                              Security Code
                            </label>
                            <div className="errMsg text-red-600">
                              <ErrorMessage name="securityCode" />
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* billing div */}
                <div>
                  <p className="mt-5 text-lg">Billing address</p>
                  <p className="text-sm text-gray-500">
                    Select the address that matches your card or payment method.
                  </p>
                  <div className="mt-5 rounded border border-gray-300 py-4">
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="items-center text-sm font-semibold"
                    >
                      <label>
                        <Field
                          type="radio"
                          name="shippingAddressPicked"
                          value="sameShippingAddress"
                          className="mx-4 mb-4 checked:accent-black"
                          onClick={() => {
                            handleSameAddress();
                          }}
                          required
                        />
                        Same as shipping address
                      </label>
                      <hr />
                      <label>
                        <Field
                          type="radio"
                          name="shippingAddressPicked"
                          value="differentShippingAddress"
                          className="mx-4 mt-4 checked:accent-black"
                          onClick={() => {
                            setShowShippingForm(true);
                          }}
                        />
                        Use a different billing address
                      </label>
                      {showShippingForm && <hr className="mt-4" />}
                    </div>
                    {showShippingForm === true && (
                      <>
                        <div className="bg-gray-100 p-5">
                          <div className="mb-3">
                            <Field
                              as="select"
                              id="country"
                              name="country"
                              className=" peer block w-full appearance-none rounded border  border-gray-300 p-4 text-sm text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
                            >
                              <option>Click here to select your country</option>
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </Field>
                            {/* <div className="errMsg text-red-600">
                              <ErrorMessage name="country" />
                            </div> */}
                          </div>

                          <div className="row">
                            <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                              <div className="relative">
                                <Field
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                  placeholder=" "
                                />
                                <label
                                  htmlFor={`firstName`}
                                  className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                                >
                                  First name (optional)
                                </label>
                                {/* <div className="errMsg text-red-600">
                                  <ErrorMessage name="firstName" />
                                </div> */}
                              </div>

                              <div className="relative">
                                <Field
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  className={`peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                  placeholder=" "
                                />
                                <label
                                  htmlFor={`lastName`}
                                  className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                                >
                                  Last name
                                </label>
                                {/* <div className="errMsg text-red-600">
                                  <ErrorMessage name="lastName" />
                                </div> */}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="relative">
                              <Field
                                type="text"
                                id="address"
                                name="address"
                                className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                placeholder=" "
                              />
                              <label
                                htmlFor={`address`}
                                className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                              >
                                Address
                              </label>
                              {/* <div className="errMsg text-red-600">
                                <ErrorMessage name="address" />
                              </div> */}
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="relative">
                              <Field
                                type="text"
                                id="addressOptional"
                                name="addressOptional"
                                className={`peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                placeholder=" "
                              />
                              <label
                                htmlFor={`addressOptional`}
                                className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                              >
                                Apartment, suit, etc. (optional)
                              </label>
                              {/* <div className="errMsg text-red-600">
                                  <ErrorMessage name="addressOptional" />
                              </div> */}
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                              <div className="relative">
                                <Field
                                  type="text"
                                  id="city"
                                  name="city"
                                  className={` peer block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                  placeholder=" "
                                />
                                <label
                                  htmlFor={`city`}
                                  className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                                >
                                  City
                                </label>
                                {/* <div className="errMsg text-red-600">
                                  <ErrorMessage name="city" />
                                </div> */}
                              </div>

                              <div className="relative">
                                <Field
                                  type="text"
                                  id="postalCode"
                                  name="postalCode"
                                  className={` peer block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                                  placeholder=" "
                                />
                                <label
                                  htmlFor={`postalCode`}
                                  className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                                >
                                  Postal Code
                                </label>
                                {/* <div className="errMsg text-red-600">
                                  <ErrorMessage name="postalCode" />
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-5 mb-10 flex flex-col flex-wrap items-center gap-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                  {/* <Link href="/submit" passHref> */}
                  <button
                    type="submit"
                    className="w-full rounded bg-black p-5 text-sm text-white sm:w-full md:w-24 lg:w-24 xl:w-24"
                    // onClick={() => {router.push('/submit')}}
                  >
                    Pay now
                  </button>
                  {/* </Link> */}

                  <div className="flex flex-wrap items-center">
                    <div className="block items-center sm:block sm:items-center md:hidden lg:hidden xl:hidden">
                      {/* need to change the link */}
                      <Link href="/cart" passHref>
                        <a className="text-decoration-none">
                          {<ChevronLeft />}
                        </a>
                      </Link>
                    </div>
                    <Link href="/cart" passHref>
                      <a className="text-decoration-none mb-2">
                        Return to cart
                      </a>
                    </Link>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default PaymentDetails;
