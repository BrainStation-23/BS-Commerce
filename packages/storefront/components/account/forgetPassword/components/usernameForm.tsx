import { Form, Formik } from 'formik';
import { usernameSchema } from '@/components/global/schemas/forgot-password.schema';

import { Input } from 'atomic-components';
import UserIcon from '@/components/account/icons/user';
import FormSubmitButton from '@/components/account/forgetPassword/components/common/submitButton';
import FormCancelButton from '@/components/account/forgetPassword/components/common/cancelButton';

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
          const { errors, touched } = formikprops;
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="mb-4">
                <Input
                  errors={errors.username}
                  touched={touched.username}
                  type="text"
                  icon={<UserIcon />}
                  id="username"
                  required={true}
                  placeholder="Email or phone number"
                />
                {/* <FieldTemplate
                  fieldType="text"
                  fieldID="username"
                  placeholder="Email or phone number"
                /> */}
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
