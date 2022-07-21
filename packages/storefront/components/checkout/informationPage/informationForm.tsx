import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { userAPI } from 'APIs';
import { storeUserToken } from 'toolkit/authSlice';
import { addToShippingInfo } from 'toolkit/checkoutSlice';
import { storeAddresses } from 'toolkit/customerAddressSlice';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { informationSchema } from '@/components/global/schemas/checkout.schema';
import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';
import FieldTemplate from '../fieldTemplate';

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
    (state) => state.persistedReducer.user.customerDetails
  );
  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.success('Logged out successfully!');
  };

  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const addresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  let initialValues = {
    email: user?.email,
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
  const [tags, setTags] = useState<string[]>([]);
  const customerAddresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const setTagsOptions = () => {
    const ntags = new Set();
    customerAddresses?.map((addressn) => {
      ntags.add(addressn?.tag);
    });
    const nArray: Array<string> = [];
    ntags.forEach((tag: any) => nArray.push(tag));
    nArray.length === tags.length ? '' : setTags(nArray);
  };
  const dispatch = useAppDispatch();
  const { setModal } = props;

  const handlePreviousAddress = (detail: any, setFieldValue: any) => {
    if (detail === 'Use a new address') {
      setShowLabel(true);
      setFieldValue('firstName', '');
      setFieldValue('lastName', '');
      setFieldValue('address', '');
      setFieldValue('addressOptional', '');
      setFieldValue('city', '');
      setFieldValue('postalCode', '');
      setFieldValue('contact', '');
    } else {
      setShowLabel(false);
      const selectedAddress = addresses.find((address) => {
        return address.tag === detail;
      });
      setFieldValue('firstName', selectedAddress?.firstName);
      setFieldValue('lastName', selectedAddress?.lastName);
      setFieldValue('address', selectedAddress?.addressLine1);
      setFieldValue('addressOptional', selectedAddress?.addressLine2);
      setFieldValue('city', selectedAddress?.state);
      setFieldValue('postalCode', selectedAddress?.postCode);
      setFieldValue('contact', selectedAddress?.phone);
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
  useEffect(() => {
    setTagsOptions();
  }, [tags]);

  return (
    <div className="">
      <Formik
        enableReinitialize={true}
        initialValues={update}
        onSubmit={(values, actions) => {
          const data = {
            email: user?.email,
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
          console.log(data);
          handleCheckoutSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={informationSchema}
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="mt-8">
                  <p className="text-lg">Shipping Address</p>

                  <div className="mt-5">
                    <div className="mb-3">
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        className="required peer block w-full appearance-none rounded border  border-gray-300 p-4 text-sm text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
                        onClick={(event: any) => {
                          setDropdownText(event.target.value);
                          handlePreviousAddress(
                            event.target.value,
                            formikprops.setFieldValue
                          );
                        }}
                      >
                        <option>{dropdownText}</option>
                        {tags
                          ? tags?.map((tag: string) => {
                              return (
                                <React.Fragment key={tag}>
                                  {tag !== dropdownText ? (
                                    <option>{`${tag}`}</option>
                                  ) : null}
                                </React.Fragment>
                              );
                            })
                          : null}
                        {dropdownText !== 'Use a new address' ? (
                          <option>Use a new address</option>
                        ) : null}
                      </Field>
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="country" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                        <FieldTemplate
                          label="First name"
                          fieldID="firstName"
                          fieldType="text"
                          placeholder=" "
                        />
                        <FieldTemplate
                          label="Last name"
                          fieldID="lastName"
                          fieldType="text"
                          placeholder=" "
                        />
                      </div>
                    </div>

                    <FieldTemplate
                      label="Mobile phone number"
                      fieldID="contact"
                      fieldType="text"
                      placeholder=" "
                    />
                    <FieldTemplate
                      label="Address 1"
                      fieldID="address"
                      fieldType="text"
                      placeholder=" "
                    />

                    <FieldTemplate
                      label="Address 2"
                      fieldID="addressOptional"
                      fieldType="text"
                      placeholder=" "
                    />
                    <FieldTemplate
                      label="City"
                      fieldID="city"
                      fieldType="text"
                      placeholder=" "
                    />
                  </div>
                </div>

                {showLabel ? (
                  <div>
                    <div className="">
                      <div className="mb-3">
                        <label htmlFor="tag" className="pb-8 text-sm">
                          Enter a label for effective delivery:
                        </label>
                        <div className="mt-2">
                          <FieldTemplate
                            fieldID="tag"
                            fieldType="text"
                            placeholder="E.g. Home, Office, Others etc."
                          />
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
