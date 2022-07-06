import React from "react";
import { useState } from "react";
import Tooltip from "./tooltip";
import { Field, Form, Formik } from "formik";
import Modal from "./modal";
import { FC } from "react";
interface SingleOrder {
    id: number;
    order_status: string;
    payment_status: string;
    shipping_status: string;
    store: string;
    view: string;
}

const Info = ({singleOrder}: any) => {
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

    const handleCancelOff = () => {
        setModal({ ...modal, cancel_order: false });
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

    const handleSaveOrderTotalOff = () => {
        setModal({ ...modal, save_order_totals: false });
    };

    const handleSaveStatus = () => {
        setModal({ ...modal, change_status_save: true });
    };

    const handleSaveStatusOff = () => {
        setModal({ ...modal, change_status_save: false });
    };

    const handleRefund = () => {
        setModal({ ...modal, refund: true });
    };

    const handleRefundOff = () => {
        setModal({ ...modal, refund: false });
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
                    data={singleOrder.id}
                />
                <Tooltip
                    label={"Created on"}
                    tooltipText={"The unique number of this order"}
                    data={singleOrder.created}
                />
                <Tooltip
                    label={"Customer"}
                    tooltipText={"The unique number of this order"}
                    data={singleOrder.customer}
                />

                <div className="row">
                    <div className="col" style={{ marginLeft: "15%" }}>
                        <Tooltip
                            label={"Order status"}
                            tooltipText={"The unique number of this order"}
                            data={singleOrder.order_status}
                        />
                    </div>
                    <div className="col" style={{}}>
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
                                        className="btn btn-danger"
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
                                        className="btn btn-secondary"
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
                                        This option is only for advanced users
                                        (not recommended to change manually).
                                        All appropriate actions (such as
                                        inventory adjustment, sending
                                        notification emails, reward points, gift
                                        card activation/deactivation, etc)
                                        should be done manually in this case.
                                    </p>
                                    {modal.change_status_save ? (
                                        <Modal
                                            state={"change_status_save"}
                                            handleStatus={handleSaveStatusOff}
                                        />
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
            </div>

            {modal.cancel_order ? (
                <Modal state={"cancel_order"} handleStatus={handleCancelOff} />
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
                    data={singleOrder.order_total}
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
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    handleSaveOrderTotal()
                                                }
                                            >
                                                Save order totals
                                            </button>
                                            <button
                                                type="button"
                                                style={{
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
                                <Modal
                                    state={"save_order_totals"}
                                    handleStatus={handleSaveOrderTotalOff}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <div
                            style={{ textAlign: "center", marginRight: "42%" }}
                        >
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{
                                    backgroundColor: "#3c8dbc",
                                    border: "1px solid #3c8dbc",
                                }}
                                onClick={() => handleTotal()}
                            >
                                Edit order totals
                            </button>
                        </div>
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
                    data={singleOrder.payment_status}
                />
                <div style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="btn btn-danger"
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
                        className="btn btn-danger"
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
                <Modal state={"refund"} handleStatus={handleRefundOff} />
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
                    data={singleOrder.store}
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
