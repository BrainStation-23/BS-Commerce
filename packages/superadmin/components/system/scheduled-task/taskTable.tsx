import { useEffect, useState } from 'react';
import scheduledTaskData from '../../../data/scheduledTask.json';
import Pagination from '../../global/pagination';
import Table from './table';

const TaskTable = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(7);

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(scheduledTaskData['scheduledTask']);

  useEffect(() => {
    paginateData(scheduledTaskData['scheduledTask']);
  }, [pageCount]);

  return (
    <>
      <Table items={paginatedData} />

      <div className="d-flex flex-column align-items-center flex-xs-column flex-sm-column flex-md-column flex-lg-row flex-xl-row align-items-xs-center align-items-sm-center align-items-md-center justify-content-lg-between justify-content-xl-between flex-wrap">
        <div className="d-flex justify-content-center flex-wrap">
          <span>
            <span style={{ margin: '10px' }}>Show</span>
            <button
              className="dropdown"
              style={{
                padding: '10px',
                border: '1px solid gray',
              }}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  padding: '10px',
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
            <span style={{ margin: '10px' }}>items</span>
          </span>
        </div>

        <p>
          {` ${(activePage - 1) * pageCount + 1} - ${
            (activePage - 1) * pageCount + pageCount
          } of 6 items`}
          <span className="ms-2">
            <button style={{ border: 'none' }}>
              <i className="bi bi-arrow-clockwise align-items-center"></i>
            </button>
          </span>
        </p>
      </div>
    </>
  );
};
export default TaskTable;
