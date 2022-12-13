import type { NextComponentType } from "next";
import Link from "next/link";

const SingleShipment = ({ shipment }: any) => {
    return <>
        <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
            <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>
                {shipment.shipment}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
                {shipment.order}
            </td>
            {shipment.pickup ? (
                <td style={{ border: "1px solid #dddddd" }}>
                    <i className="bi bi-check2"></i>
                </td>
            ) : (
                <td style={{ border: "1px solid #dddddd" }}>
                    <i className="bi bi-x"></i>
                </td>
            )}
            <td style={{ color: "#3c8dbc" }}>{shipment.tracking_number}</td>
            <td style={{ border: "1px solid #dddddd" }}>
                {shipment.total_weight}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
                {shipment.date_shipped}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
                {shipment.date_ready}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
                {shipment.date_delivered}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
                <Link href="/Admin/Shipment/edit" passHref legacyBehavior>
                    <button type="button" className="btn btn-light btn-lg">
                        <i className="bi bi-eye"> {shipment.view}</i>
                    </button>
                </Link>
            </td>
        </tr>
    </>;
};

export default SingleShipment;
