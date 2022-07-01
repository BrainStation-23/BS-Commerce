import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import CustomSelect from "../CustomSelect.component";

const FieldTemplate = () => {
  return (
    <>
      <div className="form-group row my-2">
        <div className="col-md-3">
          <div className="label-wrapper row row-cols-auto float-md-end">
            <label className="col-form-label col px-1" htmlFor="Name">
              {label}
              <span className="required text-danger ">*</span>
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className="input-group input-group-required">
            <Field
              className="w-50 form-control border border-primary border-0 border-bottom active:border-0 shadow  "
              id={fieldName}
              name={fieldName}
              as={fieldType}
            />
            <div className="pt-2" style={{ height: "10px" }}></div>
          </div>
          <div className="errMsg text-red-600 text-danger">
            <ErrorMessage name={fieldName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldTemplate;
