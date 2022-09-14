import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import getData from "./service/get-product-data.service";
import Table from "../global/table/table";
import Pagination from "../global/pagination";

const EditShipment = ({ singleShipment }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [PageSize, setPageSize] = useState(7);
    const [data, setData] = useState([]);

    useEffect(() => {
        const data: any = getData();
        setData(data);
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, PageSize, data]);

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

    const columns = [
        {
            label: "Product",
            path: "product",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "SKU",
            path: "sku",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Warehouse",
            path: "warehouse",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Item weight",
            path: "item_weight",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Item dimensions",
            path: "item_dimensions",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
        {
            label: "Qty shipped",
            path: "quantity",
            content: (data: any, key: any, index: any) => (
                <td className="text-center">{data?.[key]}</td>
            ),
        },
    ];

    return (
        <>
            <main className="px-5">
                <div className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
                    <div className="d-flex justify-content-between ">
                        <h1 className="h2">View shipment details</h1>
                        <div
                            style={{ marginLeft: "10px", fontSize: "20px" }}
                            className="mb-2 pt-1 pb-2"
                        >
                            <Link href="/Admin/Shipment/List" passHref>
                                <p
                                    style={{
                                        cursor: "pointer",
                                        color: "#3c8dbc",
                                    }}
                                >
                                    <i className="bi bi-arrow-left-circle-fill"></i>{" "}
                                    back to shipment list
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="btn-toolbar mb-md-0 mb-2">
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

                <div className="card border-1 mt-3 rounded px-2">
                    <div className="card-body">
                        <p>Products shipped</p>

                        <Table items={currentTableData} columns={columns} />

                        <div className="">
                            {data?.length > 1 ? (
                                <Pagination
                                    currentPage={currentPage}
                                    totalCount={data.length}
                                    pageSize={PageSize}
                                    setCurrentPage={setCurrentPage}
                                    setPageSize={setPageSize}
                                />
                            ) : (
                                "No data found"
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default EditShipment;
