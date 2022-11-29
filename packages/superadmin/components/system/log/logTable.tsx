import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

import Table from '../../global/table/table';
import logData from '../../../data/log.json';
import Pagination from '../../global/pagination';
import { data } from 'cypress/types/jquery';

const LogIndex = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(7);
  const [checkAll, setCheckAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);

  const columns = [
    {
      label: (
        <input
          type="checkbox"
          onClick={() => {
            setCheckAll(!checkAll);
          }}
        ></input>
      ),
      path: 'select',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          {checkAll && <input type="checkbox" value="" checked></input>}
          {!checkAll && <input type="checkbox" value=""></input>}
        </td>
      ),
    },
    {
      label: 'Log level',
      path: 'logLevel',
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: 'Short message',
      path: 'shortMsg',
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: 'Created On',
      path: 'createdOn',
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: 'view',
      path: 'view',
      content: (data: any, key: any, index: any) => (
        <td>
          <Link href={`/system/${data['id']}`} passHref legacyBehavior>
            <button style={{ border: 'none' }}>
              <span>
                <i className="bi bi-eye"></i>
              </span>
              View
            </button>
          </Link>
        </td>
      ),
    },
  ];

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return logData['logData']?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, logData['logData']]);

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(logData['logData']);

  useEffect(() => {
    paginateData(logData['logData']);
  }, [pageCount]);

  return (
    <>
      <div className="card border-1 mt-3 rounded px-2">
        <div className="card-body">
          {/* <p>
            Learn more about{' '}
            <a href="#" style={{ textDecoration: 'none' }}>
              {' '}
              log
            </a>
          </p> */}
          <Table items={currentTableData} columns={columns} />
          <div className="">
            {logData['logData']?.length > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={logData['logData'].length}
                pageSize={PageSize}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIndex;
