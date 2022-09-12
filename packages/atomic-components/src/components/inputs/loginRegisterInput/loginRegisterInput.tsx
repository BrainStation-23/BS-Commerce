import { ErrorMessage, Field, Form, Formik } from "formik";

export interface LoginRegisterInputFieldProp {
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
}

/**
 * Primary UI component for user interaction
 */
export const LoginRegisterInput: React.FC<LoginRegisterInputFieldProp> = ({
  type,
  id,
  name,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        className="w-full p-2 placeholder-gray-600 outline-0"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};
