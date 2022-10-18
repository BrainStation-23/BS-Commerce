import { Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { otpSchema } from '@/modules/account/schemas/forgotPassword.schema';

import FormCancelButton from '@/modules/account/forgetPassword/common/cancelButton';
import FieldTemplate from '@/modules/account/forgetPassword/common/fieldTemplate';
import FormSubmitButton from '@/modules/account/forgetPassword/common/submitButton';
import { useAppSelector } from 'store/hooks/index';

interface Props {
  setSubmitButtonState: Function;
  handleOtpFormSubmit: Function;
}

const OtpForm: React.FC<Props> = ({
  setSubmitButtonState,
  handleOtpFormSubmit,
}) => {
  const { t } = useTranslation();

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
                  placeholder={t('register:otp')}
                />
              </div>
              <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                <FormSubmitButton />

                <FormCancelButton />
              </div>
              <div className="text-gray-500">
                {t('forgot-password:otp_not_received')}{' '}
                <button
                  onClick={() => {
                    setSubmitButtonState('username');
                  }}
                  className="hover:text-primary"
                >
                  {t('forgot-password:try_again')}
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
