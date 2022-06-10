import LogHeading from "./heading-card";
import LogSearch from "./log-search";
import LogIndex from "./logTable";

const LogPage = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between mt-3">
        <h4>Log</h4>
        <div className="d-flex flex-wrap justify-content-end float-xs-right">
          <button className="btn btn-danger me-1">
            <span className="me-2">
              <i className="bi bi-trash3"></i>
            </span>
            Delete Selected
          </button>
          <button className="btn btn-danger">
            <span className="me-2">
              <i className="bi bi-trash3"></i>
            </span>
            Clear Log
          </button>
        </div>
      </div>
      <div>
        <LogHeading />
        <LogSearch />
        <LogIndex />
      </div>
    </div>
  );
};

export default LogPage;
