import { useState } from "react";
import scheduledTaskData from "../../data/scheduledTask.json";
import Pagination from "../global/pagination";
import Table from "../global/table/table";

const TaskTable = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(5);

  const columns = [
    {
      label: "Name",
      path: "name",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Seconds (run period)",
      path: "seconds",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Enabled",
      path: "enabled",
      content: (data: any, key: any) => <td className="text-center">{data[key] ? <><i className="bi bi-check-lg"></i></> : ""}</td>,
    },
    {
      label: "Stop on error",
      path: "stopOnError",
      content: (data: any, key: any) => <td className="text-center">{!data[key] ? <i className="bi bi-x"></i> : ""}</td>,
    },
    {
      label: "Last start date",
      path: "startDate",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Last end date",
      path: "endDate",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Last success date",
      path: "successDate",
      content: (data: any, key: any) => <td>{data[key]}</td>,
    },
    {
      label: "Run Now",
      path: "run",
      content: (data: any, key: any) => (
        <td>
          <button className="btn btn-success">Run</button>
        </td>
      ),
    },
    {
      label: "Edit",
      path: "edit",
      content: (data: any, key: any) => (
        <td>
          <button style={{ border: "none" }}>
            <span>
              <i className="bi bi-pencil"></i>
            </span>
            Edit
          </button>
        </td>
      ),
    },
  ];

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(scheduledTaskData["scheduledTask"]);

  return (
    <>
      <Table items={paginatedData} columns={columns} />

      <div className="d-flex flex-wrap justify-content-between">
        <Pagination
          totalItems={6}
          pageCount={pageCount}
          activePage={activePage}
          onClickPage={handleClickPage}
        />

        <div className="d-flex flex-wrap justify-content-center">
          <span>
            <span style={{ margin: "10px" }}>Show</span>
            <button
              className="dropdown"
              style={{
                padding: "10px",
                border: "1px solid gray",
              }}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px",
                }}
              >
                {pageCount}
              </a>
              <div className="dropdown-menu">
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(7)}
                >
                  7
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(15)}
                >
                  15
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(20)}
                >
                  20
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(50)}
                >
                  50
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(100)}
                >
                  100
                </a>
              </div>
            </button>
            <span style={{ margin: "10px" }}>items</span>
          </span>
        </div>

        <p>{` ${(activePage - 1) * pageCount + 1} - ${
          (activePage - 1) * pageCount + pageCount
        } of 6 items`}</p>
      </div>
    </>
  );
};
export default TaskTable;