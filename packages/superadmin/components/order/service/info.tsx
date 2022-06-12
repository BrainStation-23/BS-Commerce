import React from "react";

const info = () => {
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
                >
                    Cancel order
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    style={{
                        backgroundColor: "#3c8dbc",
                        border: "1px solid #3c8dbc",
                    }}
                >
                    Change status
                </button>
            </div>

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

                <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    style={{
                        backgroundColor: "#3c8dbc",
                        border: "1px solid #3c8dbc",
                    }}
                >
                    Edit order totals
                </button>
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

            <div
                style={{
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px"
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

export default info;
