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
  } = props;

  return (
    <>
      <div className="p-4">
        <div className="mb-3">
          <div className="relative">
            <Field
              type={fieldType}
              id={fieldID}
              name={fieldID}
              className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor={`cardNumber`}
              className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
            >
              Card Number
            </label>
            <div className="errMsg text-red-600">
              <ErrorMessage name={fieldID} />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="relative">
            <Field
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor={`nameOnCard`}
              className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
            >
              Name on card
            </label>
            <div className="errMsg text-red-600">
              <ErrorMessage name="nameOnCard" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
            <div className="relative">
              <Field
                type="month"
                id="expirationDate"
                name="expirationDate"
                className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label
                htmlFor={`expirationDate`}
                className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
              >
                Expiration Date (MM / YY)
              </label>
              <div className="errMsg text-red-600">
                <ErrorMessage name="expirationDate" />
              </div>
            </div>

            <div className="relative">
              <Field
                type="text"
                id="securityCode"
                name="securityCode"
                className={` peer mb-3 block w-full appearance-none rounded border border-gray-300 px-4  pb-2.5 pt-5 text-sm text-gray-900 focus:border-2 focus:border-black focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label
                htmlFor={`securityCode`}
                className="absolute top-4 left-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-gray-500"
              >
                Security Code
              </label>
              <div className="errMsg text-red-600">
                <ErrorMessage name="securityCode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldTemplate;
