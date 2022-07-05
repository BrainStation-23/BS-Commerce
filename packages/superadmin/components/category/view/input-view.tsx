interface Props {
  label: string;
  checked: boolean;
}

const InputView: React.FC<Props> = ({ label, checked }: Props) => {
  return (
    <div className="w-100">
      <div className="row justify-content-center align-items-center">
        <span className="fw-bold col-3 pe-2 text-end">{label}:</span>
        <span className="col-9">
          <i
            className={
              checked ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
            }
          />
        </span>
      </div>
    </div>
  );
};

export default InputView;
