import React, { useEffect, useState } from "react";
import Pagination from "../pagination";
import getData from "../service/get-shipping-data.service";
import Tooltip from "./tooltip";

const Shipping = () => {
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
    const [editMethod, setEditMethod] = useState(false);
    const [saveMethod, setSaveMethod] = useState(false);

    const handleEditShippingMethod = () => {
        setEditMethod(true);
    };

    const handleSaveShippingMethod = () => {
        setSaveMethod(true);
    };

    return (
        <div>
            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "20px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <Tooltip
                    label={"Shipping method"}
                    tooltipText={"The unique number of this order"}
                    data={"Ground"}
                />
                {editMethod ? (
                    <div>
                        <div></div>
                        <form style={{ padding: "5px", margin: "5px" }}>
                            <div
                                style={{
                                    // display: "flex",
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    onClick={() => handleSaveShippingMethod()}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-lg"
                                    onClick={() => setEditMethod(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                        {saveMethod ? (
                            <div
                                className="modal"
                                style={{
                                    display: saveMethod ? "block" : "none",
                                }}
                            >
                                <div
                                    className="modal-backdrop"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    }}
                                    onClick={() => {
                                        // close modal when outside of modal is clicked
                                        setSaveMethod(false);
                                    }}
                                >
                                    <div
                                        className="modal-content"
                                        onClick={(e) => {
                                            // do not close modal if anything inside modal content is clicked
                                            e.stopPropagation();
                                        }}
                                        style={{
                                            textAlign: "left",
                                            width: "30%",
                                            marginLeft: "40%",
                                            marginTop: "5%",
                                            border: "1px solid gray",
                                            boxShadow: "1px 1px 10px gray",
                                            borderRadius: "10px",
                                            padding: "20px",
                                        }}
                                    >
                                        <div className="container">
                                            <h1>Are you sure?</h1>
                                            <hr />
                                            <p>
                                                Are you sure you want to perform
                                                this action?
                                            </p>
                                            <br />

                                            <div className="clearfix">
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    style={{
                                                        border: "1px solid gray",
                                                        backgroundColor: "gray",
                                                        color: "white",
                                                        marginRight: "10px",
                                                    }}
                                                    onClick={() =>
                                                        setSaveMethod(false)
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    // onClick={deleteProfileList}
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div />
                        )}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button
                            type="button"
                            className="btn btn-danger btn-lg"
                            style={{
                                backgroundColor: "#3c8dbc",
                                border: "1px solid #3c8dbc",
                            }}
                            onClick={() => handleEditShippingMethod()}
                        >
                            Edit
                        </button>
                    </div>
                )}
                <Tooltip
                    label={"Shipping status"}
                    tooltipText={"The unique number of this order"}
                    data={"Delivered"}
                />
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

export default Shipping;
