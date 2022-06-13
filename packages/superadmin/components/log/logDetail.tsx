import Link from "next/link";
import { useEffect, useState } from "react";
import logData from "../../data/log.json";
import LogHeading from "./heading-card";
import LogDetailCard from "./logDetailCard";
import Modal from "./modal";

interface Log {
  id: number;
  logLevel: string;
  shortMsg: string;
  fullMsg: string;
  ip: string;
  customer: string;
  pageURL: string;
  refURL: string;
  createdOn: string;
}

const LogDetail = (props: any) => {
  const initial: Log = {
    id: 0,
    logLevel: "",
    shortMsg: "",
    fullMsg: "",
    ip: "",
    customer: "",
    pageURL: "",
    refURL: "",
    createdOn: "",
  };
  const { id } = props;
  const [log, setLog] = useState(initial);

  useEffect(() => {
    const data = logData["logData"].find((one) => {
      return one.logLevel === "Error"; //need to change
    });
    setLog(data);
    //console.log(data)
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-between mt-3">
        <div className="d-flex flex-wrap">
          <h3>View log entry details</h3>
          <Link href="/log" passHref>
            <a style={{ textDecoration: "none" }}>
              <h5 className="ms-3 align-items-center">
                <span>
                  <i className="bi bi-arrow-left-circle-fill me-1"></i>
                </span>
                back to system log
              </h5>
            </a>
          </Link>
        </div>
        <button className="btn btn-danger float-end" data-bs-toggle="modal"
            data-bs-target="#myModal">
          <span className="me-2">
            <i className="bi bi-trash3"></i>
          </span>
          Delete
        </button>
        <Modal />
      </div>
      <LogHeading />
      <div className="card mt-3 p-3 rounded border-1 font-lg">
        <div className="card-body">
         <LogDetailCard label="Log level" data={log.logLevel} tooltipText="The level of log entry" />
         <LogDetailCard label="Short Message" data={log.shortMsg} tooltipText="The log entry message" />
         <LogDetailCard label="Full Message" data={log.fullMsg} tooltipText="The details for the log entry" />
         <LogDetailCard label="IP address" data={log.ip} tooltipText="IP address of the machine that caused the exception" />
         <LogDetailCard label="Customer" data={log.customer} tooltipText="Name of the customer who caused the exception" />
         <LogDetailCard label="Page URL" data={log.pageURL} tooltipText="Originating page of exception" />
         <LogDetailCard label="Referrer URL" data={log.refURL} tooltipText="The referrer URL" />
         <LogDetailCard label="Created on" data={log.createdOn} tooltipText="Date/Time the log entry was created" />
        </div>
      </div>
    </>
  );
};

export default LogDetail;
