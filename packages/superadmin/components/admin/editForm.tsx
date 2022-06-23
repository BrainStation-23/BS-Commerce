import React, { FC } from "react";
import { Formik, Form } from "formik";
import Accordion from "../global/accordion";
import InputField from "../global/inputField";
import { adminCreate } from "../../utils/types";
import { adminValidationSchema } from "../../utils/validationSchema";

interface Props {
  initData: adminCreate;
  saveBtnRef?: string;
  saveHandler: (values: adminCreate) => void;
  saveWithContinueBtnRef?: string;
  deleteBtnRef?: string;
  id: string;
  isPass: boolean;
}

const EditForm: FC<Props> = ({
  initData,
  saveBtnRef,
  saveHandler,
  saveWithContinueBtnRef,
  deleteBtnRef,
  isPass,
}) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        validationSchema={adminValidationSchema}
        onSubmit={(values, { resetForm }) => {
          saveHandler(values);
        }}
      >
        {({
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          setFieldValue,
          isValid,
        }) => (
          <>
            <Form className="row">
              <div className="col-lg-12 mb-2">
                <Accordion title="Customer info" id={1} icon="bi bi-info-lg">
                  <div className="col-lg-12">
                    <InputField
                      value={values?.firstName}
                      label="First name"
                      placeholder="First name"
                      required
                      type="text"
                      name="firstName"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-lg-12">
                    <InputField
                      value={values?.lastName}
                      label="Last name"
                      placeholder="Last name"
                      required
                      type="text"
                      name="lastName"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-lg-12">
                    <InputField
                      value={values?.email}
                      label="Email"
                      placeholder="Email"
                      required
                      type="text"
                      name="email"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-lg-12">
                    <InputField
                      value={values?.password}
                      label={"Password"}
                      placeholder={"Password"}
                      required
                      type="password"
                      name="password"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </Accordion>
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={saveBtnRef}
                onSubmit={() => handleSubmit()}
              ></button>

              <button
                type="button"
                style={{ display: "none" }}
                ref={saveWithContinueBtnRef}
                onSubmit={() => {}}
              ></button>
              <button
                type="button"
                style={{ display: "none" }}
                ref={deleteBtnRef}
                onSubmit={() => {}}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default EditForm;
