import React from "react";
import { useState } from "react";

const Info = () => {
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
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <p>
                    <b>Order</b> # 5
                </p>
                <p>
                    <b>Created on</b> 3/13/2017 6:20:10 AM
                </p>
                <p>
                    <b>Customer </b>
                    <span style={{ color: "#3c8dbc" }}>
                        victoria_victoria@nopCommerce.com
                    </span>
                </p>
                <p>
                    <b>Order status Complete</b>
                </p>
                <button
                    type="button"
                    className="btn btn-danger btn-lg"
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
                                    setModal({ ...modal, change_status: false })
                                }
                            >
                                Cancel
                            </button>
                            <p>
                                This option is only for advanced users (not
                                recommended to change manually). All appropriate
                                actions (such as inventory adjustment, sending
                                notification emails, reward points, gift card
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
                                                boxShadow: "1px 1px 10px gray",
                                                borderRadius: "10px",
                                                padding: "20px",
                                            }}
                                        >
                                            <div className="container">
                                                {/* <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        setModal({
                                            ...modal,
                                            cancel: false,
                                        })
                                    }
                                    aria-label="Close"
                                ></button> */}
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
                        className="btn btn-danger btn-lg"
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
                                {/* <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        setModal({
                                            ...modal,
                                            cancel: false,
                                        })
                                    }
                                    aria-label="Close"
                                ></button> */}
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
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <p>
                    <b>Order subtotal</b> $43.50 excl tax
                </p>
                <p>
                    <b>Order shipping</b> $0.00 excl tax
                </p>
                <p>
                    <b>Order tax</b> $0.00
                </p>
                <p>
                    <b>Order total</b> $43.50
                </p>
                <p>
                    <b>Profit</b> $43.50
                </p>

                {modal.total ? (
                    <div>
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
                                    Order subtotal
                                    <input
                                        type="text"
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
                                    Order subtotal discount
                                    <input
                                        type="text"
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
                                    Order shipping
                                    <input
                                        type="text"
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
                                    Payment method additional fee
                                    <input
                                        type="text"
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
                                    Order tax rates
                                    <input
                                        type="text"
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
                                    Order tax
                                    <input
                                        type="text"
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
                                    Order discount
                                    <input
                                        type="text"
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
                                    Order total
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>

                                <button
                                    type="button"
                                    // style={{
                                    //     height: "50px",
                                    //     width: "100px",
                                    //     margin: "15px",
                                    // }}
                                    className="btn btn-primary btn-lg"
                                    onClick={() => handleSaveOrderTotal()}
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
                                    className="btn btn-primary"
                                    onClick={() =>
                                        setModal({ ...modal, total: false })
                                    }
                                >
                                    Cancel
                                </button>
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
                                                {/* <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        setModal({
                                            ...modal,
                                            cancel: false,
                                        })
                                    }
                                    aria-label="Close"
                                ></button> */}
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
                        </form>
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
                <p>
                    <b>Payment method</b> Check / Money Order
                </p>
                <p>
                    <b>Payment status</b> Paid
                </p>
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
            { modal.refund ? (
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
                                {/* <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        setModal({
                                            ...modal,
                                            cancel: false,
                                        })
                                    }
                                    aria-label="Close"
                                ></button> */}
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
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                }}
            >
                <p>
                    <b>Store</b> Your store name
                </p>
                <p>
                    <b>Order GUID</b> c3a5b32c-71a9-4d32-8d0a-94e586ec89c6
                </p>
                <p>
                    <b>Customer IP address</b> 127.0.0.1
                </p>
            </div>
        </>
    );
};

export default Info;
