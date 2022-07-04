import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addressEditSchema } from "../sales/service/schema/address.schema";
import { useRouter } from "next/router";

const EditAddress = () => {
    const router = useRouter();
    const id = "" + `${router.query.id}`;
    function handleSearchSubmit(data: any) {
        console.log(data);
    }
    return (
        <div className="px-5 py-3">
            <div>
                <h1>Edit address</h1>{" "}
                <Link
                    href={{
                        pathname: `/Admin/Order/Edit/[id]`,
                        query: { id: id },
                    }}
                    passHref
                >
                    <p style={{ cursor: "pointer", color: "#3c8dbc" }}>
                        <i className="bi bi-arrow-left-circle-fill"></i> back to
                        order details
                    </p>
                </Link>
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
                    validationSchema={addressEditSchema}
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
                                <div
                                    style={{
                                        marginLeft: "10%",
                                        marginRight: "10%",
                                        marginTop: "50px",
                                    }}
                                    className=""
                                >
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
                                            className="w-100 mb-2 p-2"
                                            id="firstName"
                                            name="firstName"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="firstName" />
                                        </div>
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
                                            className="w-100 mb-2 p-2"
                                            id="lastName"
                                            name="lastName"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="lastName" />
                                        </div>
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 p-2"
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
                                            className="w-100 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 mb-2 p-2"
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
                                            className="w-100 p-2"
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
                                <div className="d-flex justify-content-center flex-wrap">
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
