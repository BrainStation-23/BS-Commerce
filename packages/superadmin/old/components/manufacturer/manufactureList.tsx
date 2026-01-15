import _ from "lodash";
import Pagination from "../common/pagination";
import React, { useEffect, useState } from "react";
import SingleManufacturer from "./singleManufacturer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "../sales/service/modal";
import axios from "axios";
import { userAPI } from "../../APIs/index";
import Link from "next/link";
import { useRouter } from "next/router";

const ManufactureList = ({ manufactureData }: any) => {
    const router = useRouter();
    const [search, setSearch] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(5);
    const [checkbox, setCheckbox] = useState([]);
    const [req, setReq] = useState(false);

    const handleCheckbox = (e: any) => {
        let isChecked = e.target.checked;
        let val = e.target.value;
        let newCheckbox: any = [...checkbox, val];
        isChecked
            ? setCheckbox(newCheckbox)
            : setCheckbox(checkbox.filter((v) => v !== val));
    };

    const handleReq = () => {
        setModal({ ...modal, delete: false });
        setReq(false);
    };

    const [modal, setModal] = useState({
        delete: false,
    });

    const paginatedData = () => {
        const start = (activePage - 1) * pageCount;
        const requiredData = manufactureData.manufacturers.slice(
            start,
            start + pageCount
        );
        return requiredData;
    };

    const paginateData = paginatedData();

    const handleDelete = () => {
        setModal({ ...modal, delete: true });
    };

    const handleDeleteManufacture = () => {
        checkbox.length === 1
            ? userAPI.deleteManufacturer(checkbox[0], router)
            : setReq(true);
        
        setModal({ ...modal, delete: false });

    };

    const handleClickPage = (activePage: any) => {
        setActivePage(activePage);
    };

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Manufacturers</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <Link href="/Admin/Manufacturer/add-new" passHref>
                                <button
                                    type="button"
                                    style={{
                                        borderRadius: "5px",
                                        backgroundColor: "#007bff",
                                        border: "1px solid #007bff",
                                        color: "white",
                                        marginLeft: "10px",
                                    }}
                                    className="btn btn-info btn-lg"
                                >
                                    <i className="bi bi-plus-square"></i> Add
                                    new
                                </button>
                            </Link>
                            <button
                                type="button"
                                style={{
                                    borderRadius: "5px",
                                    backgroundColor: "#28a745",
                                    border: "1px solid #28a745",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-box-arrow-in-down"> </i>
                                Export
                            </button>
                            <button
                                type="button"
                                style={{
                                    borderRadius: "5px",
                                    backgroundColor: "#3d9970",
                                    border: "1px solid #3d9970",
                                    color: "white",
                                    marginLeft: "10px",
                                }}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>
                                Import
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                style={{
                                    borderRadius: "5px",
                                    backgroundColor: "#dd4b39",
                                    marginLeft: "10px",
                                }}
                                onClick={() => handleDelete()}
                            >
                                <i className="bi bi-trash"> </i>Delete
                                (selected)
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setSearch(!search)}
                    aria-controls="prouctInfoTab"
                    data-bs-toggle="collapse"
                    data-bs-target="#prouctInfoTab"
                    aria-expanded="true"
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                        // transition: '10s'
                    }}
                >
                    <i className="bi bi-search"></i> Search
                </button>

                {modal.delete ? (
                    <div
                        className="modal"
                        style={{ display: modal.delete ? "block" : "none" }}
                    >
                        <div
                            className="modal-backdrop"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                            }}
                            onClick={() => {
                                // close modal when outside of modal is clicked
                                setModal({ ...modal, delete: false });
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
                                        Are you sure you want to delete this
                                        item?
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
                                                setModal({
                                                    ...modal,
                                                    delete: false,
                                                })
                                            }
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteManufacture()
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div />
                )}

                {req ? (
                    <div
                        className="modal"
                        style={{ display: `{modal.req` ? "block" : "none" }}
                    >
                        <div
                            className="modal-backdrop"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                            }}
                            onClick={() =>
                                // close modal when outside of modal is clicked
                                handleReq()
                            }
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
                                    <h1>Information</h1>
                                    <hr />
                                    <p>Please select only one record.</p>
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
                                            onClick={() => handleReq()}
                                        >
                                            Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {search ? (
                    <div style={{ marginLeft: "20px" }}>
                        <Formik
                            initialValues={{
                                name: "",
                                published: "",
                            }}
                            onSubmit={(values, actions) => {
                                const data = {
                                    name: values.name,
                                    published: values.published,
                                };
                                // handleSearchSubmit(data);
                                actions.setSubmitting(false);
                            }}
                        >
                            {(formikprops) => {
                                return (
                                    <Form onSubmit={formikprops.handleSubmit}>
                                        <div
                                            style={{
                                                textAlign: "left",
                                                marginTop: "20px",
                                            }}
                                        >
                                            <div className="row">
                                                <div className="col-2">
                                                    <strong className="fs-6 me-1">
                                                        Manufacturer name
                                                    </strong>
                                                    <span>
                                                        <i
                                                            className="bi bi-question-circle-fill"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom"
                                                            title="A manufacturer name"
                                                            style={{
                                                                color: "#3c8dbc",
                                                            }}
                                                        ></i>
                                                    </span>
                                                </div>
                                                <div className="col-3">
                                                    <Field
                                                        type="text"
                                                        className="p-2 w-100 mb-2"
                                                        id="name"
                                                        name="name"
                                                    />
                                                </div>

                                                <div className="invalid-feedback d-block">
                                                    {/* <ErrorMessage name="firstName" /> */}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="row mt-1">
                                                    <div className="col-2">
                                                        <strong className="fs-6 me-1">
                                                            Published
                                                        </strong>
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="bottom"
                                                                title="A manufacturer name"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </div>
                                                    <div className="col-3">
                                                        <Field
                                                            as="select"
                                                            className="p-2 w-100"
                                                            id="published"
                                                            name="published"
                                                        >
                                                            <option>All</option>
                                                            <option>
                                                                Published only
                                                            </option>
                                                            <option>
                                                                Unpublished only
                                                            </option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="d-flex flex-wrap justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary px-5"
                                                style={{
                                                    background: "#3c8dbc",
                                                    border: "none",
                                                    marginBottom: "20px",
                                                }}
                                            >
                                                <span>
                                                    <i className="bi bi-search me-2"></i>
                                                </span>
                                                Search
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                ) : (
                    <></>
                )}

                <div>
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
                                    {/* <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                /> */}
                                </th>
                                <th>
                                    <span>Name</span>
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    <span>Published</span>
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    <span>Display order</span>
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    <span>Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginateData.length > 0 &&
                                paginateData.map((manufacturer: any) => (
                                    <SingleManufacturer
                                        key={manufacturer.id}
                                        manufacturer={manufacturer}
                                        setCheckbox={setCheckbox}
                                        checkbox={checkbox}
                                        handleCheckbox={handleCheckbox}
                                    ></SingleManufacturer>
                                ))}
                        </tbody>
                    </table>
                    <div
                        className="d-flex justify-content-between"
                        style={{ fontSize: "18px" }}
                    >
                        <span>
                            <Pagination
                                totalItems={
                                    manufactureData.manufacturers.length
                                }
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
                        {(activePage - 1) * pageCount + pageCount} of{" "}
                        {pageCount} items
                        <button
                            style={{
                                height: "100%",
                                padding: "10px",
                                width: "5%",
                                border: "1px solid white",
                            }}
                            onClick={() =>
                                (window.location.href = `http://localhost:3001/Admin/Manufacturer/list`)
                            }
                        >
                            <i className="bi bi-arrow-repeat"></i>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ManufactureList;
