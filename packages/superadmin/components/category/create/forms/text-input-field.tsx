import { Field, ErrorMessage } from 'formik';

interface Props {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}

const CustomInput: React.FC<Props> = ({
  label,
  id,
  type = 'text',
  required = false,
}: Props) => {
  return (
    <div className="form-group row my-2">
      <div className="col-md-3">
        <div className="label-wrapper row row-cols-auto float-md-end">
          <label
            className="col-form-label col px-1"
            htmlFor={id}
            style={{ textAlign: 'right' }}
          >
            {label}
          </label>
        </div>
      </div>
      <div className={`col-md-9 d-flex flex-row`}>
        <div
          className={`input-group ${required ? 'input-group-required' : ''} `}
        >
          <Field
            className={`${
              type === 'text'
                ? 'ms-2 form-control text-box single-line'
                : type === 'checkbox'
                ? 'ms-2 check-box'
                : 'ms-2 form-control'
            }`}
            id={id}
            name={id}
            type={type}
          />
          {required ? (
            <div className="pt-2" style={{ height: '10px' }}>
              <h2 className="required text-danger ">*</h2>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="errMsg text-danger text-red-600">
          <ErrorMessage name={id} />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
