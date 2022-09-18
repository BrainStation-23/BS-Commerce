import { ErrorMessage, Field } from 'formik';
import { TemplateInteface } from '@/components/products/models/index';

const FieldTemplate: React.FC<TemplateInteface> = (props: TemplateInteface) => {
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
    ismulti,
    disabled,
  } = props;

  return (
    <>
      <div className="form-group row my-2 mb-3">
        <div className="col-md-3">
          <div className="label-wrapper row row-cols-auto float-md-end pe-3">
            <label
              className="col-form-label col fs-5 px-1 text-center"
              htmlFor={fieldID}
            >
              {label}
              {isRequired ? (
                <span className="required text-danger ">*</span>
              ) : null}
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className={`input-group ${extraClass}`}>
            {ismulti ? (
              <Field
                className={`${
                  fieldType === 'checkbox'
                    ? 'mt-3'
                    : fieldType === 'none'
                    ? 'py-2  '
                    : `border-bottom rounded-0 border border-0 border-2 p-2 shadow-none ${
                        fieldType === 'number' ? 'form-control' : 'form-control'
                      }  `
                } ${fieldClass}`}
                id={fieldID}
                name={fieldID}
                type={fieldType}
                as={fieldAs}
                options={options}
                component={component}
                placeholder={placeholder}
                isMulti={ismulti}
              />
            ) : (
              <Field
                className={`${
                  fieldType === 'checkbox'
                    ? 'mt-3'
                    : fieldType === 'none'
                    ? 'py-2  '
                    : `border-bottom rounded-0 border border-0 border-2 p-2 shadow-none ${
                        fieldType === 'number' ? 'form-control' : 'form-control'
                      }  `
                } ${fieldClass}`}
                id={fieldID}
                name={fieldID}
                type={fieldType}
                as={fieldAs}
                options={options}
                component={component}
                placeholder={placeholder}
                disabled={disabled}
              />
            )}

            <div className="pt-2" style={{ height: '10px' }}></div>
          </div>
          <div className="errMsg text-danger text-red-600">
            <ErrorMessage name={fieldID!} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldTemplate;
