import Link from "next/link";
import React from "react";

const EditAddress = () => {
    return (
        <div style={{ marginLeft: "20%", marginTop: "2%" }}>
            <div>
                <span>
                    <h1>Edit address</h1>{" "}
                    <Link href="/editOrder" passHref>
                        <a>back to order details</a>
                    </Link>
                </span>
            </div>

            <div style={{ border: "1px solid #dddddd" }}>
                <form style={{ padding: "5px", margin: "5px" }}>
                    <div
                        style={{
                            // display: "flex",
                            padding: "5px",
                            margin: "5px",
                        }}
                        className="form-col"
                    >
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>First name</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                            
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Last name</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Email</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Company</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Country</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>State/province</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Country/region</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>City</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Address 1</h6> 
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Address 2</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>

                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Zip/postal code</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>

                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Phone number</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>

                        <div
                            style={{
                                padding: "5px",
                                marginRight: "100px",
                            }}
                            className="col"
                        >
                            <h6>Fax number</h6>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>

                        <button
                            type="submit"
                            // style={{
                            //     height: "50px",
                            //     width: "100px",
                            //     margin: "15px",
                            // }}
                            className="btn btn-primary btn-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAddress;
