import Info from "./service/info";
import Biling from "./service/billing";
import Shipping from "./service/shipping";
import Products from "./service/products";
import Notes from "./service/notes";
import { useState } from "react";
import Link from "next/link";
import Tooltip from "./service/tooltip";

const EditShipment = () => {
    const [info, setInfo] = useState(false);
    const [billing, setBilling] = useState(false);
    const [products, setProducts] = useState(false);
    const [notes, setNotes] = useState(false);

    const [modal, setModal] = useState({
        delete: false,
    });

    const handleDelete = () => {
        setModal({ ...modal, delete: true });
    };

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div>
                        <h1 className="h2">View shipment details</h1>
                        <span>
                            <Link href="/editOrder" passHref>
                                <a>back to order details</a>
                            </Link>
                        </span>
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
                        data={"4-view"}
                    />
                    <Tooltip
                        label={"Tracking number"}
                        tooltipText={"The unique number of this order"}
                        data={""}
                    />
                    <Tooltip
                        label={"Admin comment"}
                        tooltipText={"The unique number of this order"}
                        data={""}
                    />
                    <Tooltip
                        label={"Total weight"}
                        tooltipText={"The unique number of this order"}
                        data={"2.00 [lb(s)]"}
                    />
                    <Tooltip
                        label={"Date ready for pickup"}
                        tooltipText={"The unique number of this order"}
                        data={"6/14/2022 2:04:12 AM"}
                    />
                    <Tooltip
                        label={"Date delivered"}
                        tooltipText={"The unique number of this order"}
                        data={"3/13/2017 6:20:10 AM"}
                    />
                    <div style={{ textAlign: "center" }}>
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{
                                backgroundColor: "#dd4b39",
                                marginRight: "10px",
                            }}
                            // onClick={() => handleCancel()}
                        >
                            Cancel order
                        </button>
                    </div>
                </div>

                <div style={{ border: "1px solid #dddddd" }}>
                    <div style={{ margin: "20px", fontSize: "20px" }}>Products shipped</div>
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
