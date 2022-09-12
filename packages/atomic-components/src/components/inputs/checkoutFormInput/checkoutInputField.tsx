import { ErrorMessage, Field, Form, Formik } from "formik";

export interface CheckoutInputFieldProp {
  label?: string;
  id?: string;
  type?: string;
  fieldClass?: string;
  extraClass?: string;
  placeholder?: string;
  isRequired?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const CheckoutInputField: React.FC<CheckoutInputFieldProp> = ({
  type,
  id,
  label,
  placeholder,
  fieldClass,
  extraClass,
  isRequired,
}) => {
  return (
    <>
      <div className={extraClass}>
        <div className="relative">
          {isRequired === true ? (
            <input
              type={type}
              id={id}
              name={id}
              className="peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
              placeholder={placeholder}
              required
            />
          ) : (
            <input
              type={type}
              id={id}
              name={id}
              className="peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
              placeholder={placeholder}
            />
          )}

          <label
            htmlFor={id}
            className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
          >
            {label}
          </label>
          {/* <div className="errMsg text-red-600">
            <ErrorMessage name={id!} />
          </div> */}
        </div>
      </div>
    </>
  );
};
