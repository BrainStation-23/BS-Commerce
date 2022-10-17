import { Field } from 'formik';

interface props {
  id: string;
  fieldType: string;
  label: string;
  verified?: boolean;
}

const ProfileFormField: React.FC<props> = ({
  id,
  fieldType,
  label,
  verified,
}) => {
  return (
    <>
      <div className="mb-3 w-full md:w-1/2">
        <div className="flex ">
          <label htmlFor={id} className="my-auto w-1/3 font-semibold">
            {label}
          </label>
          <Field
            type={fieldType}
            className="rounded-0 form-comtrol w-full w-2/3 border-0 border-2 border-b p-2 outline-0"
            id={id}
            name={id}
            disabled={verified ? true : false}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileFormField;
