import Info from "./service/info";
import Biling from "./service/billing";
import Shipping from "./service/shipping";
import Products from "./service/products";
import Notes from "./service/notes";
import { useState } from "react";
import Link from "next/link";

const EditOrder = ({singleOrder}: any) => {
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
            <main className="px-5">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="d-flex justify-content-between ">
                        <h1 className="h2">Edit order details{" "}</h1>
                        <div style={{ marginLeft: "10px", fontSize: "20px" }} className="pt-1 pb-2 mb-2">
                            <Link  href="/Admin/Order/List" passHref>
                            <p style={{cursor: "pointer", color: "#3c8dbc"}}><i className="bi bi-arrow-left-circle-fill"></i>{" "}back to order list</p>
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
                                Invoice (PDF)
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

                {modal.delete ? (
                    <div
                        className="modal"
                        style={{ display: modal.delete ? "block" : "none" }}
                    >
                        <div
                            className="modal-backdrop"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                            }}
                            onClick={() => {
                                // close modal when outside of modal is clicked
                                setModal({ ...modal, delete: false });
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
                                    <h1>Are you sure?</h1>
                                    <hr />
                                    <p>
                                        Are you sure you want to delete this
                                        item?
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
                        transition: "all 0.3s ease 0s ",
                    }}
                >
                    <i className="bi bi-info-lg"></i> Info
                </button>
                {info ? <Info singleOrder = {singleOrder}/> : null}

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
                        <Shipping singleOrder={singleOrder}/>
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
