import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import getData from "./service/get-shipping-data.service";
import Table from "../global/table/table";
import Pagination from "../global/pagination";
import Link from "next/link";

const ShipmentList = () => {
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
            label: "Shipment #",
            path: "shipment",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Order #",
            path: "order",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Pickup from store",
            path: "pickup",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Tracking number",
            path: "tracking_number",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Total weight",
            path: "total_weight",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Date shipped",
            path: "date_shipped",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Date ready for pickup",
            path: "date_ready",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Date delivered",
            path: "date_delivered",
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
                            pathname: `/Admin/Shipment/Edit/[id]`,
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
            <main className="px-5">
                <div className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
                    <h1 className="h2">Shipments</h1>
                    <div className="btn-toolbar mb-md-0 mb-2">
                        <div className="btn-group me-2">
                            <button
                                type="button"
                                style={{
                                    backgroundColor: "#00c0ef",
                                    border: "1px solid #00c0ef",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>Print
                                packaging slips
                            </button>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: "#3c8dbc",
                                    border: "1px solid #00c0ef",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>Set
                                as shipped (selected)
                            </button>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: "#3c8dbc",
                                    border: "1px solid #00c0ef",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>Set
                                as ready for pickup (selected)
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-lg"
                                style={{
                                    marginRight: "10px",
                                    backgroundColor: "#28a745",
                                    border: "1px solid #28a745",
                                    marginLeft: "10px",
                                }}
                            >
                                <i className="bi bi-download"> </i>Set as
                                delivered (selected)
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setSearch(!search)}
                    aria-controls="example-collapse-text"
                    aria-expanded={search}
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

                {/* <table
                    className="table"
                    style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        margin: "10px",
                    }}
                >
                    <thead style={{ backgroundColor: "#dddddd" }}>
                        <tr style={{ fontSize: "20px" }}>
                            <th>
                                <span>Shipment #</span>
                            </th>
                            <th>
                                <span>Order #</span>
                            </th>
                            <th>
                                <span>Pickup from store</span>
                            </th>
                            <th>
                                <span>Tracking number</span>
                            </th>
                            <th>
                                <span>Total weight</span>
                            </th>
                            <th>
                                <span>Date shipped</span>
                            </th>
                            <th>
                                <span>Date ready for pickup</span>
                            </th>
                            <th>
                                <span>Date delivered</span>
                            </th>
                            <th>
                                <span>View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginateData.length > 0 &&
                            paginateData.map((shipment: any) => (
                                <SingleShipment
                                    key={shipment.id}
                                    shipment={shipment}
                                ></SingleShipment>
                            ))}
                    </tbody>
                </table>
                <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "18px" }}
                >
                    <span>
                        <Pagination
                            totalItems={data.length}
                            pageCount={pageCount}
                            activePage={activePage}
                            onClickPage={handleClickPage}
                        ></Pagination>
                    </span>
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
                                    onClick={() => setPageCount(2)}
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => setPageCount(5)}
                                >
                                    5
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => setPageCount(10)}
                                >
                                    10
                                </a>
                            </div>
                        </button>
                        <span style={{ margin: "10px" }}>items</span>
                    </span>
                    {(activePage - 1) * pageCount + 1}-
                    {(activePage - 1) * pageCount + pageCount} of {pageCount}{" "}
                    items
                    <button
                        style={{
                            height: "100%",
                            padding: "10px",
                            width: "5%",
                            border: "1px solid white",
                        }}
                    >
                        <i className="bi bi-arrow-repeat"></i>
                    </button>
                </div> */}
            </main>
        </>
    );
};

export default ShipmentList;
