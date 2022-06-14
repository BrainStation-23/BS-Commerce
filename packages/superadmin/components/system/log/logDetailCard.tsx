const LogDetailCard = (props: any) => {
  const { label, data, tooltipText } = props;
  return (
    <>
      <div className="row mt-1">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
          <p className="float-lg-end float-xl-end">
            <strong className="fs-6 me-1">{label}</strong>
            <span data-bs-toggle="tooltip" data-bs-placement="bottom" title={tooltipText}>
              <i className="bi bi-question-circle-fill" style={{ color: "#3c8dbc" }}></i>
            </span>
          </p>
        </div>
        <div className="col">
          <p className="ms-lg-3 ms-xl-3 fs-6">{data}</p>
        </div>
      </div>
    </>
  );
};

export default LogDetailCard;
