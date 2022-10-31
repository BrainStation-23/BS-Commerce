import { Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { passwordSchema } from '@/modules/account/schemas/forgotPassword.schema';

import FormCancelButton from '@/modules/account/forgetPassword/common/cancelButton';
import FieldTemplate from '@/modules/account/forgetPassword/common/fieldTemplate';
import FormSubmitButton from '@/modules/account/forgetPassword/common/submitButton';
import { useAppSelector } from 'store/hooks/index';

interface Props {
  handleNewPasswordFormSubmit: Function;
}

const NewPasswordForm: React.FC<Props> = ({ handleNewPasswordFormSubmit }) => {
  const { t } = useTranslation();

  const otpDetail = useAppSelector(
    (state) => state.persistedReducer.forgetPassword
  );

  return (
    <>
      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: '',
        }}
        onSubmit={(values, actions) => {
          let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
          const isEmail = regex.test(otpDetail.username);
          let data;
          isEmail
            ? (data = {
                email: otpDetail.username,
                password: values.newPassword,
              })
            : (data = {
                phone: otpDetail.username,
                password: values.newPassword,
              });
          handleNewPasswordFormSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={passwordSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="mb-4">
                <>
                  <FieldTemplate
                    fieldType="password"
                    fieldID="newPassword"
                    placeholder={t('forgot-password:new_password')}
                    extraClass="mb-4"
                  />
                  <FieldTemplate
                    fieldType="password"
                    fieldID="confirmPassword"
                    placeholder={t('forgot-password:retype_new_password')}
                  />
                </>
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

export default NewPasswordForm;
