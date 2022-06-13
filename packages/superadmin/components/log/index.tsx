import { useState } from "react";
import LogHeading from "./heading-card";
import LogSearch from "./log-search";
import LogIndex from "./logTable";
import Modal from "./modal";

const LogPage = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between mt-3">
        <h4>Log</h4>
        <div className="d-flex flex-wrap justify-content-end float-xs-right">
          <button
            type="button"
            className="btn btn-danger me-1"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <span className="me-2">
              <i className="bi bi-trash3"></i>
            </span>
            Delete Selected
          </button>

          <Modal />

          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
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
