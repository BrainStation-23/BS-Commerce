import { ErrorMessage, Field } from "formik";

const FieldTemplate = (props: any) => {
  const { label, isRequired, fieldName, fieldType, fieldClass, extraClass } =
    props;

  return (
    <>
      <div className="form-group row my-2">
        <div className="col-md-3">
          <div className="label-wrapper row row-cols-auto float-md-end">
            <label className="col-form-label col px-1" htmlFor={fieldName}>
              {label}
              {isRequired ? (
                <span className="required text-danger ">*</span>
              ) : null}
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <Field
              className={`${fieldClass}`}
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
