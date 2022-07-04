interface Props {
  label: string;
  text?: string;
  value?: number;
}

const TextView: React.FC<Props> = ({ label, text, value }: Props) => {
  console.log(value);

  return (
    <div className="w-100">
      <div className="row justify-content-center align-items-center">
        <span className="col-3 pe-2 fw-bold text-end">{label}:</span>
        {text ? <span className="col-9">{text}</span> : ""}
        {value !== undefined ? <span className="col-9">{value}</span> : ""}
      </div>
    </div>
  );
};

export default TextView;
