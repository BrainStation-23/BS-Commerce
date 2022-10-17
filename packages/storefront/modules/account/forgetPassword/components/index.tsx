import { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import {
  CustomerForgotPasswordRequest,
  VerifyOtpRequest,
} from '@bs-commerce/models';
import { useState } from 'react';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'store/hooks/index';
import { storeOtp, storeUsername } from 'store/slices/forgetPasswordSlice';
import { useRouter } from 'next/router';

import Breadcrumb from '@/modules/global/breadcrumbs/breadcrumb';
import WithoutAuth from '@/modules/auth/withoutAuth';
import UsernameForm from '@/modules/account/forgetPassword/components/usernameForm';
import OtpForm from '@/modules/account/forgetPassword/components/otpForm';
import NewPasswordForm from '@/modules/account/forgetPassword/components/newPasswordForm';

const ForgotPassword: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  const [submitButtonState, setSubmitButtonState] =
    useState<string>('username');

  const handleUsernameFormSubmit = async (username: string) => {
    try {
      const res = await userAPI.forgetPasswordSendOtp(username);
      if (res?.code === 200) {
        const resStringArray = res?.data?.message?.split(' ');
        const otp = parseInt(resStringArray![resStringArray?.length! - 1]);

        dispatch(storeUsername(username));
        dispatch(storeOtp(otp));

        setSubmitButtonState('otp');
      }
    } catch (error) {}
  };

  const handleOtpFormSubmit = async (data: VerifyOtpRequest) => {
    try {
      const res = await userAPI.forgetPasswordVerifyOtp(data);
      if (res?.code === 200) {
        setSubmitButtonState('newPassword');
      }
    } catch (error) {}
  };

  const handleNewPasswordFormSubmit = async (
    data: CustomerForgotPasswordRequest
  ) => {
    try {
      const res = await userAPI.resetPassword(data);
      if (res?.code !== 200) {
        setSubmitButtonState('username');
      } else {
        router.push('/account/sign-in');
      }
    } catch (error) {}
  };

  return (
    <>
      <Breadcrumb
        title={t('common:account')}
        pathArray={[
          `${t('common:home')}`,
          `${t('forgot-password:forgot_password')}`,
        ]}
        linkArray={['/', '/account/forgot-password']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="my-20 mx-3 flex flex-col py-7"
          style={{ width: ' 35rem ', height: 'auto', background: '#f3f3f3' }}
        >
          <h2 className="mx-3 text-center text-3xl text-gray-800">
            {t('forgot-password:reset_password')}
          </h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            {submitButtonState === 'username' && t('forgot-password:send_code')}

            {submitButtonState === 'otp' && t('forgot-password:code_sent')}

            {submitButtonState === 'newPassword' &&
              t('forgot-password:submit_new_password')}
          </p>
          <div className="m-5 my-3 sm:m-5 md:mx-10 lg:mx-10 xl:mx-10">
            {submitButtonState === 'username' && (
              <UsernameForm
                handleUsernameFormSubmit={handleUsernameFormSubmit}
              />
            )}

            {submitButtonState === 'otp' && (
              <OtpForm
                setSubmitButtonState={setSubmitButtonState}
                handleOtpFormSubmit={handleOtpFormSubmit}
              />
            )}

            {submitButtonState === 'newPassword' && (
              <NewPasswordForm
                handleNewPasswordFormSubmit={handleNewPasswordFormSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WithoutAuth(ForgotPassword);
