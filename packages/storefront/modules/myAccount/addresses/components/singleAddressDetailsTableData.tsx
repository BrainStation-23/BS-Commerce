interface Props {
  text: string | number;
  label: string;
  extraClass?: string;
}

const SingleAddressDetailsTable: React.FC<Props> = ({
  text,
  label,
  extraClass,
}) => {
  return (
    <>
      <div className={`grid grid-cols-1 gap-y-2 px-5 pb-5 ${extraClass}`}>
        <div className="grid w-full grid-cols-2">
          <div>
            <p className="text-dark_text">{label} </p>
          </div>
          <div>
            <p className="ml-4 text-black dark:text-white lg:ml-0">: {text}</p>
          </div>
        </div>
      </div>

      <hr className="mx-5 mb-5" />
    </>
  );
};

export default SingleAddressDetailsTable;
