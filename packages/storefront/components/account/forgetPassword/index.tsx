import { NextComponentType } from 'next';
import {
  CustomerForgotPasswordRequest,
  ForgotPasswordRequest,
  VerifyOtpRequest,
} from 'models';
import { useEffect, useState } from 'react';

import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import WithoutAuth from '@/components/auth/withoutAuth';
import UsernameForm from '@/components/account/forgetPassword/components/usernameForm';
import OtpForm from '@/components/account/forgetPassword/components/otpForm';
import NewPasswordForm from '@/components/account/forgetPassword/components/newPasswordForm';
import { userAPI } from 'APIs';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeOtp, storeUsername } from 'toolkit/forgetPasswordSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ForgotPassword: NextComponentType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpFormSubmit = async (data: VerifyOtpRequest) => {
    try {
      const res = await userAPI.forgetPasswordVerifyOtp(data);
      if (res?.code === 200) {
        setSubmitButtonState('newPassword');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewPasswordFormSubmit = async (
    data: CustomerForgotPasswordRequest
  ) => {
    console.log(data);
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
        title="Account"
        pathArray={['Home', 'Forgot Password']}
        linkArray={['/', '/account/forgot-password']}
      />
      <div className="flex flex-wrap justify-center">
        <div
          className="my-20 mx-3 flex flex-col py-7"
          style={{ width: ' 35rem ', height: 'auto', background: '#f3f3f3' }}
        >
          <h2 className="mx-3 text-center text-3xl text-gray-800">
            Reset Your Password
          </h2>
          <p className="mx-5 mt-2 mb-6 text-center text-gray-500">
            {submitButtonState === 'username' &&
              'We will send you a code to reset your password.'}

            {submitButtonState === 'otp' &&
              'An OTP has been sent to your email/phone.'}

            {submitButtonState === 'newPassword' && 'Submit a new password'}
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
