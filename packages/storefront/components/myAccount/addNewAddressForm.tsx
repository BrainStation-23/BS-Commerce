import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NextComponentType } from 'next';
import Link from 'next/link';

const AddNewAddressForm: NextComponentType = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
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
            phone: ''
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <Field
                    type="text"
                    className="appearance-none border py-2 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
                    id="firstName"
                    name="firstName"
                  />
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
