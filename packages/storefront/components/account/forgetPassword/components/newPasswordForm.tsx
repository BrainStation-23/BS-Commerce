import { ErrorMessage, Field, Form, Formik } from 'formik';
import { passwordSchema } from '@/components/global/schemas/forgot-password.schema';

import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';
import FieldTemplate from '@/components/account/forgetPassword/components/common/fieldTemplate';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';

const NewPasswordForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
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
                    placeholder="New password"
                    extraClass="mb-4"
                  />
                  <FieldTemplate
                    fieldType="password"
                    fieldID="confirmPassword"
                    placeholder="Retype new password"
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
