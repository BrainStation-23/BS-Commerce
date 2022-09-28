import React, { useEffect, useRef, useState } from "react";
import { Field } from "formik";
import { ReactNode } from "react";
export interface IInput {
  type?: string;
  required?: boolean;
  icon?: ReactNode;
  value?: string | number;
  id: string;
  placeholder?: string;
  as?: string;
  errors?: any;
  touched?: any;
  options?: string[];
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<IInput> = ({
  type,
  required,
  icon,
  value,
  id,
  placeholder,
  errors,
  touched,
  as,
  options,
}: IInput) => {
  const [focus, setFocus] = useState(false);
  const componentRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setFocus(false);
        }
      }
    }
  }, []);

  return (
    <>
      <div
        className={`relative flex items-center ${
          focus
            ? "text-primary"
            : errors && touched
            ? "text-error"
            : !errors && touched
            ? "text-primary"
            : "text-gray-600"
        }`}
        onClick={() => setFocus(true)}
      >
        <span className="absolute top-3 left-3">{icon}</span>
        {as !== "select" ? (
          <Field
            as={as}
            innerRef={componentRef as any}
            type={type}
            id={id}
            name={id}
            // value={value}
            initialValues={value}
            className={`${
              errors && touched
                ? "border-error"
                : !errors && touched
                ? "border-primary"
                : "border-gray-200"
            } block w-full rounded-lg border p-2.5 pl-10 text-sm placeholder-gray-600 outline-none focus:border-blue-500 focus:shadow-sm focus:ring-blue-500`}
            placeholder={required ? `${placeholder}*` : `${placeholder}`}
          />
        ) : (
          <Field
            as={as}
            innerRef={componentRef as any}
            type={type}
            id={id}
            name={id}
            value={value}
            className={`${
              errors && touched ? "border-error" : "border-gray-200"
            } block w-full rounded-lg border p-2.5 pl-10 text-sm text-gray-900 placeholder-gray-600 outline-none focus:border-blue-500 focus:text-[#8330C2] focus:shadow-sm focus:ring-blue-500`}
            placeholder={required ? `${placeholder}*` : `${placeholder}`}
          >
            {options?.map((option) => {
              return (
                <React.Fragment>
                  <option value={option.toLowerCase()}>{option}</option>
                </React.Fragment>
              );
            })}
          </Field>
        )}
      </div>
      {/* <div className="errMsg text-red-600">
				<ErrorMessage name={id} />
			</div> */}
      {errors && touched && <span className="text-error">{errors}</span>}
    </>
  );
};
