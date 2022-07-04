import React, {useState } from "react";

const Products = () => {
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [editProduct, setEditProduct] = useState(false);

    const handleDeleteProduct = () => {
        setDeleteProduct(true);
    };

    const handleEditProduct = () => {
        setEditProduct(true);
    };

    return (
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
                        <th>
                            <span>Picture</span>
                        </th>
                        <th>
                            <span>Product name</span>
                        </th>
                        <th>
                            <span>Price</span>
                        </th>
                        <th>
                            <span>Quantity</span>
                        </th>
                        <th>
                            <span>Discount</span>
                        </th>
                        <th>
                            <span>Total</span>
                        </th>
                        <th>
                            <span>Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ fontSize: "20px" }}>
                        <td>
                            <span>Picture</span>
                        </td>
                        <td>
                            <span>SKU: LV_511_JN</span>
                        </td>
                        <td>
                            <span>$43.50 excl tax</span>
                            {editProduct ? (
                                <>
                                    <span>
                                        <p>Incl tax: </p>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <p>Excl tax: </p>
                                        <input type="text" />
                                    </span>
                                </>
                            ) : (
                                <></>
                            )}
                        </td>
                        <td>
                            <span>1</span>
                            <br />
                            {editProduct ? (
                                <>
                                    <span>
                                        <input type="text" />
                                    </span>
                                </>
                            ) : (
                                <></>
                            )}
                        </td>
                        <td>
                            <span>$0.00 excl tax</span>
                            {editProduct ? (
                                <>
                                    <span>
                                        <p>Incl tax: </p>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <p>Excl tax: </p>
                                        <input type="text" />
                                    </span>
                                </>
                            ) : (
                                <></>
                            )}
                        </td>
                        <td>
                            <span>$43.50 excl tax</span>
                            {editProduct ? (
                                <>
                                    <span>
                                        <p>Incl tax: </p>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <p>Excl tax: </p>
                                        <input type="text" />
                                    </span>
                                </>
                            ) : (
                                <></>
                            )}
                        </td>
                        <td>
                            {editProduct ? (
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg"
                                        style={{
                                            border: "1px solid #dddddd",
                                            marginRight: "10px",
                                        }}
                                    >
                                        <i className="bi bi-pencil"> Save</i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg"
                                        style={{ border: "1px solid #dddddd" }}
                                        onClick={() => setEditProduct(false)}
                                    >
                                        <i className="bi bi-trash"> Cancel</i>
                                    </button>
                                </span>
                            ) : (
                                <span>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg"
                                        style={{
                                            border: "1px solid #dddddd",
                                            marginRight: "10px",
                                        }}
                                        onClick={() => handleEditProduct()}
                                    >
                                        <i className="bi bi-pencil"> Edit</i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light btn-lg"
                                        style={{ border: "1px solid #dddddd" }}
                                        onClick={() => handleDeleteProduct()}
                                    >
                                        <i className="bi bi-trash"> Delete</i>
                                    </button>
                                    {deleteProduct ? (
                                        <div
                                            className="modal"
                                            style={{
                                                display: deleteProduct
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
                                                    setDeleteProduct(false);
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
                                                            Are you sure you
                                                            want to perform this
                                                            action?
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
                                                                    setDeleteProduct(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
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
                                </span>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div
                style={{
                    textAlign: "left",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    style={{
                        backgroundColor: "#3c8dbc",
                        border: "1px solid #3c8dbc",
                    }}
                >
                    Add product
                </button>
            </div>
        </div>
    );
};

export default Products;
