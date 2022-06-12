import React from "react";

const products = () => {
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
                        </td>
                        <td>
                            <span>1</span>
                        </td>
                        <td>
                            <span>$0.00 excl tax</span>
                        </td>
                        <td>
                            <span>$43.50 excl tax</span>
                        </td>
                        <td>
                            <span>
                                <button style={{ marginRight: "5px" }}>
                                    Edit
                                </button>
                                <button>Delete</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ textAlign: "left", marginTop: "20px" }}>
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
    );
};

export default products;
