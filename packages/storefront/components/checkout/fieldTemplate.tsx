import { ErrorMessage, Field } from 'formik';
import { TemplateInteface } from '@/components/checkout/fieldInterface';

const FieldTemplate: React.FC<TemplateInteface> = (props: TemplateInteface) => {
  const {
    label,
    fieldID,
    fieldType,
    fieldClass,
    extraClass,
    placeholder,
    isRequired,
  } = props;

  return (
    <div className={extraClass}>
      <div className="relative">
        {isRequired === true ? (
          <Field
            type={fieldType}
            id={fieldID}
            name={fieldID}
            className="peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder={placeholder}
            required
          />
        ) : (
          <Field
            type={fieldType}
            id={fieldID}
            name={fieldID}
            className="peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0 dark:text-dark_text"
            placeholder={placeholder}
          />
        )}

        <label
          htmlFor={fieldID}
          className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500 dark:text-dark_text dark:peer-focus:text-white"
        >
          {label}
        </label>
        <div className="errMsg text-red-600">
          <ErrorMessage name={fieldID!} />
        </div>
      </div>
    </div>
  );
};

export default FieldTemplate;
