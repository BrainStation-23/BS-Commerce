import { Form, Formik } from 'formik';
import { otpSchema } from '@/components/global/schemas/forgot-password.schema';

import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from '@/components/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';
import { useAppSelector } from 'customHooks/hooks';

interface Props {
  setSubmitButtonState: Function;
  handleOtpFormSubmit: Function;
}

const OtpForm: React.FC<Props> = ({
  setSubmitButtonState,
  handleOtpFormSubmit,
}) => {
  const otpDetail = useAppSelector(
    (state) => state.persistedReducer.forgetPassword
  );

  return (
    <>
      <Formik
        initialValues={{
          otp: otpDetail.otp,
        }}
        onSubmit={(values, actions) => {
          let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
          const isEmail = regex.test(otpDetail.username);
          let data;
          isEmail
            ? (data = {
                email: otpDetail.username,
                otp: values.otp,
              })
            : (data = {
                phone: otpDetail.username,
                otp: values.otp,
              });
          handleOtpFormSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={otpSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="mb-4">
                <FieldTemplate
                  fieldType="number"
                  fieldID="otp"
                  placeholder="OTP"
                />
              </div>
              <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                <FormSubmitButton />

                <FormCancelButton />
              </div>
              <div className="text-gray-500">
                Did not receive the OTP?{' '}
                <button
                  onClick={() => {
                    setSubmitButtonState('username');
                  }}
                  className="hover:text-primary"
                >
                  Try Again.
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default OtpForm;
