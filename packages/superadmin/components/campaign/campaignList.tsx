import { useState } from 'react';
import Link from 'next/link';

import Table from '../global/table/table';
import campaignData from '../../data/discounts.json';
import Pagination from '../common/pagination';

const CampaignsList = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(5);
  const columns = [
    {
      label: 'Name',
      path: 'title',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data[key]}</td>
      ),
    },
    {
      label: 'Created on',
      path: 'creationDate',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data[key]}</td>
      ),
    },
    {
      label: 'Planned date of sending',
      path: 'sendingDate',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data[key]}</td>
      ),
    },
    // {
    //   label: 'Edit',
    //   path: 'id',
    //   content: (data: any, key: any, index: any) => (
    //     <td className="text-center">
    //       <Link
    //         href={{ pathname: `/campaign/edit/[id]`, query: { id: data[key] } }}
    //         passHref
    //       >
    //         <button className="btn btn-default">
    //           <span>
    //             <i className="bi bi-pencil p-1"></i>
    //           </span>
    //           Edit
    //         </button>
    //       </Link>
    //     </td>
    //   ),
    // },
  ];

  const paginateData = (data: any) => {
    const start = (activePage - 1) * pageCount;
    const paginatedData = data.slice(start, start + pageCount);
    return paginatedData;
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(campaignData['campaignData']);

  return (
    <>
      <div className="card border-1 mt-3 rounded px-2">
        <div className="card-body">
          {/* <p>
            Learn more about{' '}
            <a href="#" style={{ textDecoration: 'none' }}>
              Email campaigns
            </a>
          </p> */}
          <Table items={paginatedData} columns={columns} />

          <div className="d-flex flex-column align-items-center flex-xs-column flex-sm-column flex-md-column flex-lg-row flex-xl-row align-items-xs-center align-items-sm-center align-items-md-center justify-content-lg-between justify-content-xl-between flex-wrap">
            <Pagination
              totalItems={campaignData['campaignData'].length}
              pageCount={pageCount}
              activePage={activePage}
              onClickPage={handleClickPage}
            />

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
                      onClick={() => {
                        setPageCount(5);
                        setActivePage(1);
                      }}
                    >
                      5
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setPageCount(15);
                        setActivePage(1);
                      }}
                    >
                      15
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setPageCount(20);
                        setActivePage(1);
                      }}
                    >
                      20
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setPageCount(50);
                        setActivePage(1);
                      }}
                    >
                      50
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => {
                        setPageCount(100);
                        setActivePage(1);
                      }}
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
                activePage * pageCount <= campaignData['campaignData'].length
                  ? activePage * pageCount
                  : campaignData['campaignData'].length
              } of ${campaignData['campaignData'].length} items`}
              <span className="ms-5">
                <button style={{ border: 'none' }}>
                  <i className="bi bi-arrow-clockwise align-items-center"></i>
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignsList;
