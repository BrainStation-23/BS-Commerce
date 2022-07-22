import Link from 'next/link';

import { useEffect, useState } from 'react';
import { NextComponentType } from 'next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';
import CreditCard from '@/components/global/icons-for-checkout-page/credit-card';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { addToBillingInfo, deleteCheckoutInfo } from 'toolkit/checkoutSlice';
import { useRouter } from 'next/router';
import { paymentSchema } from '@/components/global/schemas/checkout.schema';
import { userAPI } from 'APIs';
import { deleteCart } from 'toolkit/cartSlice';
import React from 'react';
import FieldTemplate from '@/components/checkout/fieldTemplate';
import { storeAddresses } from 'toolkit/customerAddressSlice';

interface FormData {
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  securityCode: string;
  shippingAddressPicked: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postCode: string;
}

const PaymentDetails: NextComponentType = () => {
  const [showLabel, setShowLabel] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [dropdownText, setDropdownText] = useState('Use a new address');
  const [tags, setTags] = useState<string[]>([]);

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  let usableCart: any = [];
  cartData.map((cartItem) => {
    const cart = {
      productId: cartItem?.productId,
      name: cartItem?.product?.info?.name,
      price: cartItem?.product?.info?.price,
      quantity: cartItem?.quantity,
      sku: cartItem?.product?.info?.sku,
      photos: cartItem?.product?.photos,
    };
    usableCart.push(cart);
  });

  const totalCartPrice = cartData?.reduce((total, data) => {
    return total + data?.product?.info?.price! * data.quantity;
  }, 0);

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
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postCode: '',
  };

  const [update, setUpdate] = useState(initialValues);

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

  const addresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const handlePaymentSubmit = (data: FormData) => {
    const shippingData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: shippingInfo.email,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      postCode: data.postCode,
      phoneNumber: shippingInfo.phoneNumber,
    };
    {
      data ? dispatch(addToBillingInfo(shippingData)) : null;
    }
    // console.log('Data=======', data);
    // console.log('Shipping=======', shippingInfo);

    const obj = {
      shippingCost: 0,
      billingAddress: {
        firstName: data.firstName || shippingInfo?.firstName,
        lastName: data.lastName || shippingInfo?.lastName,
        email: shippingInfo?.email,
        addressLine1: data.addressLine1 || shippingInfo?.addressLine1,
        addressLine2: data.addressLine2 || shippingInfo?.addressLine2,
        city: data.city || shippingInfo?.city,
        postCode: data.postCode || shippingInfo?.postCode,
        phoneNumber: shippingInfo?.phoneNumber,
      },
      shippingAddress: {
        firstName: shippingInfo?.firstName,
        lastName: shippingInfo?.lastName,
        email: shippingInfo?.email,
        addressLine1: shippingInfo?.addressLine1,
        addressLine2: shippingInfo?.addressLine2,
        city: shippingInfo?.city,
        postCode: shippingInfo?.postCode,
        phoneNumber: shippingInfo?.phoneNumber,
      },
      shippingMethod: 'test',
      paymentMethod: 'card',
      productCost: totalCartPrice,
      products: usableCart,
      totalCost: totalCartPrice,
      stripeToken: '',
      stripeCustomerId: '',
      stripeChargeId: '',
      paypalPaymentId: data.cardNumber || '',
      paypalRedirectUrl: '',
    };
    const res = userAPI.checkout(obj, router).then((response: any) => {
      console.log(response?.data?.orderId);
      if (response?.data?.orderId) {
        dispatch(deleteCart());
        dispatch(deleteCheckoutInfo());
      }
    });
  };

  const handlePreviousAddress = (detail: any, setFieldValue: any) => {
    //setDropdownText(event.target.value);
    if (detail === 'Use a new address') {
      setShowLabel(true);
      setFieldValue('firstName', '');
      setFieldValue('lastName', '');
      setFieldValue('addressLine1', '');
      setFieldValue('addressLine2', '');
      setFieldValue('city', '');
      setFieldValue('postCode', '');
      setFieldValue('phoneNumber', '');
    } else {
      setShowLabel(false);
      const selectedAddress = addresses.find((address) => {
        return address.tag === detail;
      });
      setFieldValue('firstName', selectedAddress?.firstName);
      setFieldValue('lastName', selectedAddress?.lastName);
      setFieldValue('addressLine1', selectedAddress?.addressLine1);
      setFieldValue('addressLine2', selectedAddress?.addressLine2);
      setFieldValue('city', selectedAddress?.state);
      setFieldValue('postCode', selectedAddress?.postCode);
      setFieldValue('phoneNumber', selectedAddress?.phone);
    }
  };
  const handleSameAddress = () => {
    setShowShippingForm(false);
  };
  // useEffect(() => {
  //   setTagsOptions();
  // }, [tags]);
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
            firstName: values.firstName,
            lastName: values.lastName,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            city: values.city,
            postCode: values.postCode,
            phoneNumber: shippingInfo.phoneNumber,
          };

          const addressData = {
            phone: values.phoneNumber,
            firstName: values.firstName,
            lastName: values.lastName,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            city: values.city,
            postCode: values.postCode,
            //tag: values.tag,
          };

          // if (values?.tag!) {
          //   userAPI.addCustomerNewAddress(addressData);
          //   userAPI.getCustomer(token).then((response) => {
          //     dispatch(storeAddresses(response?.data?.addresses));
          //   });
          // }

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
                      <FieldTemplate
                        label="Card Number"
                        fieldID="cardNumber"
                        fieldType="text"
                        placeholder=" "
                        extraClass="mb-3"
                      />
                      <FieldTemplate
                        label="Name on card"
                        fieldID="nameOnCard"
                        fieldType="text"
                        placeholder=" "
                        extraClass="mb-3"
                      />

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

                          <FieldTemplate
                            label="Security Code"
                            fieldID="securityCode"
                            fieldType="text"
                            placeholder=" "
                            extraClass="mb-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* billing div */}
                {/* <div>
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
                          required
                        />
                        Use a different billing address
                      </label>
                      {showShippingForm && <hr className="mt-4" />}
                    </div>
                    {showShippingForm === true ? (
                      <>
                        <div className="mt-8 px-4">
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
                                  label="First Name"
                                  fieldID="firstName"
                                  fieldType="text"
                                  placeholder=" "
                                  isRequired={true}
                                />

                                <FieldTemplate
                                  label="Last Name"
                                  fieldID="lastName"
                                  fieldType="text"
                                  placeholder=" "
                                  isRequired={true}
                                />
                              </div>
                            </div>

                            <FieldTemplate
                              label="Mobile phone number"
                              fieldID="phoneNumber"
                              fieldType="text"
                              placeholder=" "
                              isRequired={true}
                              extraClass="mb-3"
                            />

                            <FieldTemplate
                              label="Address 1"
                              fieldID="addressLine1"
                              fieldType="text"
                              placeholder=" "
                              isRequired={true}
                              extraClass="mb-3"
                            />

                            <FieldTemplate
                              label="Address 2"
                              fieldID="addressLine2"
                              fieldType="text"
                              placeholder=" "
                              isRequired={true}
                              extraClass="mb-3"
                            />

                            <div className="row mb-3">
                              <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                                <FieldTemplate
                                  label="City"
                                  fieldID="city"
                                  fieldType="text"
                                  placeholder=" "
                                  isRequired={true}
                                />

                                <FieldTemplate
                                  label="Postal Code"
                                  fieldID="postCode"
                                  fieldType="text"
                                  placeholder=" "
                                  isRequired={true}
                                />
                              </div>
                            </div>

                            {showLabel ? (
                              <div>
                                <div className="">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="tag"
                                      className="pb-8 text-sm"
                                    >
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
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div> */}
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
