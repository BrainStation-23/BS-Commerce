import React from 'react';
import { resetPasswordSchema } from '../schemas/forgot-password.schema'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ForgotPassword = (props: any) => {
	const handleForgotPassword = (values: any) => {
		console.log(values);
	};

	return (
		<div className="d-flex flex-wrap justify-content-center mt-5">
        <div className="card m-5" style={{ width: " 25rem ", height: "auto" }}>
          <div className="card-body">
            <h5 className="d-flex flex-wrap justify-content-center">Reset Password</h5>
					<Formik
						initialValues={{
							newPassword: '',
                            confirmPassword: ''
						}}
						onSubmit={(values, actions) => {
							handleForgotPassword(values);
							actions.setSubmitting(false);
						}}
						validationSchema={resetPasswordSchema}
					>
						{(formikProps) => {
							return (
								<Form onSubmit={formikProps.handleSubmit}>
									<div className="form-group mb-3">
										<label htmlFor="password" className="form-label">
											New Password
										</label>
										<Field
											type="password"
											className="form-control"
											id="password"
											name="password"
										/>
										<div className="invalid-feedback d-block">
											<ErrorMessage name="newPassword" />
										</div>
									</div>

                                    <div className="form-group mb-3">
										<label htmlFor="password" className="form-label">
											Confirm Password
										</label>
										<Field
											type="password"
											className="form-control"
											id="password"
											name="password"
										/>
										<div className="invalid-feedback d-block">
											<ErrorMessage name="confirmPassword" />
										</div>
									</div>

									<button type="submit" className="btn btn-outline-dark">
										Submit
									</button>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;