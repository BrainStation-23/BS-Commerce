import { FC, useState } from "react";
import Link from "next/link";

import Table from "../global/table/table";
import Pagination from "../global/pagination";
import { Product } from "models";

interface Props {
  productsList: Product[];
}

const ProductsList: FC<Props> = ({ productsList }) => {
  const [pageSize, setPageSize] = useState(7);
  const [currentPage, onPageChange] = useState(1);
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
        <td className="text-center">
          {checkAll && <input type="checkbox" value="" checked></input>}
          {!checkAll && <input type="checkbox" value=""></input>}
        </td>
      ),
    },
    {
      label: "Picture",
      path: "url",
      content: (data: any, key: any, index: any) => (
        <td>
          <img
            src={`${data?.photos[0][key]}`}
            height="75px"
            width={"75px"}
            alt="..."
          ></img>
        </td>
      ),
    },
    {
      label: "Product name",
      path: "name",
      content: (data: any, key: any, index: any) => <td>{data?.info[key]}</td>,
    },
    {
      label: "SKU",
      path: "sku",
      content: (data: any, key: any, index: any) => <td>{data?.info[key]}</td>,
    },
    {
      label: "Price",
      path: "price",
      content: (data: any, key: any, index: any) => <td>{data?.info[key]}</td>,
    },
    {
      label: "Stock quantity",
      path: "displayOrder",
      content: (data: any, key: any, index: any) => <td>{data?.info[key]}</td>,
    },
    {
      label: "Published",
      path: "published",
      content: (data: any, key: any, index: any) => (
        <td className="text-center m-auto p-auto">
          {data?.info[key] ? <i className="bi bi-check-lg"></i> : "-"}
        </td>
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
                <i className="bi bi-pencil p-1 align-middle"></i>
              </span>
              Edit
            </button>
          </Link>
        </td>
      ),
    },
  ];

  return (
    <>
      <div className="card rounded border-1 px-2 mt-3">
        <div className="card-body">
          <p>
            Learn more about
            <a href="#" style={{ textDecoration: "none" }}>
              Product
            </a>
          </p>
          <Table items={productsList} columns={columns} />

          <div className="">
            {productsList.length > 1 ? (
              <Pagination
                list={productsList}
                pageSize={pageSize}
                setPageSize={setPageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
