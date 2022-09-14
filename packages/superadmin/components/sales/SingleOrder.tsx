import type { NextComponentType } from "next";
import Link from "next/link";

const SingleOrder: NextComponentType = (props: any) => {
    const {order} = props;
    return (
        <>
            <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
                <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>{order.id}</td>
                {order.order_status === "Complete" ? (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <button
                            type="button"
                            className="btn btn-success"
                            style={{
                                margin: "15px",
                                backgroundColor: "#00a65a",
                                border: "1px solid #00a65a",
                            }}
                        >
                            {order.order_status}
                        </button>
                    </td>
                ) : order.order_status === "Processing" ? (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{
                                margin: "15px",
                                backgroundColor: "#00c0ef",
                                border: "1px solid #00c0ef",
                            }}
                        >
                            {order.order_status}
                        </button>
                    </td>
                ) : (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <button
                            type="button"
                            className="btn btn-warning"
                            style={{
                                margin: "15px",
                                backgroundColor: "#f39c12",
                                color: "white",
                                border: "1px solid #f39c12",
                            }}
                        >
                            {order.order_status}
                        </button>
                    </td>
                )}
                <td style={{ border: "1px solid #dddddd" }}>
                    {order.payment_status}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {order.shipping_status}
                </td>
                <td style={{ color: "#3c8dbc" }}>{order.customer}</td>
                <td style={{ border: "1px solid #dddddd" }}>{order.store}</td>
                <td style={{ border: "1px solid #dddddd" }}>{order.created}</td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {order.order_total}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    <Link href="/Admin/Order/edit" passHref>
                    <button
                        type="button"
                        className="btn btn-light btn-lg"
                    >
                        <i className="bi bi-eye"> {order.view}</i>
                    </button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleOrder;
