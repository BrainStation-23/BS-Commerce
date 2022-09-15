import React, { useEffect, useState } from "react";
import Pagination from "../pagination";
import getData from "../service/get-shipping-data.service";

const notes = () => {

    return (
        <div>
            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "20px",
                    padding: "20px",
                }}
            >
                Order notes
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
                            <th>
                                <span>Created on</span>
                            </th>
                            <th>
                                <span>Note</span>
                            </th>
                            <th>
                                <span>Attached file</span>
                            </th>
                            <th>
                                <span>Display to custome</span>
                            </th>
                            <th>
                                <span>Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "20px" }}>
                            <td>
                                <span>03/13/2017 6:20:10 AM</span>
                            </td>
                            <td>
                                <span>Order delivered</span>
                            </td>
                            <td>
                                <span>No file attached</span>
                            </td>
                            <td>
                                <span>Cross</span>
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
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                >
                                    5
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                >
                                    10
                                </a>
                            </div>
                        </button>
                        <span style={{ margin: "10px" }}>items</span>
                    </span>
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
            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "20px",
                    padding: "20px",
                }}
            >
                <form>
                    <div className="form-group">
                        Note
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                        ></textarea>
                    </div>
                    Attached file
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                    </div>
                    Display to customer
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#3c8dbc", marginTop:"20px"}}
                    >
                        Add order note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default notes;
