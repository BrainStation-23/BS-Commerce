import Link from "next/link";
import { Field, Form, Formik } from "formik";

import React from "react";

const EditAddress = () => {
    function handleSearchSubmit(data: any) {
        console.log(data);
    }
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

            <div style={{ border: "1px solid #dddddd", marginRight: "40px" }}>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    country: "",
                    state: "",
                    region: "",
                    city: "",
                    address1: "",
                    address2: "",
                    zip: "",
                    phone: "",
                    fax: "",
                }}
                onSubmit={(values, actions) => {
                    const data = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        company: values.company,
                        country: values.country,
                        state: values.state,
                        region: values.region,
                        city: values.city,
                        address1: values.address1,
                        address2: values.address2,
                        zip: values.zip,
                        phone: values.phone,
                        fax: values.fax,
                    };
                    handleSearchSubmit(data);
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <Form onSubmit={formikprops.handleSubmit}>
                            <div style={{marginLeft: "10%", marginRight: "10%", marginTop: "50px"}} className="">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        First name{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="firstName"
                                        name="firstName"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Last name{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="lastName"
                                        name="lastName"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Email{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Company{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="company"
                                        name="company"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Country{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        as="select"
                                        className="p-2 w-100"
                                        id="country"
                                        name="country"
                                    >
                                        <option>Bangladesh</option>
                                        <option>Pakistan</option>
                                        <option>India</option>
                                        <option>Canada</option>
                                        <option>Turkey</option>
                                        <option>Bhutan</option>
                                    </Field>
                                </div>
                                <div>
                                    <label
                                        htmlFor="state"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        State / province{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        as="select"
                                        className="p-2 w-100"
                                        id="state"
                                        name="state"
                                    >
                                        <option>Dhaka</option>
                                        <option>Khulna</option>
                                        <option>Barisal</option>
                                        <option>Rajshahi</option>
                                        <option>Chattagram</option>
                                        <option>Sylhet</option>
                                    </Field>
                                </div>
                                <div>
                                    <label
                                        htmlFor="region"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Country / region{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="region"
                                        name="region"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        City{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="city"
                                        name="city"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="address1"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Address 1{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="address1"
                                        name="address1"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="address2"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Address 2{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="address2"
                                        name="address2"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="zip"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Zip / postal code{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="zip"
                                        name="zip"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Phone number{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="phone"
                                        name="phone"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="fax"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Fax number{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        className="p-2 w-100 mb-2"
                                        id="fax"
                                        name="fax"
                                    />
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="logLevel"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2 mb-2"
                                    >
                                        Log Level{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>

                                    <Field
                                        as="select"
                                        className="p-2 w-100"
                                        id="logLevel"
                                        name="logLevel"
                                    >
                                        <option>All</option>
                                        <option>Debug</option>
                                        <option>Information</option>
                                        <option>Warning</option>
                                        <option>Error</option>
                                        <option>Fatal</option>
                                    </Field>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex flex-wrap justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary px-5"
                                    style={{
                                        background: "#3c8dbc",
                                        border: "none",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <span>
                                        <i className="bi bi-search me-2"></i>
                                    </span>
                                    Save
                                </button>
                        
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            </div>
        </div>
    );
};

export default EditAddress;
