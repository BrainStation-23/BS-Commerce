import { ErrorMessage, Field, Form, Formik } from 'formik';
import { usernameSchema } from '@/components/global/schemas/forgot-password.schema';

import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from '@/components/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';
import { userAPI } from 'APIs';

interface Props {
  handleUsernameFormSubmit: Function;
}

const UsernameForm: React.FC<Props> = ({ handleUsernameFormSubmit }) => {
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
                  placeholder="Email or phone number"
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
