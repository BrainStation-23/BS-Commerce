import Tooltips from "../global/tooltip";

const SingleView = (props: any) => {
  const { label, value, toolkitMessage } = props;

  return (
    <>
      <div className="form-group row my-2">
        <div className="col-md-4">
          <div className="label-wrapper row row-cols-auto float-md-end">
            <label className="col-form-label col pe-2 fw-bold" htmlFor="brands">
              {label}
            </label>
            <Tooltips title={toolkitMessage} />
          </div>
        </div>
        <div className="col-md-8 ps-4 py-auto my-auto">
          <div className=" row">
            {Array.isArray(value) ? (
              <>
                {value[0] ? value[0] : "---"}
                {value.map((data, index) => (index > 0 ? ` , ${data}` : ""))}
              </>
            ) : typeof value === "string" && value.length <= 0 ? (
              "- - -"
            ) : (
              value
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleView;
