import React, { useEffect, useState } from "react";
import Pagination from "../pagination";
import getData from "../service/get-shipping-data.service";

const shipping = () => {
    // const [data, setData] = useState([]);
    // const [activePage, setActivePage] = useState(1);
    // const [pageCount, setPageCount] = useState(5);

    // useEffect(() => {
    //     const data: any = getData();
    //     setData(data);
    // }, []);

    // const paginatedData = () => {
    //     const start = (activePage - 1) * pageCount;
    //     const requiredData = data.slice(start, start + pageCount);
    //     return requiredData;
    // };

    // const paginateData = paginatedData();

    // const handleClickPage = (activePage: any) => {
    //     setActivePage(activePage);
    // };
    return (
        <div>
            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    fontSize: "20px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <p>
                    <b>Shipping method</b> Ground
                </p>
                <p>
                    <b>Shipping status</b> Delivered
                </p>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        style={{
                            backgroundColor: "#3c8dbc",
                            border: "1px solid #3c8dbc",
                        }}
                    >
                        Edit
                    </button>
                </div>
            </div>

            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "20px",
                    padding: "20px",
                }}
            >
                Shipments
                <hr />
                <table
                    className="table"
                    style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        margin: "10px",
                    }}
                >
                    <thead style={{ backgroundColor: "#dddddd" }}>
                        <tr style={{ fontSize: "20px" }}>
                            <th style={{ textAlign: "center" }}>
                                <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                />
                            </th>
                            <th>
                                <span>Shipment #</span>
                            </th>
                            <th>
                                <span>Order #</span>
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
                                <span>Date delivered</span>
                            </th>
                            <th>
                                <span>View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "20px" }}>
                            <td style={{ textAlign: "center" }}>
                                <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                />
                            </td>
                            <td>
                                <span>3</span>
                            </td>
                            <td>
                                <span>5</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>2.00[lb(s)]</span>
                            </td>
                            <td>
                                <span>3/13/2017 6:20:10 AM</span>
                            </td>
                            <td>
                                <span>3/13/2017 6:20:10 AM</span>
                            </td>
                            <td>
                                <span>View</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "18px" }}
                >
                    <span>
                        <Pagination
                            totalItems={10}
                            pageCount={5}
                            activePage={1}
                            onClickPage={1}
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
                                {2}
                            </a>
                            <div className="dropdown-menu">
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    // onClick={() => setPageCount(2)}
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    // onClick={() => setPageCount(5)}
                                >
                                    5
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    // onClick={() => setPageCount(10)}
                                >
                                    10
                                </a>
                            </div>
                        </button>
                        <span style={{ margin: "10px" }}>items</span>
                    </span>
                    {/* {((activePage-1)*pageCount)+1}-{((activePage-1)*pageCount)+pageCount} of {pageCount} items */}
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
                </div>
            </div>
        </div>
    );
};

export default shipping;
