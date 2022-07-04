import React, { FC } from "react";
import { Formik, Form } from "formik";
import InputField from "../global/inputField";
import { adminCreate } from "../../utils/types";
import { adminValidationSchema } from "../../utils/validationSchema";

interface Props {
  initData: any;
  saveBtnRef?: string;
  saveHandler: (values: adminCreate, cb: any) => void;
  saveWithContinueBtnRef?: string;
}

const CreateForm: FC<Props> = ({
  initData,
  saveBtnRef,
  saveHandler,
  saveWithContinueBtnRef,
}) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        validationSchema={adminValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          // await sleep(500);
          saveHandler(values, () => {
            resetForm(initData);
          });
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
            <Form className="">
              <div className="row">
                <div className="col-lg-12">
                  <InputField
                    value={values?.firstName}
                    label="First name"
                    placeholder="First name"
                    // required
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
                    // required
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
                    // required
                    type="email"
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
                    // required
                    type="password"
                    name="password"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={saveBtnRef}
                onSubmit={() => handleSubmit()}
              >
                submit
              </button>

              <button
                type="reset"
                style={{ display: "none" }}
                ref={saveWithContinueBtnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default CreateForm;
