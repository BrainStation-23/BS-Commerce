import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import type { NextComponentType } from "next";
import Table from "../global/table/table";
import Pagination from "../global/pagination";

const Carts: NextComponentType = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [PageSize, setPageSize] = useState(7);
    const [data, setData] = useState([]);

    useEffect(() => {
        const data: any = [];
        setData(data);
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, data]);

    const columns = [
        {
            label: "Customer",
            path: "customer",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Total items",
            path: "totalItems",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
    ];

    return (
        <>
            <main className="px-5">
                <div className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
                    <h1 className="h2">Shopping carts</h1>
                </div>

                <div className="card border-1 mt-3 rounded">
                    <div className="card-header">
                        <span className="ms-2 fs-4">Search</span>
                    </div>
                    <div>
                        <form style={{ padding: "5px", margin: "5px" }}>
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
                </div>

                <div className="card border-1 mt-3 rounded px-2">
                    <div className="card-body">
                        <p>
                            Learn more about
                            <a
                                href="#"
                                style={{
                                    textDecoration: "none",
                                    marginLeft: "5px",
                                }}
                            >
                                Cart
                            </a>
                        </p>

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
                            ) : (
                                "No Data Found"
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Carts;
