import React, { FC } from "react";
import { Formik, Form } from "formik";
import InputField from "../global/inputField";
// import { searchValue } from "../../utils/typs";
// import { sleep } from "../../utils/utils";

interface Props {
  saveHandler: (values: any) => void;
  initData: any;
}

const SearchForm: FC<Props> = ({ saveHandler, initData }) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        onSubmit={async (values, { resetForm }) => {
          // await sleep(500);
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
            <Form className="">
              <div className="row container">
                <div className="col-lg-12">
                  <InputField
                    value={values?.name}
                    label="Admin name"
                    placeholder="Admin name"
                    required
                    type="text"
                    name="name"
                  />
                </div>
                <div className="col-lg-12 text-center mt-1">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={() => handleSubmit()}
                  >
                    <i className="bi bi-search me-2 align-middle"></i> Search
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
