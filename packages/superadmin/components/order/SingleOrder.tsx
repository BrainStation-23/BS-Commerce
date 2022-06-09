import type { NextComponentType } from "next";

const SingleOrder = ({ order }: any) => {
    return (
        <>
            <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
                <td style={{ textAlign: "center" }}>
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                    />
                </td>
                <td>{order.id}</td>
                {order.order_status === "Complete" ? (
                    <td>
                        <button type="button" className="btn btn-success">
                            {order.order_status}
                        </button>
                    </td>
                ) : order.order_status === "Processing" ? (
                    <td>
                        <button type="button" className="btn btn-primary">
                            {order.order_status}
                        </button>
                    </td>
                ) : (
                    <td>
                        <button type="button" className="btn btn-warning">
                            {order.order_status}
                        </button>
                    </td>
                )}
                <td>{order.payment_status}</td>
                <td>{order.shipping_status}</td>
                <td style={{ color: "#3c8dbc" }}>{order.customer}</td>
                <td>{order.store}</td>
                <td>{order.created}</td>
                <td>{order.order_total}</td>
                <td>
                    <button type="button" className="btn btn-light btn-lg">
                        <i className="bi bi-eye"> {order.view}</i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default SingleOrder;
