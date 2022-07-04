import _ from "lodash";
import Pagination from "../global/pagination";
import React, { useEffect, useMemo, useState } from "react";
import getData from "./service/get-data.service";
import Table from "../global/table/table";
import Link from "next/link";

const OrderList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [PageSize, setPageSize] = useState(7);
    const [search, setSearch] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const data: any = getData();
        setData(data);
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, data]);

    const columns = [
        {
            label: "Order status",
            path: "order_status",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Payment status",
            path: "payment_status",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Shipping status",
            path: "shipping_status",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Customer",
            path: "customer",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Store",
            path: "store",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Created on",
            path: "created",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Order total",
            path: "order_total",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "View",
            path: "id",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">
                    <Link
                        href={{
                            pathname: `/Admin/Order/Edit/[id]`,
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
                        // onClick={() => onClickForDelete(data.id)}
                    >
                        <i className="bi bi-trash me-2 align-middle"></i>
                        Delete
                    </button>
                </td>
            ),
        },
    ];
    return (
        <>
            <main className="px-4">
                <div className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
                    <h1 className="h2">Orders</h1>
                    <div className="btn-toolbar mb-md-0 mb-2">
                        <div className="btn-group me-2">
                            <button
                                type="button"
                                className="btn btn-success btn-lg"
                                style={{
                                    // marginRight: "5px",
                                    backgroundColor: "#28a745",
                                    border: "1px solid #28a745",
                                }}
                            >
                                <i className="bi bi-download"> </i>Export
                            </button>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: "#00c0ef",
                                    border: "1px solid #00c0ef",
                                    color: "white",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>Print
                                PDF invoices
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setSearch(!search)}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                    }}
                >
                    <i className="bi bi-search"></i> Search
                </button>

                {search ? (
                    <div>
                        <form
                            style={{
                                padding: "5px",
                                margin: "5px",
                                transition: "all 0.3s linear",
                                transform:
                                    search === true ? "rotate(0deg)" : "",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    padding: "5px",
                                    margin: "5px",
                                }}
                                className="form-col"
                            >
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    Start Date
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    Start Time
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    End Date
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    End Time
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        height: "50px",
                                        width: "100px",
                                        margin: "15px",
                                    }}
                                    className="btn btn-primary"
                                >
                                    <i className="bi bi-search"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <></>
                )}

                <Table items={currentTableData} columns={columns} />

                <div className="">
                    {data?.length > 1 ? (
                        <Pagination
                            currentPage={currentPage}
                            totalCount={data.length}
                            pageSize={PageSize}
                            setCurrentPage={setCurrentPage}
                            setPageSize={setPageSize}
                        />
                    ) : null}
                </div>
            </main>
        </>
    );
};

export default OrderList;
