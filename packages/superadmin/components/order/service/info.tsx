import React from "react";
import { useState } from "react";
import Tooltip from "./tooltip";
import { Field, Form, Formik } from "formik";

const Info = () => {
    function handleSearchSubmit(data: any) {
        console.log(data);
    }

    const [modal, setModal] = useState({
        cancel_order: false,
        change_status: false,
        change_status_save: false,
        save_order_totals: false,
        refund: false,
        total: false,
    });

    const handleCancel = () => {
        setModal({ ...modal, cancel_order: true });
    };

    const handleChange = () => {
        setModal({ ...modal, change_status: true });
    };

    const handleTotal = () => {
        setModal({ ...modal, total: true });
    };

    const handleSaveOrderTotal = () => {
        setModal({ ...modal, save_order_totals: true });
    };

    const handleSaveStatus = () => {
        setModal({ ...modal, change_status_save: true });
    };

    const handleRefund = () => {
        setModal({ ...modal, refund: true });
    };

    return (
        <>
            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <Tooltip
                    label="Order"
                    tooltipText={"The unique number of this order"}
                    data={"# 5"}
                />
                <Tooltip
                    label={"Created on"}
                    tooltipText={"The unique number of this order"}
                    data={"3/13/2017 6:20:10 AM"}
                />
                <Tooltip
                    label={"Customer"}
                    tooltipText={"The unique number of this order"}
                    data={"victoria_victoria@nopCommerce.com"}
                />
                <Tooltip
                    label={"Order status"}
                    tooltipText={"The unique number of this order"}
                    data={"Complete"}
                />
                <div style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            backgroundColor: "#dd4b39",
                            marginRight: "10px",
                        }}
                        onClick={() => handleCancel()}
                    >
                        Cancel order
                    </button>

                    {modal.change_status ? (
                        <div>
                            <button
                                className="dropdown"
                                style={{
                                    marginTop: "10px",
                                    width: "30%",
                                    padding: "10px",
                                    border: "1px solid gray",
                                    textAlign: "left",
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
                                    Pending
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">
                                        Processing
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Complete
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Cancelled
                                    </a>
                                </div>
                            </button>
                            <div
                                style={{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    width: "25%",
                                    marginLeft: "35%",
                                }}
                            >
                                <button
                                    type="button"
                                    className="btn btn-danger btn-lg"
                                    style={{
                                        marginRight: "10px",
                                        backgroundColor: "#3c8dbc",
                                        border: "1px solid #3c8dbc",
                                    }}
                                    onClick={() => handleSaveStatus()}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-lg"
                                    onClick={() =>
                                        setModal({
                                            ...modal,
                                            change_status: false,
                                        })
                                    }
                                >
                                    Cancel
                                </button>
                                <p>
                                    This option is only for advanced users (not
                                    recommended to change manually). All
                                    appropriate actions (such as inventory
                                    adjustment, sending notification emails,
                                    reward points, gift card
                                    activation/deactivation, etc) should be done
                                    manually in this case.
                                </p>
                                {modal.change_status_save ? (
                                    <div
                                        className="modal"
                                        style={{
                                            display: modal.change_status_save
                                                ? "block"
                                                : "none",
                                        }}
                                    >
                                        <div
                                            className="modal-backdrop"
                                            style={{
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.1)",
                                            }}
                                            onClick={() => {
                                                // close modal when outside of modal is clicked
                                                setModal({
                                                    ...modal,
                                                    change_status_save: false,
                                                });
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
                                                    boxShadow:
                                                        "1px 1px 10px gray",
                                                    borderRadius: "10px",
                                                    padding: "20px",
                                                }}
                                            >
                                                <div className="container">
                                                    <h1>Are you sure?</h1>
                                                    <hr />
                                                    <p>
                                                        Are you sure you want to
                                                        perform this action?
                                                    </p>
                                                    <br />

                                                    <div className="clearfix">
                                                        <button
                                                            type="button"
                                                            className="btn btn-light"
                                                            style={{
                                                                border: "1px solid gray",
                                                                backgroundColor:
                                                                    "gray",
                                                                color: "white",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                            onClick={() =>
                                                                setModal({
                                                                    ...modal,
                                                                    change_status_save:
                                                                        false,
                                                                })
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
                                    <></>
                                )}
                            </div>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{
                                backgroundColor: "#3c8dbc",
                                border: "1px solid #3c8dbc",
                            }}
                            onClick={() => handleChange()}
                        >
                            Change status
                        </button>
                    )}
                </div>
            </div>

            {modal.cancel_order ? (
                <div
                    className="modal"
                    style={{ display: modal.cancel_order ? "block" : "none" }}
                >
                    <div
                        className="modal-backdrop"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={() => {
                            // close modal when outside of modal is clicked
                            setModal({ ...modal, cancel_order: false });
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
                                    Are you sure you want to perform this
                                    action?
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
                                                cancel_order: false,
                                            })
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

            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <Tooltip
                    label={"Order subtotal"}
                    tooltipText={"The unique number of this order"}
                    data={"$43.50 excl tax"}
                />
                <Tooltip
                    label={"Order shipping"}
                    tooltipText={"The unique number of this order"}
                    data={"$0.00 excl tax"}
                />
                <Tooltip
                    label={"Order tax"}
                    tooltipText={"The unique number of this order"}
                    data={"$0.00"}
                />
                <Tooltip
                    label={"Order total"}
                    tooltipText={"The unique number of this order"}
                    data={"$43.50"}
                />
                <Tooltip
                    label={"Profit"}
                    tooltipText={"The unique number of this order"}
                    data={"$43.50"}
                />

                <div style={{ textAlign: "center" }}>
                    {modal.total ? (
                        <div>
                            <Formik
                                initialValues={{
                                    subtotalIncTax: "",
                                    subtotalExcTax: "",
                                    discountIncTax: "",
                                    discountExcTax: "",
                                    shippingIncTax: "",
                                    shippingExcTax: "",
                                    additionalIncTax: "",
                                    additionalExcTax: "",
                                    taxRates: "",
                                    tax: "",
                                    discount: "",
                                    total: "",
                                }}
                                onSubmit={(values, actions) => {
                                    const data = {
                                        subtotalIncTax: values.subtotalIncTax,
                                        subtotalExcTax: values.subtotalExcTax,
                                        discountIncTax: values.discountIncTax,
                                        discountExcTax: values.discountExcTax,
                                        shippingIncTax: values.shippingIncTax,
                                        shippingExcTax: values.shippingExcTax,
                                        additionalIncTax:
                                            values.additionalIncTax,
                                        additionalExcTax:
                                            values.additionalExcTax,
                                        taxRates: values.taxRates,
                                        tax: values.tax,
                                        discount: values.discount,
                                        total: values.total,
                                    };
                                    handleSearchSubmit(data);
                                    actions.setSubmitting(false);
                                }}
                            >
                                {(formikprops) => {
                                    return (
                                        <Form
                                            onSubmit={formikprops.handleSubmit}
                                        >
                                            <div
                                                style={{
                                                    marginLeft: "20%",
                                                    marginRight: "20%",
                                                    marginTop: "50px",
                                                }}
                                                className=""
                                            >
                                                <div>
                                                    <label
                                                        htmlFor="subtotal"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order subtotal{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <label htmlFor="">
                                                        incl tax:
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="subtotalIncTax"
                                                        name="subtotalIncTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                    <label htmlFor="">
                                                        excl tax:
                                                    </label>

                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="subtotalExcTax"
                                                        name="subtotalExcTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="discount"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order subtotal discount{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <label htmlFor="">
                                                        incl tax:
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="discountIncTax"
                                                        name="discountIncTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                    <label htmlFor="">
                                                        excl tax:
                                                    </label>

                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="discountExcTax"
                                                        name="discountExcTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="shipping"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order shipping{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <label htmlFor="">
                                                        incl tax:
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="shippingIncTax"
                                                        name="shippingIncTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                    <label htmlFor="">
                                                        excl tax:
                                                    </label>

                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="shippingExcTax"
                                                        name="shippingExcTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="additional"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Payment method
                                                        additional fee{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <label htmlFor="">
                                                        incl tax:
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="additionalIncTax"
                                                        name="additionalIncTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                    <label htmlFor="">
                                                        excl tax:
                                                    </label>

                                                    <Field
                                                        type="number"
                                                        className="p-2 w-20 mb-2"
                                                        id="additionalExcTax"
                                                        name="additionalExcTax"
                                                        style={{
                                                            margin: "10px",
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="taxRates"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order tax rates{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="p-2 w-100 mb-2"
                                                        id="taxRates"
                                                        name="taxRates"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="tax"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order tax{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-100 mb-2"
                                                        id="tax"
                                                        name="tax"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="discount"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order discount{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-100 mb-2"
                                                        id="discount"
                                                        name="discount"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="total"
                                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                                    >
                                                        Order total{" "}
                                                        <span>
                                                            <i
                                                                className="bi bi-question-circle-fill"
                                                                style={{
                                                                    color: "#3c8dbc",
                                                                }}
                                                            ></i>
                                                        </span>
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        className="p-2 w-100 mb-2"
                                                        id="total"
                                                        name="total"
                                                    />
                                                </div>
                                            </div>
                                            <br />
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                onClick={() =>
                                                    handleSaveOrderTotal()
                                                }
                                            >
                                                Save order totals
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    height: "50px",
                                                    width: "100px",
                                                    margin: "15px",
                                                }}
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    setModal({
                                                        ...modal,
                                                        total: false,
                                                    })
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </Form>
                                    );
                                }}
                            </Formik>

                            {modal.save_order_totals ? (
                                <div
                                    className="modal"
                                    style={{
                                        display: modal.save_order_totals
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    <div
                                        className="modal-backdrop"
                                        style={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.1)",
                                        }}
                                        onClick={() => {
                                            // close modal when outside of modal is clicked
                                            setModal({
                                                ...modal,
                                                save_order_totals: false,
                                            });
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
                                                    Are you sure you want to
                                                    perform this action?
                                                </p>
                                                <br />

                                                <div className="clearfix">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        style={{
                                                            border: "1px solid gray",
                                                            backgroundColor:
                                                                "gray",
                                                            color: "white",
                                                            marginRight: "10px",
                                                        }}
                                                        onClick={() =>
                                                            setModal({
                                                                ...modal,
                                                                save_order_totals:
                                                                    false,
                                                            })
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
                                <></>
                            )}
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-danger btn-lg"
                            style={{
                                backgroundColor: "#3c8dbc",
                                border: "1px solid #3c8dbc",
                            }}
                            onClick={() => handleTotal()}
                        >
                            Edit order totals
                        </button>
                    )}
                </div>
                <Tooltip
                    label={"Payment method"}
                    tooltipText={"The unique number of this order"}
                    data={"Check / Money Order"}
                />
                <Tooltip
                    label={"Payment status"}
                    tooltipText={"The unique number of this order"}
                    data={"Paid"}
                />
                <div style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        style={{
                            backgroundColor: "#3c8dbc",
                            border: "1px solid #3c8dbc",
                            marginRight: "10px",
                        }}
                        onClick={() => handleRefund()}
                    >
                        Refund (Offline)
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-lg"
                        style={{
                            backgroundColor: "#3c8dbc",
                            border: "1px solid #3c8dbc",
                        }}
                    >
                        Partial refund (Offline)
                    </button>
                </div>
            </div>
            {modal.refund ? (
                <div
                    className="modal"
                    style={{ display: modal.refund ? "block" : "none" }}
                >
                    <div
                        className="modal-backdrop"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={() => {
                            // close modal when outside of modal is clicked
                            setModal({ ...modal, refund: false });
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
                                    Are you sure you want to perform this
                                    action?
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
                                                refund: false,
                                            })
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

            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <Tooltip
                    label={"Store"}
                    tooltipText={"The unique number of this order"}
                    data={"Your store name"}
                />
                <Tooltip
                    label={"Order GUID"}
                    tooltipText={"The unique number of this order"}
                    data={"c3a5b32c-71a9-4d32-8d0a-94e586ec89c6"}
                />
                <Tooltip
                    label={"Customer IP address"}
                    tooltipText={"The unique number of this order"}
                    data={"127.0.0.1"}
                />
            </div>
        </>
    );
};

export default Info;
