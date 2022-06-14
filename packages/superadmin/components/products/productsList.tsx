import { useState } from "react";
import Link from "next/link";

import Table from "../global/table/table";
import productData from "../../data/products.json";
import Pagination from "../global/pagination";

const ProductsList = () => {
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(7);
  const [checkAll, setCheckAll] = useState(false);

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
      path: "select",
      content: (data: any, key: any, index: any) => (
        <td>
          {checkAll && <input type="checkbox" value="" checked></input>}
          {!checkAll && <input type="checkbox" value=""></input>}
        </td>
      ),
    },
    {
      label: "Picture",
      path: "thumbnail",
      content: (data: any, key: any, index: any) => (
        <img src={`${data[key]}`} height="75px" width={"75px"} alt="..."></img>
      ),
    },
    {
      label: "Product name",
      path: "title",
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: "SKU",
      path: "color",
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: "Price",
      path: "price",
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: "Stock quantity",
      path: "stock",
      content: (data: any, key: any, index: any) => <td>{data[key]}</td>,
    },
    {
      label: "Published",
      path: "published",
      content: (data: any, key: any, index: any) => (
        <td className="text-center m-auto p-auto">{data[key] ? <i className="bi bi-check-lg"></i> : "-"}</td>
      ),
    },
    {
      label: "Edit",
      path: "id",
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          <Link
            href={{ pathname: `/Product/Edit/[id]`, query: { id: data[key] } }}
            passHref
          >
            <button className="btn btn-default">
              <span>
                <i className="bi bi-pencil p-1"></i>
              </span>
              Edit
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

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };

  const paginatedData = paginateData(productData["productData"]);

  return (
    <>
      <div className="card rounded border-1 px-2 mt-3">
        <div className="card-body">
          <p>
            Learn more about {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Product
            </a>
          </p>
          <Table items={paginatedData} columns={columns} />

          <div className="d-flex flex-column flex-wrap align-items-center flex-xs-column flex-sm-column flex-md-column flex-lg-row flex-xl-row align-items-xs-center align-items-sm-center align-items-md-center justify-content-lg-between justify-content-xl-between">
            <Pagination
              totalItems={30}
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

            <p>
              {` ${(activePage - 1) * pageCount + 1} - ${
                (activePage - 1) * pageCount + pageCount
              } of 41 items`}
              <span className="ms-2">
                <button style={{ border: "none" }}>
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

export default ProductsList;
