import { resetPasswordSchema } from '../schemas/forgot-password.schema'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { loginSchema } from '../schemas/loginSchema';

const ForgotPassword = (props: any) => {
	const handleForgotPassword = (values: any) => {
		console.log(values);
	};

	return (
		<div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="card m-5" style={{ width: " 35rem ", height: "auto", background: "#f3f3f3" }}>
          <div className="card-body">
          <h3 className="d-flex flex-wrap justify-content-center m-3">Reset Your Password</h3>
          <p className="d-flex flex-wrap justify-content-center mb-4 text-secondary">
		  We will send you an email to reset your password.
          </p>
          <div className="m-3">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                const data = {
                  email: values.email,
                };
                handleForgotPassword(data);
                actions.setSubmitting(false);
              }}
              validationSchema={loginSchema}
            >
              {(formikprops) => {
                return (
                  <Form onSubmit={formikprops.handleSubmit}>
                    <div className="form-group m-3">
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <div className="invalid-feedback d-block">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between">
                      <button
                        type="submit"
                        className="btn text-white my-3 mx-3 px-4"
                        style={{ background: "#40a944" }}
                      >
                        Submit
                      </button>
                      <div className="mx-3 my-3 text-decoration-none">
                        <Link href="/sign-in">
                          <a className="text-decoration-none text-black font-weight-light">
                            Cancel
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
	);
};

export default ForgotPassword;