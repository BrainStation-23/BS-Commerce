import { ErrorMessage, Field } from 'formik';
import { TemplateInteface } from '@/modules/checkout/fieldInterface';

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
    <>
      <Field
        type={fieldType}
        id={fieldID}
        name={fieldID}
        className={`w-full p-2 placeholder-gray-600 outline-0 ${
          extraClass ? extraClass : ''
        }`}
        placeholder={placeholder}
      />
      <div className="errMsg text-red-600">
        <ErrorMessage name={fieldID!} />
      </div>
    </>
  );
};

export default FieldTemplate;
