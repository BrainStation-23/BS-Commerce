import Link from 'next/link';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { addToShippingInfo } from 'toolkit/checkoutSlice';
import { informationSchema } from '@/components/global/schemas/checkout.schema';

import ChevronLeft from '@/components/global/icons-for-checkout-page/chevron-left';

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
  saveInformationCheckbox: string;
}

const Information = (props: any) => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const dispatch = useAppDispatch();
  const { setModal } = props;
  const initialValues = {
    email: shippingInfo?.email,
    contact: shippingInfo?.contact,
    firstName: shippingInfo?.firstName,
    lastName: shippingInfo?.lastName,
    country: shippingInfo?.country,
    address: shippingInfo?.address,
    addressOptional: shippingInfo?.addressOptional,
    city: shippingInfo?.city,
    postalCode: shippingInfo?.postalCode,
    saveInformationCheckbox: '',
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
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const data = {
            email: values.email,
            contact: values.contact,
            country: values.country,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            addressOptional: values.addressOptional,
            city: values.city,
            postalCode: values.postalCode,
            saveInformationCheckbox: values.saveInformationCheckbox,
          };
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

                  <div className="flex flex-wrap gap-1 text-sm">
                    <p className="text-gray-500">Already have an account?</p>
                    <Link href="/account/sign-in" passHref>
                      <a className="text-decoration-none">Log in</a>
                    </Link>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-3">
                    <div className="relative">
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className={`required peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                        placeholder=" "
                      />
                      <label
                        htmlFor={`email`}
                        className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
                      >
                        Email
                      </label>
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="email" />
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
                </div>

                <div className="mt-8">
                  <p className="text-lg">Shipping Address</p>

                  <div className="mt-5">
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

                <p className="mb-2">Select a label for effective delivery:</p>

                <div className="flex flex-wrap items-center gap-x-3">
                  <div className="mb-3">
                    <div className="relative">
                      <Field
                        type="radio"
                        id="tag"
                        name="tag"
                        className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                        placeholder=" "
                        value="home"
                        required
                      />
                      <label
                        htmlFor="tag"
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
                        id="tag"
                        name="tag"
                        className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                        placeholder=" "
                        value="office"
                      />
                      <label
                        htmlFor="tag"
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
                        id="tag"
                        name="tag"
                        className={`focus:ring-3 h-3 w-3 rounded border-2 border-black hover:cursor-pointer hover:border-gray-300 focus:ring-black`}
                        placeholder=" "
                        value="others"
                      />
                      <label
                        htmlFor="tag"
                        className="ml-2 text-sm hover:cursor-pointer"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </div>

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
