import React, { FC } from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import styles from "../../styles/Input.module.css";

interface Props {
  placeholder: string;
  value: string | number | undefined;
  name: string;
  type: string;
  errors?: any;
  touched?: any;
  label: string;
  required?: boolean;
}

const InputField: FC<Props> = (props) => {
  const { placeholder, value, name, type, errors, touched, label } = props;
  return (
    <>
      <div className="form-group row mb-2">
        <div className="col-md-3">
          <div className={styles.label_wrapper}>
            <label className={styles.col_form_label} htmlFor={name}>
              {label}
            </label>
            <div
              title=""
              data-toggle="tooltip"
              className="ico-help"
              data-original-title="The customer's email."
            >
              <i className="fas fa-question-circle"></i>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <Field
            {...props}
            value={value}
            name={name}
            className="form-control text-box single-line input-validation-error"
            placeholder={placeholder}
            type={type}
            id={name}
          />
          {errors && touched && (
            <FormikError errors={errors} touched={touched} name={name} />
          )}
        </div>
      </div>
    </>
  );
};

export default InputField;

// usage
/*
<div className="col-lg-3">
                  <label>Delivery Address</label>
                  <InputField
                    value={values?.deliveryAddress}
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    type="text"
                  />
                </div>
                */
