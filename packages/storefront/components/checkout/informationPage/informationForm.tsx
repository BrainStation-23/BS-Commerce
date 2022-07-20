import Link from 'next/link';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { addToShippingInfo } from 'toolkit/checkoutSlice';
import { informationSchema } from '@/components/global/schemas/checkout.schema';

import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { storeUserToken } from 'toolkit/authSlice';
import { userAPI } from 'APIs';
import { storeAddresses } from 'toolkit/customerAddressSlice';

interface FormData {
  email: string;
  contact: string;
  sendNotificationCheckbox: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  addressOptional: string;
  city: string;
  postalCode: string;
}

const Information = (props: any) => {
  const [dropdownText, setDropdownText] = useState('Use a new address');
  const [showLabel, setShowLabel] = useState(false);
  const user = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails.email
  );
  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };

  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  let initialValues = {
    email: user,
    contact: shippingInfo?.contact,
    firstName: shippingInfo?.firstName,
    lastName: shippingInfo?.lastName,
    country: shippingInfo?.country,
    address: shippingInfo?.address,
    addressOptional: shippingInfo?.addressOptional,
    city: shippingInfo?.city,
    postalCode: shippingInfo?.postalCode,
  };

  const [update, setUpdate] = useState(initialValues);
  const customerAddresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const dispatch = useAppDispatch();
  const { setModal } = props;

  const handlePreviousAddress = (event: any) => {
    setDropdownText(event.target.value);
    const detail = event.target.value;
    let newArr = detail.split(' ');
    if (detail === 'Use a new address') {
      setShowLabel(true);
      setUpdate({
        email: user,
        contact: '',
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        addressOptional: '',
        city: '',
        postalCode: '',
      });
    } else {
      setShowLabel(false);
      initialValues = {
        email: user,
        firstName: newArr[0],
        lastName: newArr[1],
        country: '',
        address: newArr[2],
        addressOptional: newArr[3],
        city: newArr[4],
        postalCode: newArr[5],
        contact: newArr[6],
      };
      setUpdate(initialValues);
    }
  };

  const handleCheckoutSubmit = (data: FormData) => {
    dispatch(addToShippingInfo(data));
    const obj = {
      info: false,
      ship: true,
      pay: false,
    };
    setModal(obj);
  };

  return (
    <div className="">
      <Formik
        enableReinitialize={true}
        initialValues={update}
        onSubmit={(values, actions) => {
          const data = {
            email: user,
            contact: values.contact,
            country: values.country,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            addressOptional: values.addressOptional,
            city: values.city,
            postalCode: values.postalCode,
          };
          const addressData = {
            phone: values.contact,
            firstName: values.firstName,
            lastName: values.lastName,
            addressLine1: values.address,
            addressLine2: values.addressOptional,
            state: values.city,
            postCode: values.postalCode,
            tag: values.tag,
          };
          if (values?.tag!) {
            userAPI.addCustomerNewAddress(addressData);
            userAPI.getCustomer(token).then((response) => {
              dispatch(storeAddresses(response?.data?.addresses));
            });
          }
          values.tag ? userAPI.addCustomerNewAddress(addressData) : null;
          handleCheckoutSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={informationSchema}
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="flex flex-wrap justify-between">
                  <p className="text-lg">Contact Information</p>
                </div>

                <div className="mt-5">
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-14 w-14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="ml-2">
                        <span className="text-lg text-slate-500">{user}</span>

                        <div className="text-base">
                          <Link href="/" passHref>
                            <a
                              onClick={() => handleLogout()}
                              className="text-decoration-none"
                            >
                              Logout
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-lg">Shipping Address</p>

                  <div className="mt-5">
                    <div className="mb-3">
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        className="required peer block w-full appearance-none rounded border  border-gray-300 p-4 text-sm text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
                        onClick={handlePreviousAddress}
                      >
                        <option>{dropdownText}</option>
                        {customerAddresses?.length ? (
                          customerAddresses?.map((customerAddress) => {
                            return (
                              <>
                                <option>{`${customerAddress.firstName} ${customerAddress.lastName} ${customerAddress.addressLine1} ${customerAddress.addressLine2} ${customerAddress.state} ${customerAddress.postCode} ${customerAddress.phone}`}</option>
                              </>
                            );
                          })
                        ) : (
                          <option></option>
                        )}
                        <option>Use a new address</option>
                      </Field>
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="country" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                        <div className="relative">
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`firstName`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            First name
                          </label>
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="firstName" />
                          </div>
                        </div>

                        <div className="relative">
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`lastName`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            Last name
                          </label>
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="lastName" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative">
                        <Field
                          type="text"
                          id="contact"
                          name="contact"
                          className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                          placeholder=" "
                        />
                        <label
                          htmlFor={`contact`}
                          className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                        >
                          Mobile phone number
                        </label>
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="contact" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative">
                        <Field
                          type="text"
                          id="address"
                          name="address"
                          className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                          placeholder=" "
                        />
                        <label
                          htmlFor={`address`}
                          className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                        >
                          Address 1
                        </label>
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="address" />
                        </div>
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
                          Address 2
                        </label>
                        <div className="errMsg text-red-600">
                          <ErrorMessage name="addressOptional" />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                        <div className="relative">
                          <Field
                            type="text"
                            id="city"
                            name="city"
                            className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`city`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            City
                          </label>
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="city" />
                          </div>
                        </div>

                        <div className="relative">
                          <Field
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                            placeholder=" "
                          />
                          <label
                            htmlFor={`postalCode`}
                            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                          >
                            Postal Code
                          </label>
                          <div className="errMsg text-red-600">
                            <ErrorMessage name="postalCode" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {showLabel ? (
                  <div>
                    <p className="mb-2">
                      Select a label for effective delivery:
                    </p>

                    <div className="flex flex-wrap items-center gap-x-3">
                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="radio"
                            id="tag1"
                            name="tag"
                            className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                            placeholder=" "
                            value="home"
                            required
                          />
                          <label
                            htmlFor="tag1"
                            className="ml-2 text-sm hover:cursor-pointer"
                          >
                            Home
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="radio"
                            id="tag2"
                            name="tag"
                            className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                            placeholder=" "
                            value="office"
                          />
                          <label
                            htmlFor="tag2"
                            className="ml-2 text-sm hover:cursor-pointer"
                          >
                            Office
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="radio"
                            id="tag3"
                            name="tag"
                            className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                            placeholder=" "
                            value="others"
                          />
                          <label
                            htmlFor="tag3"
                            className="ml-2 text-sm hover:cursor-pointer"
                          >
                            Others
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="flex flex-col flex-wrap items-center gap-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                  <button
                    type="submit"
                    className="my-2 w-full rounded bg-black p-5 text-sm text-white sm:w-full md:w-44 lg:w-44 xl:w-44"
                  >
                    Continue to shipping
                  </button>
                  <div className="flex flex-wrap items-center">
                    <div className="block items-center sm:block sm:items-center md:hidden lg:hidden xl:hidden">
                      <Link href="/cart" passHref>
                        <a className="text-decoration-none">
                          {<ChevronLeft />}
                        </a>
                      </Link>
                    </div>
                    <Link href="/cart" passHref>
                      <a className="text-decoration-none">Return to cart</a>
                    </Link>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Information;
