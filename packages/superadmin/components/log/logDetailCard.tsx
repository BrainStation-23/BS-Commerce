const LogDetailCard = (props: any) => {
  const { label, data, tooltipText } = props;
  return (
    <>
      <div className="row mt-1">
        <div className="col-3">
          <p>
            <strong className="fs-6 me-1">{label}</strong>
            <span>
              <i className="bi bi-question-circle-fill" data-toggle="tooltip" data-placement="bottom" title={tooltipText} style={{ color: "#3c8dbc" }}></i>
            </span>
          </p>
        </div>
        <div className="col">
          <p className="ms-3 fs-6">{data}</p>
        </div>
      </div>
    </>
  );
};

export default LogDetailCard;
