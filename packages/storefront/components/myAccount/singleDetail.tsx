interface props {
  value: string;
  label: string;
  verified?: boolean;
}

const SingleDetail: React.FC<props> = ({ value, label, verified }) => {
  return (
    <>
      <div className="flex flex-row">
        <span className="mr-2 w-1/3 font-semibold">{label}: </span>
        <span className="w-2/3">
          {value}{' '}
          {(label === 'Phone' || label === 'Email') && !verified
            ? '(unverified)'
            : ''}
        </span>
      </div>
    </>
  );
};

export default SingleDetail;
