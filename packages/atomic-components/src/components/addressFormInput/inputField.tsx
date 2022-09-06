import { Field, Form, Formik } from "formik";

export interface InputFieldProp {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputField: React.FC<InputFieldProp> = ({
  type,
  id,
  label,
  placeholder,
}) => {
  return (
    <>
      <div>
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        <br />
        <input
          type={type}
          className="w-full appearance-none border py-3 px-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none focus:grayscale"
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
