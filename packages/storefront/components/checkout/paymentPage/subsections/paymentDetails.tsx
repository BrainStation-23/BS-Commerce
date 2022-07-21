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
import FieldTemplate from '../../fieldTemplate';

interface FormData {
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  securityCode: string;
  shippingAddressPicked: string;
  firstName: string;
  lastName: string;
  address: string;
  addressOptional: string;
  city: string;
  postalCode: string;
}

const PaymentDetails: NextComponentType = () => {
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
  const [showLabel, setShowLabel] = useState(false);

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
    address: '',
    addressOptional: '',
    city: '',
    postalCode: '',
  };

  const [showShippingForm, setShowShippingForm] = useState(false);
  const [dropdownText, setDropdownText] = useState('Use a new address');
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

  const addresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const handlePaymentSubmit = (data: FormData) => {
    {
      data ? dispatch(addToBillingInfo(data)) : null;
    }
    const obj = {
      shippingCost: 0,
      billingAddress: {
        firstName: data.firstName || shippingInfo?.firstName!,
        lastName: data.lastName || shippingInfo?.lastName!,
        email: shippingInfo?.email!,
        addressLine1: data.address || shippingInfo?.address!,
        addressLine2: data.addressOptional || shippingInfo?.addressOptional!,
        city: data.city || shippingInfo?.city!,
        postCode: data.postalCode || shippingInfo?.postalCode!,
        phoneNumber: shippingInfo?.contact!,
      },
      shippingAddress: {
        firstName: shippingInfo?.firstName,
        lastName: shippingInfo?.lastName,
        email: shippingInfo?.email,
        addressLine1: shippingInfo?.address,
        addressLine2: shippingInfo?.addressOptional,
        city: shippingInfo?.city,
        postCode: shippingInfo?.postalCode,
        phoneNumber: shippingInfo?.contact,
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
    userAPI.checkout(obj).then((response: any) => {
      toast.success('Order created successfully!');
      router.push('/submit');
      dispatch(deleteCart());
      dispatch(deleteCheckoutInfo());
    });
  };

  const handlePreviousAddress = (event: any) => {
    setDropdownText(event.target.value);
    const detail = event.target.value;
    if (detail === 'Use a new address') {
      setShowLabel(true);
      setUpdate({
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
      const selectedAddress = addresses.find((address) => {
        return address.tag === detail;
      });
      initialValues = {
        firstName: selectedAddress?.firstName,
        lastName: selectedAddress?.lastName,
        country: '',
        address: selectedAddress?.addressLine1,
        addressOptional: selectedAddress?.addressLine2,
        city: selectedAddress?.state,
        postalCode: selectedAddress?.postCode,
        contact: selectedAddress?.phone,
      };
      setUpdate(initialValues);
    }
  };
  const handleSameAddress = () => {
    setShowShippingForm(false);
  };
  useEffect(() => {
    setTagsOptions();
  }, [tags]);
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
                    <FieldTemplate
                      label="Card Number"
                      isRequired={true}
                      fieldID="cardNumber"
                      fieldType="text"
                      fieldClass="peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
                    />
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
                                onClick={handlePreviousAddress}
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
                      </>
                    ) : null}
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
