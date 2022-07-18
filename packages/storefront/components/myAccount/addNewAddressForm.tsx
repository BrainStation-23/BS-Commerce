import { userAPI } from 'APIs';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CustomerAddress } from 'models';
import { NextComponentType } from 'next';
import { FC } from 'react';
interface props {
  user: any;
  cancelForm: any;
  id: string;
}
const AddNewAddressForm: FC = ({ user, cancelForm, id }: any) => {
  const handleAddressSubmit = async (data: CustomerAddress, id: string) => {
    console.log(data);
    await userAPI.updateCustomerAddress(id, data);
  };

  return (
    <>
      <>
        <div className="flex flex-wrap items-center justify-center md:items-start md:justify-start">
          <Formik
            initialValues={{
              firstName: user?.firstName ? user.firstName : '',
              lastName: user?.lastName ? user.lastName : '',
              address1: user?.address1 ? user.address1 : '',
              address2: user?.address2 ? user.address2 : '',
              city: user?.city ? user.city : '',
              postalCode: user?.postalCode ? user.postalCode : '',
              phone: user?.phone ? user.phone : '',
              tag: user?.tag ? user.tag : '',
            }}
            onSubmit={(values, actions) => {
              handleAddressSubmit(values, id);
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

                  <div className="mb-3">
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

                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="mb-3">
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
                    <div className="mb-3">
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

                  <p className="mb-2">Select a label for effective delivery:</p>

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

                  <button
                    type="submit"
                    className="my-2 w-full rounded bg-green-600/100 py-2 text-white hover:bg-black sm:w-full md:w-32 lg:w-32 xl:w-32"
                  >
                    {user?.firstName ? 'Edit ' : 'Add '} Address
                  </button>
                  <br />
                </Form>
              );
            }}
          </Formik>
        </div>
        <button type="button" onClick={() => cancelForm('')}>
          Cancel
        </button>
      </>
    </>
  );
};

export default AddNewAddressForm;
