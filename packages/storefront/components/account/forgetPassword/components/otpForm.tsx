import { ErrorMessage, Field, Form, Formik } from 'formik';
import { otpSchema } from '@/components/global/schemas/forgot-password.schema';

import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from '@/components/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';

interface Props {
  setSubmitButtonState: Function;
}

const OtpForm: React.FC<Props> = ({ setSubmitButtonState }) => {
  return (
    <>
      <Formik
        initialValues={{
          otp: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setSubmitButtonState('newPassword');
          actions.setSubmitting(false);
        }}
        validationSchema={otpSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="mb-4">
                <FieldTemplate
                  fieldType="text"
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
                  className="hover:text-[#40a944]"
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
