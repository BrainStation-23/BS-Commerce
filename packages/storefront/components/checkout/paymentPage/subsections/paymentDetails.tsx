import CreditCard from "@/components/global/icons-for-checkout-page/credit-card";
import { Field, Form, Formik } from "formik";

const PaymentDetails = () => {
  const initialValues = {};

  const handlePaymentSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <p className="text-lg mt-5">Payment</p>
      <p className="text-sm text-gray-500">
        All transactions are secure and encrypted.
      </p>
      <div className="border border-gray-300 rounded mt-5 divide-y-1">
        <div className="flex flex-wrap justify-between items-center p-4">
          <p className="text-sm font-semibold">Credit card</p>
          <CreditCard />
        </div>
        <div className="bg-gray-100">
          <Formik
            initialValues={initialValues}
            onSubmit={(values: any, actions: any) => {
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
              handlePaymentSubmit(data);
              actions.setSubmitting(false);
            }}
          >
            {(formikprops: any) => {
              return (
                <>
                  <Form onSubmit={formikprops.handleSubmit}>
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
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
