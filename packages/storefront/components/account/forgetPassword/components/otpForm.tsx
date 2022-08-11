import { ErrorMessage, Field, Form, Formik } from 'formik';
import { otpSchema } from '@/components/global/schemas/forgot-password.schema';

import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from '@/components/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';

interface Props {
  stateSubmitButtonState: Function;
}

const OtpForm: React.FC<Props> = ({ stateSubmitButtonState }) => {
  return (
    <>
      <Formik
        initialValues={{
          otp: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          stateSubmitButtonState('newPassword');
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
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default OtpForm;
