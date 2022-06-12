import Info from "./service/info";
import Biling from "./service/billing";
import Shipping from "./service/shipping";
import Products from "./service/products";
import Notes from "./service/notes";
import { useState } from "react";

const EditOrder = () => {
    const [info, setInfo] = useState(false);
    const [billing, setBilling] = useState(false);
    const [products, setProducts] = useState(false);
    const [notes, setNotes] = useState(false);

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Edit order details</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button
                                type="button"
                                className="btn btn-info btn-lg"
                                style={{ marginRight: "10px", color: "white" }}
                            >
                                <i className="bi bi-file-earmark-pdf"> </i>
                                Invoice (PDF)
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                style={{ backgroundColor: "#dd4b39" }}
                            >
                                <i className="bi bi-trash"> </i>Delete
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setInfo(!info)}
                    aria-controls="example-collapse-text"
                    aria-expanded={info}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        // transition: '10s'
                    }}
                >
                    <i className="bi bi-info-lg"></i> Info
                </button>
                {info ? <Info /> : null}

                <button
                    onClick={() => setBilling(!billing)}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <i className="bi bi-truck"></i> Billing and shipping
                </button>
                {billing ? (
                    <div>
                        <Biling />
                        <Shipping />
                    </div>
                ) : null}

                <button
                    onClick={() => setProducts(!products)}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <i className="bi bi-list-ul"></i> Products
                </button>
                {products ? <Products /> : null}

                <button
                    onClick={() => setNotes(!notes)}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <i className="bi bi-sticky"></i> Order notes
                </button>

                {notes ? <Notes /> : null}
            </main>
        </>
    );
};

export default EditOrder;
