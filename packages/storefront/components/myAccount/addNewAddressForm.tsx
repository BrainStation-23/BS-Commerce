import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NextComponentType } from 'next';
import Link from 'next/link';

const AddNewAddressForm: NextComponentType = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            province: '',
            postalCode: '',
            phone: '',
            setAsDefaultAddressCheckbox: false,
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="mb-3">
                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="text-sm">
                        First Name
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm">
                        Last Name
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="company" className="text-sm">
                      Company
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="company"
                      name="company"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="address1" className="text-sm">
                      Address 1
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="address1"
                      name="address1"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="address2" className="text-sm">
                      Address 2
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="address2"
                      name="address2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className='mb-3'>
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="city"
                      name="city"
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="country" className="text-sm">
                      Country
                    </label>
                    <br />
                    <Field
                      as="select"
                      className="border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="country"
                      name="country"
                    >
                      <option>Click here to select country</option>
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </Field>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="province" className="text-sm">
                      Province
                    </label>
                    <br />
                    <Field
                      as="select"
                      className="w-full border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                      id="province"
                      name="province"
                    >
                      <option>Click here to select</option>
                      <option>Florida</option>
                      <option>Hawaii</option>
                      <option>Colorado</option>
                    </Field>
                  </div>
                </div>

                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className='mb-3'>
                      <label htmlFor="postalCode" className="text-sm">
                        Postal/Zip Code
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                        id="postalCode"
                        name="postalCode"
                      />
                    </div>
                    <div className='mb-3'> 
                      <label htmlFor="phone" className="text-sm">
                        Phone
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>

                <div className="mb-3">
                    <div className="relative">
                      <Field
                        type="checkbox"
                        id="setAsDefaultAddressCheckbox"
                        name="setAsDefaultAddressCheckbox"
                        className={`focus:ring-3 hover:cursor-pointer focus:ring-black hover:border-gray-300 h-3 w-3 rounded border-2 border-black`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="setAsDefaultAddressCheckbox"
                        className="ml-2 text-sm hover:cursor-pointer"
                      >
                        Set as default address
                      </label>
                    </div>
                  </div>

                <button
                  type="submit"
                  className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black sm:w-full md:w-32 lg:w-32 xl:w-32"
                >
                  Add Address
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default AddNewAddressForm;
