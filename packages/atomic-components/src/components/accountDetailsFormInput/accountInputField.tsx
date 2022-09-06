import { Field, Form, Formik } from "formik";

export interface AccountInputFieldProp {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  verified?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const AccountInputField: React.FC<AccountInputFieldProp> = ({
  type,
  id,
  label,
  placeholder,
  verified,
}) => {
  return (
    <>
      <label htmlFor={id} className="my-auto w-1/3 font-semibold">
        {label}
      </label>
      <input
        type={type}
        className="rounded-0 form-control w-2/3 border-0 border-b p-2 outline-0"
        id={id}
        name={id}
        disabled={verified ? true : false}
        placeholder={placeholder}
      />
    </>
  );
};
