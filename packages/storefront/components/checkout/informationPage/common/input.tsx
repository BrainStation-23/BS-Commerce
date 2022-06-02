import { Field } from "formik";

interface Props {
  isRequiredField: Boolean;
  type: string;
  name: string;
  labelText: string
}

const Input: React.FC<Props> = (props) => {
  const { isRequiredField, name, type, labelText } = props;

  return (
    <>
      <div className="relative">
        <Field
          type={`${type}`}
          id={`${name}`}
          name={`${name}`}
          className={`${isRequiredField} block rounded px-4 pb-2.5 mb-3 pt-5 w-full text-sm text-gray-900  border border-gray-300 appearance-none focus:outline-none focus:border-2 focus:ring-0 focus:border-black peer`}
          placeholder=" "
        />
        <label
          htmlFor={`${name}`}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {labelText}
        </label>
      </div>
    </>
  );
};

export default Input;
