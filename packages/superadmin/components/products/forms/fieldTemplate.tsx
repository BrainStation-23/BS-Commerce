import { ErrorMessage, Field } from "formik";

const FieldTemplate = (props: any) => {
  const {
    label,
    isRequired,
    fieldID,
    fieldType,
    fieldClass,
    extraClass,
    fieldAs,
    options,
    component,
    placeholder,
    isMulti,
  } = props;

  return (
    <>
      <div className="form-group row my-2 mb-3">
        <div className="col-md-3">
          <div className="label-wrapper row row-cols-auto float-md-end pe-3">
            <label className="col-form-label col px-1 fs-5  " htmlFor={fieldID}>
              {label}
              {isRequired ? (
                <span className="required text-danger ">*</span>
              ) : null}
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className={`input-group ${extraClass}`}>
            <Field
              className={`${
                fieldType === "checkbox"
                  ? "mt-3"
                  : fieldType === "none"
                  ? "py-2  "
                  : `p-2 border border-0 border-bottom rounded-0 shadow-none border-2 ${
                      fieldType === "number" ? "form-control" : "form-control"
                    }  `
              } ${fieldClass}`}
              id={fieldID}
              name={fieldID}
              type={fieldType}
              as={fieldAs}
              options={options}
              component={component}
              placeholder={placeholder}
              isMulti={isMulti}
            />
            <div className="pt-2" style={{ height: "10px" }}></div>
          </div>
          <div className="errMsg text-red-600 text-danger">
            <ErrorMessage name={fieldID} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldTemplate;
