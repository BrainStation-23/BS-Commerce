import { Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { usernameSchema } from '@/modules/global/schemas/forgotPassword.schema';

import FormCancelButton from 'modules/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from 'modules/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from 'modules/account/forgetPassword/components/common/submitButton';

interface Props {
  handleUsernameFormSubmit: Function;
}

const UsernameForm: React.FC<Props> = ({ handleUsernameFormSubmit }) => {
  const { t } = useTranslation();

  return (
    <>
      <Formik
        initialValues={{
          username: '',
        }}
        onSubmit={(values, actions) => {
          handleUsernameFormSubmit(values.username);
          actions.setSubmitting(false);
        }}
        validationSchema={usernameSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="mb-4">
                <FieldTemplate
                  fieldType="text"
                  fieldID="username"
                  placeholder={t('forgot-password:username')}
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

export default UsernameForm;
