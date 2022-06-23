import { FC, useMemo, useState } from "react";
import Link from "next/link";

import Table from "../global/table/table";
import Pagination from "../global/pagination";
import { Product } from "models";
import { userAPI } from "../../APIs";

interface Props {
  productsList: Product[];
  setProducts: any;
}

const ProductsList: FC<Props> = ({ productsList, setProducts }) => {
  // const [checkAll, setCheckAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);

  const onChangeForList = async (pageSize: number) => {
    const productsList = await userAPI.getProducts(pageSize);
    setProducts(productsList);
  };

  const onClickForDelete = async (id: string) => {
    const res = await userAPI.deleteProduct(id);
    if (res) {
      onChangeForList(1000);
    }
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productsList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, productsList]);

  const columns = [
    // {
    //   label: (
    //     <input
    //       type="checkbox"
    //       onClick={() => {
    //         setCheckAll(!checkAll);
    //       }}
    //     ></input>
    //   ),
    //   path: "select",
    //   content: (data: any, key: any, index: any) => (
    //     <td className="text-center">
    //       {checkAll && <input type="checkbox" value="" checked></input>}
    //       {!checkAll && <input type="checkbox" value=""></input>}
    //     </td>
    //   ),
    // },
    {
      label: "Picture",
      path: "url",
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
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
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data?.info[key]}</td>
      ),
    },
    {
      label: "Display Order",
      path: "displayOrder",
      content: (data: any, key: any, index: any) => (
        <td className="text-center">{data?.info[key]}</td>
      ),
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
            href={{
              pathname: `/Product/Edit/[id]`,
              query: { id: data?.[key] },
            }}
            passHref
          >
            <button className="btn btn-default">
              <span>
                <i className="bi bi-pencil me-2 align-middle"></i>
              </span>
              Edit
            </button>
          </Link>
        </td>
      ),
    },
    {
      label: "View",
      path: "id",
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          <Link
            href={{
              pathname: `/Product/View/[id]`,
              query: { id: data?.[key] },
            }}
            passHref
          >
            <button className="btn btn-default">
              <span>
                <i className="bi bi-eye me-2 align-middle"></i>
              </span>
              View
            </button>
          </Link>
        </td>
      ),
    },
    {
      label: "Delete",
      path: "id",
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          <button
            className="btn btn-default"
            onClick={() => onClickForDelete(data.id)}
          >
            <i className="bi bi-pencil align-middle me-2"></i>
            Delete
          </button>
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
            <a href="#" style={{ textDecoration: "none", marginLeft: "5px" }}>
              Product
            </a>
          </p>
          <Table items={currentTableData} columns={columns} />

          <div className="">
            {productsList?.length > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={productsList.length}
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

export default ProductsList;
