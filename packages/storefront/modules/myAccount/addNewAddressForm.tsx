import { FC } from 'react';
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';

import { userAPI } from 'APIs';
import { Customer, CustomerAddress } from '@bs-commerce/models';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { storeCustomerDetails } from 'store/slices/userSlice';
import { storeAddresses } from 'store/slices/customerAddressSlice';
interface props {
  user?: CustomerAddress;
  cancelForm: Function;
  id?: string;
}
const AddNewAddressForm: FC<props> = ({ user, cancelForm, id }: props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const handleAddressSubmit = async (
    data: CustomerAddress,
    id: string,
    resetForm: Function
  ) => {
    try {
      if (!id) {
        await userAPI.addCustomerNewAddress(data);
        resetForm();
      } else {
        await userAPI.updateCustomerAddress(id, data);
      }
      cancelForm('');
      const updatedCustomer = await userAPI.getCustomerProfile(token);
      dispatch(storeAddresses(updatedCustomer?.data?.addresses!));
      dispatch(storeCustomerDetails(updatedCustomer?.data!));
    } catch (error) {
      toast.error(`Error occurred!!`, {
        containerId: 'bottom-right',
      });
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center md:items-start md:justify-start">
        <Formik
          initialValues={{
            firstName: user?.firstName ? user.firstName : '',
            lastName: user?.lastName ? user.lastName : '',
            addressLine1: user?.addressLine1 ? user.addressLine1 : '',
            addressLine2: user?.addressLine2 ? user.addressLine2 : '',
            state: user?.state ? user.state : '',
            postCode: user?.postCode ? user.postCode : '',
            phone: user?.phone ? user.phone : '',
            tag: user?.tag ? user.tag : '',
          }}
          onSubmit={(values, { resetForm }) => {
            const data = {
              firstName: values.firstName,
              lastName: values.lastName,
              addressLine1: values.addressLine1,
              addressLine2: values.addressLine2,
              state: values.state,
              postCode: values.postCode,
              phone: values.phone,
              tag: values.tag,
            };
            handleAddressSubmit(data, id!, resetForm);
            // actions.setSubmitting(true);
          }}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="mb-3">
                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="text-sm">
                        {t('manage-address:firstname')}
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm">
                        {t('manage-address:lastname')}
                      </label>
                      <br />
                      <Field
                        type="text"
                        className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="addressLine1" className="text-sm">
                      {t('manage-address:address1')}
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                      id="addressLine1"
                      name="addressLine1"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="grid-cols-1">
                    <label htmlFor="addressLine2" className="text-sm">
                      {t('manage-address:address2')}
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                      id="addressLine2"
                      name="addressLine2"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="state" className="text-sm">
                    {t('manage-address:city')}
                  </label>
                  <br />
                  <Field
                    type="text"
                    className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                    id="state"
                    name="state"
                  />
                </div>

                <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="mb-3">
                    <label htmlFor="postCode" className="text-sm">
                      {t('manage-address:postcode')}
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                      id="postCode"
                      name="postCode"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="text-sm">
                      {t('manage-address:phone')}
                    </label>
                    <br />
                    <Field
                      type="text"
                      className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="text-sm">
                    {t('manage-address:tag')}
                  </label>
                  <br />
                  <Field
                    type="text"
                    className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale dark:text-dark_text dark:focus:bg-gray-700"
                    id="tag"
                    name="tag"
                    placeholder={t('manage-address:example')}
                  />
                </div>

                {/* <p className="mb-2">Select a label for effective delivery:</p>
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
                </div> */}

                <button
                  type="submit"
                  className="my-2 w-full rounded bg-primary py-2 text-white hover:bg-black dark:bg-dark_primary dark:hover:border sm:w-full md:w-32 lg:w-32 xl:w-32"
                >
                  {user?.firstName
                    ? `${t('manage-address:save_address')}`
                    : `${t('manage-address:add_address')}`}
                </button>
                <br />
              </Form>
            );
          }}
        </Formik>
      </div>
      <button type="button" onClick={() => cancelForm('')}>
        {t('common:cancel')}
      </button>
    </>
  );
};

export default AddNewAddressForm;
