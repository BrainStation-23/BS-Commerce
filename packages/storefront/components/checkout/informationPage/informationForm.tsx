import ChevronLeft from "@/components/global/icons-for-checkout-page/chevron-left";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";

interface FormData {
  contact: string
    sendNotificationCheckbox: string
    firstName: string
    lastName: string
    country: string
    address: string
    addressOptional: string
    city: string
    postalCode: string
    saveInformationCheckbox: string
}

const Information = (props: any) => {
  const { setModal } = props;
  const initialValues = {
    contact: "",
    sendNotificationCheckbox: "",
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    addressOptional: "",
    city: "",
    postalCode: "",
    saveInformationCheckbox: "",
  };

  const router = useRouter();

  const handleCheckoutSubmit = (data: FormData) => {
    const obj = {
      info: false,
      ship: true,
      pay: false,
    }
    setModal(obj);
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const data = {
            contact: values.contact,
            sendNotificationCheckbox: values.sendNotificationCheckbox,
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
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="flex flex-wrap justify-between">
                  <p className="text-lg">Contact Information</p>

                  <div className="flex flex-wrap text-sm gap-1">
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
                        id="contact"
                        name="contact"
                        className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                        placeholder=" "
                      />
                      <label
                        htmlFor={`contact`}
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Email or mobile phone number
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="relative">
                      <Field
                        type="checkbox"
                        id="sendNotificationCheckbox"
                        name="sendNotificationCheckbox"
                        className={`accent-black  w-4 h-4 border-2 border-black rounded focus:ring-3 focus:ring-blackhover:border-gray-300`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="sendNotificationCheckbox"
                        className="ml-2 text-sm text-gray-500"
                      >
                        Email me with news and offers
                      </label>
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
                            className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                            placeholder=" "
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
                            className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                            placeholder=" "
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
                            className={`required block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
                            placeholder=" "
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
                </div>

                <div className="mb-3">
                  <div className="relative">
                    <Field
                      type="checkbox"
                      id="saveInformationCheckbox"
                      name="saveInformationCheckbox"
                      className={`accent-black w-4 h-4 border-2 border-black rounded focus:ring-3 focus:ring-blackhover:border-gray-300`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="saveInformationCheckbox"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Save this information for next time
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-5">
                  <button
                    type="submit"
                    className="rounded text-sm p-5 my-2 w-full sm:w-full md:w-44 lg:w-44 xl:w-44 bg-black text-white"
                  >
                    Continue to shipping
                  </button>
                  <div className="flex flex-wrap items-center">
                    <div className="items-center block sm:block sm:items-center md:hidden lg:hidden xl:hidden">
                    <Link href="/cart" passHref>
                      <a className="text-decoration-none">{<ChevronLeft />}</a>
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
