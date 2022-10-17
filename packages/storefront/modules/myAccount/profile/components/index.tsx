import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Field, Form, Formik } from 'formik';

import { UpdateCustomerRequestBody } from '@bs-commerce/models';

import { userAPI } from 'APIs';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { storeUserToken } from 'store/slices/authSlice';
import { resetUserDetails, storeCustomerDetails } from 'store/slices/userSlice';
import { resetAddress } from 'store/slices/customerAddressSlice';
import { resetWishilist } from 'store/slices/productsSlice';
import { resetCart } from 'store/slices/cartSlice';
import useTranslation from 'next-translate/useTranslation';

import { CustomerSchema } from '../../schemas/customer.schema';

import Breadcrumb from '@/modules/global/breadcrumbs/breadcrumb';
import ProfileForm from '@/modules/myAccount/profile/components/profileForm';
import SingleDetail from '@/modules/myAccount/profile/components/singleDetail';
import withAuth from '@/modules/auth/withAuth';

const Profile: React.FC = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const userData = {
    email: customer.email === undefined ? '' : customer.email,
    name: customer.name === undefined ? '' : customer.name,
    // firstName: customer.firstName === undefined ? '' : customer.firstName,
    // lastName: customer.lastName === undefined ? '' : customer.lastName,
    phone: customer.phone === undefined ? '' : customer.phone,

    isPhoneVerified: false,
    isEmailVerified: true,
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    dispatch(resetAddress());
    dispatch(resetUserDetails());
    dispatch(resetWishilist());
    dispatch(resetCart());
    router.push('/account/sign-in');
    toast.error('Logged out successfully!', {
      containerId: 'bottom-right',
    });
  };

  const handleSubmit = async (values: UpdateCustomerRequestBody) => {
    // const firstName = values.firstName === '' ? null : values.firstName;
    // const lastName = values.lastName === '' ? null : values.lastName;
    // const phone = values.phone === '' ? null : values.phone;
    // const email = values.email === '' ? null : values.email;

    let data;
    if (userData.email !== '' && userData.phone !== '') {
      data = {
        name: values.name,
      };
    } else if (userData.email === '') {
      data = {
        name: values.name,
        email: values.email,
      };
    } else {
      data = {
        name: values.name,
        phone: values.phone,
      };
    }

    const response = await userAPI.updateCustomer(data);
    dispatch(storeCustomerDetails(response!.data));
    setEditable(false);
  };
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        title={t('common:account')}
        pathArray={[`${t('common:home')}`, `${t('common:account')}`]}
        linkArray={['/', '/myAccount']}
      />
      <div className="container mx-auto my-24 px-5 text-gray-800 dark:text-dark_text">
        <div className="border-b-2">
          <span className="text-3xl font-bold">
            {t('myAccount:my_account')}
          </span>
          <Link href="/" passHref>
            <span className="float-right text-xl font-bold">
              <a
                onClick={() => handleLogout()}
                className="cursor-pointer transition-all duration-100 ease-linear hover:text-primary dark:hover:text-dark_primary"
              >
                {t('common:logout')}
              </a>
            </span>
          </Link>
        </div>

        <Formik
          initialValues={{
            name: userData.name,
            //firstName: userData.firstName,
            //lastName: userData.lastName,
            phone: userData.phone,
            email: userData.email,
          }}
          validationSchema={CustomerSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {(formikProps) => {
            return (
              <Form onSubmit={formikProps.handleSubmit} className="">
                <fieldset disabled={!editable}>
                  <div className="mx-auto mt-3 flex flex-wrap">
                    <div className="w-full md:w-1/2">
                      <div className="mt-2 flex items-center">
                        <div className="my-auto w-1/3">
                          <span className="text-2xl font-semibold">
                            {t('myAccount:account_details')}
                          </span>
                        </div>
                        <div className="w-2/3">
                          <span
                            className="ml-2 cursor-pointer rounded-md bg-primary px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900 dark:bg-dark_primary dark:hover:border"
                            hidden={editable}
                            onClick={() => setEditable(true)}
                          >
                            {t('myAccount:edit')}
                          </span>
                          <button
                            hidden={!editable}
                            type="submit"
                            className="ml-2 rounded-md bg-primary px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900 dark:bg-dark_primary dark:hover:border"
                          >
                            {t('myAccount:save')}
                          </button>
                          <span
                            hidden={!editable}
                            className="ml-2 cursor-pointer rounded-md bg-primary px-2 py-1 text-white transition-all duration-150 ease-linear hover:bg-stone-900 dark:bg-dark_primary dark:hover:border"
                            onClick={() => setEditable(false)}
                          >
                            {t('myAccount:cancel')}
                          </span>
                        </div>
                      </div>
                      {/* Account Form */}
                      <div className="mt-2 flex flex-col gap-y-2">
                        <SingleDetail
                          value={userData.name}
                          label={t('myAccount:name')}
                        />
                        {/* <SingleDetail
                          value={userData.firstName}
                          label="First name"
                        />
                        <SingleDetail
                          value={userData.lastName}
                          label="Last name"
                        /> */}
                        <SingleDetail
                          value={userData.phone}
                          label={t('myAccount:phone')}
                          verified={userData.isPhoneVerified}
                        />
                        <SingleDetail
                          value={userData.email}
                          label={t('myAccount:email')}
                          verified={userData.isEmailVerified}
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className={`${editable ? '' : 'hidden'}`}>
                  <hr className="m-5" />
                  <ProfileForm
                    isPhoneVerified={false}
                    isEmailVerified={true}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default withAuth(Profile);
