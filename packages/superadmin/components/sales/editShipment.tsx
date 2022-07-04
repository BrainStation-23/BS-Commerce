import { useState } from "react";
import Link from "next/link";
import Tooltip from "./service/tooltip";

const EditShipment = ({singleShipment}: any) => {
    const [modal, setModal] = useState({
        editShipped: false,
        editDelivered: false,
        delete: false,
    });

    const handleDelete = () => {
        setModal({ ...modal, delete: true });
    };

    const handleEditShipped = () => {
        setModal({ ...modal, editShipped: true });
    };

    const handleEditDelivered = () => {
        setModal({ ...modal, editDelivered: true });
    };

    return (
        <>
            <main className="px-5">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="d-flex justify-content-between ">
                        <h1 className="h2">View shipment details</h1>
                        <div style={{ marginLeft: "10px", fontSize: "20px" }} className="pt-1 pb-2 mb-2">
                            <Link  href="/Admin/Shipment/List" passHref>
                            <p style={{cursor: "pointer", color: "#3c8dbc"}}><i className="bi bi-arrow-left-circle-fill"></i>{" "}back to shipment list</p>
                            </Link>
                        </div>
                    </div>

                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button
                                type="button"
                                className="btn btn-info btn-lg"
                                style={{ marginRight: "10px", color: "white" }}
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>
                                Print packaging slip
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                style={{ backgroundColor: "#dd4b39" }}
                                onClick={() => handleDelete()}
                            >
                                <i className="bi bi-trash"> </i>Delete
                            </button>
                            {modal.delete ? (
                                <div
                                    className="modal"
                                    style={{
                                        display: modal.delete
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
                                                delete: false,
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
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    style={{
                                                        marginLeft: "100%",
                                                    }}
                                                    onClick={() =>
                                                        setModal({
                                                            ...modal,
                                                            delete: false,
                                                        })
                                                    }
                                                    aria-label="Close"
                                                ></button>
                                                <h1>Are you sure?</h1>
                                                <hr />
                                                <p>
                                                    Are you sure you want to
                                                    delete this item?
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
                                                                delete: false,
                                                            })
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
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
                        </div>
                    </div>
                </div>

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
                        label={"Order #"}
                        tooltipText={"The unique number of this order"}
                        data={singleShipment?.order}
                    />
                    <Tooltip
                        label={"Tracking number"}
                        tooltipText={"The unique number of this order"}
                        data={singleShipment?.tracking_number}
                    />
                    <Tooltip
                        label={"Admin comment"}
                        tooltipText={"The unique number of this order"}
                        data={""}
                    />
                    <Tooltip
                        label={"Total weight"}
                        tooltipText={"The unique number of this order"}
                        data={singleShipment?.total_weight}
                    />
                    <Tooltip
                        label={"Date shipped"}
                        tooltipText={"The unique number of this order"}
                        data={singleShipment?.date_shipped}
                    />
                    <div style={{ textAlign: "center" }}>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => handleEditShipped()}
                        >
                            Edit
                        </button>
                    </div>
                    {modal.editShipped ? (
                        <>
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        style={{
                                            width: "40%",
                                            marginLeft: "40%",
                                        }}
                                        placeholder=""
                                    />
                                    <span>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() =>
                                                setModal({
                                                    ...modal,
                                                    editShipped: false,
                                                })
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : null}

                    <Tooltip
                        label={"Date delivered"}
                        tooltipText={"The unique number of this order"}
                        data={singleShipment?.date_delivered}
                    />
                    <div style={{ textAlign: "center" }}>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => handleEditDelivered()}
                        >
                            Edit
                        </button>
                        {modal.editDelivered ? (
                            <>
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            padding: "5px",
                                            marginRight: "100px",
                                        }}
                                        className="col"
                                    >
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            style={{
                                                width: "40%",
                                                marginLeft: "40%",
                                            }}
                                            placeholder=""
                                        />
                                        <span>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    setModal({
                                                        ...modal,
                                                        editDelivered: false,
                                                    })
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>

                <div style={{ border: "1px solid #dddddd" }}>
                    <div style={{ margin: "20px", fontSize: "20px" }}>
                        Products shipped
                    </div>
                    <hr />
                    <div style={{ margin: "20px" }}>
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
                                        <span>Product</span>
                                    </th>
                                    <th>
                                        <span>SKU</span>
                                    </th>
                                    <th>
                                        <span>Warehouse</span>
                                    </th>
                                    <th>
                                        <span>Item weight</span>
                                    </th>
                                    <th>
                                        <span>Item dimensions</span>
                                    </th>
                                    <th>
                                        <span>Qty shipped</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ fontSize: "20px" }}>
                                    <td>
                                        <span>Levi 511 Jeans</span>
                                    </td>
                                    <td>
                                        <span>LV_511_JN</span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span>
                                            2.00 x 2.00 x 2.00 [inch(es)]
                                        </span>
                                    </td>
                                    <td>
                                        <span>1</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default EditShipment;
