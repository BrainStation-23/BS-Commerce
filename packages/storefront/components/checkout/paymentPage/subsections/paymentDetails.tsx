import ChevronLeft from "@/components/global/icons-for-checkout-page/chevron-left";
import CreditCard from "@/components/global/icons-for-checkout-page/credit-card";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";

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

const PaymentDetails = (props: any) => {
  const { setModal } = props;
  const initialValues = {
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    securityCode: "",
    shippingAddressPicked: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    addressOptional: "",
    city: "",
    postalCode: "",
  };

  const [showShippingForm, setShowShippingForm] = useState(false);

  const handlePaymentSubmit = (data: FormData) => {
  };

  return (
    <>
      <p className="text-lg mt-5">Payment</p>
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
          //console.log(data)
          handlePaymentSubmit(data);
          actions.setSubmitting(false);
        }}
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                {/* credit card info div */}
                <div className="border border-gray-300 rounded mt-5">
                  <div className="flex flex-wrap justify-between items-center p-4 border-b-1">
                    <p className="text-sm font-semibold">Credit card</p>
                    <CreditCard />
                  </div>
                  <div className="bg-gray-100">
                    <div className="p-4">
                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="number"
                            id="cardNumber"
                            name="cardNumber"
                            className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`cardNumber`}
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                          >
                            Card Number
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="relative">
                          <Field
                            type="text"
                            id="nameOnCard"
                            name="nameOnCard"
                            className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`nameOnCard`}
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                          >
                            Name on card
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 sm:gap-0 md:gap-4 lg:gap-4 xl:gap-4">
                          <div className="relative">
                            <Field
                              type="month"
                              id="expirationDate"
                              name="expirationDate"
                              className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor={`expirationDate`}
                              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                              Expiration Date (MM / YY)
                            </label>
                          </div>

                          <div className="relative">
                            <Field
                              type="text"
                              id="securityCode"
                              name="securityCode"
                              className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor={`securityCode`}
                              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                              Security Code
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* billing div */}
                <div>
                  <p className="text-lg mt-5">Billing address</p>
                  <p className="text-sm text-gray-500">
                    Select the address that matches your card or payment method.
                  </p>
                  <div className="border border-gray-300 rounded mt-5 py-4">
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="items-center font-semibold text-sm"
                    >
                      <label>
                        <Field
                          type="radio"
                          name="shippingAddressPicked"
                          value="sameShippingAddress"
                          className="mb-4 mx-4 checked:accent-black"
                          onClick={() => {
                            setShowShippingForm(false);
                            console.log(showShippingForm);
                          }}
                        />
                        Same as shipping address
                      </label>
                      <hr />
                      <label>
                        <Field
                          type="radio"
                          name="shippingAddressPicked"
                          value="differentShippingAddress"
                          className="mt-4 mx-4 checked:accent-black"
                          onClick={() => {
                            setShowShippingForm(true);
                            console.log(showShippingForm);
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
                              required
                              className="required block rounded p-4 w-full text-sm text-gray-500  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer"
                            >
                              <option>Click here to select your country</option>
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </Field>
                          </div>

                          <div className="row">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 sm:gap-0 md:gap-4 lg:gap-4 xl:gap-4">
                              <div className="relative">
                                <Field
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                  placeholder=" "
                                />
                                <label
                                  htmlFor={`firstName`}
                                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  First name (optional)
                                </label>
                              </div>

                              <div className="relative">
                                <Field
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  className={`block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor={`lastName`}
                                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="relative">
                              <Field
                                type="text"
                                id="address"
                                name="address"
                                className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor={`address`}
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                              >
                                Address
                              </label>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="relative">
                              <Field
                                type="text"
                                id="addressOptional"
                                name="addressOptional"
                                className={`block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                placeholder=" "
                              />
                              <label
                                htmlFor={`addressOptional`}
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                              >
                                Apartment, suit, etc. (optional)
                              </label>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 sm:gap-0 md:gap-4 lg:gap-4 xl:gap-4">
                              <div className="relative">
                                <Field
                                  type="text"
                                  id="city"
                                  name="city"
                                  className={`required block rounded px-4 pb-2.5 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor={`city`}
                                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  City
                                </label>
                              </div>

                              <div className="relative">
                                <Field
                                  type="text"
                                  id="postalCode"
                                  name="postalCode"
                                  className={`required block rounded px-4 pb-2.5 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor={`postalCode`}
                                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Postal Code
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-5 mb-10 flex flex-wrap items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-5">
                  <button
                    type="submit"
                    className="rounded text-sm p-5 w-full sm:w-full md:w-24 lg:w-24 xl:w-24 bg-black text-white"
                  >
                    Pay now
                  </button>
                  <div className="flex flex-wrap items-center">
                    <div className="items-center block sm:block sm:items-center md:hidden lg:hidden xl:hidden">
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
