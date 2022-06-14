import { Field, Form, Formik } from "formik";

const AddressForm = () => {
    function handleSearchSubmit(data: any) {
        console.log(data);
    }

    return (
        <>
            <Formik
                initialValues={{
                    subtotalIncTax: "",
                    subtotalExcTax: "",
                    discountIncTax: "",
                    discountExcTax: "",
                    shippingIncTax: "",
                    shippingExcTax: "",
                    additionalIncTax: "",
                    additionalExcTax: "",
                    taxRates: "",
                    tax: "",
                    discount: "",
                    total: ""
                }}
                onSubmit={(values, actions) => {
                    const data = {
                        subtotalIncTax: values.subtotalIncTax,
                        subtotalExcTax: values.subtotalExcTax,
                        discountIncTax: values.discountIncTax,
                        discountExcTax: values.discountExcTax,
                        shippingIncTax: values.shippingIncTax,
                        shippingExcTax: values.shippingExcTax,
                        additionalIncTax: values.additionalIncTax,
                        additionalExcTax: values.additionalExcTax,
                        taxRates: values.taxRates,
                        tax: values.tax,
                        discount: values.discount,
                        total: values.total,
                    };
                    handleSearchSubmit(data);
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <Form onSubmit={formikprops.handleSubmit}>
                            <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "50px"}} className="">
                                <div>
                                    <label
                                        htmlFor="subtotal"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order subtotal{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <label htmlFor="">incl tax:</label>
                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="subtotalIncTax"
                                        name="subtotalIncTax"
                                        style={{margin: '10px'}}
                                    />
                                    <label htmlFor="">excl tax:</label>

                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="subtotalExcTax"
                                        name="subtotalExcTax"
                                        style={{margin: '10px'}}

                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="discount"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order subtotal discount{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <label htmlFor="">incl tax:</label>
                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="discountIncTax"
                                        name="discountIncTax"
                                        style={{margin: '10px'}}

                                    />
                                    <label htmlFor="">excl tax:</label>

                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="discountExcTax"
                                        name="discountExcTax"
                                        style={{margin: '10px'}}

                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shipping"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order shipping{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <label htmlFor="">incl tax:</label>
                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="shippingIncTax"
                                        name="shippingIncTax"
                                        style={{margin: '10px'}}

                                    />
                                    <label htmlFor="">excl tax:</label>

                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="shippingExcTax"
                                        name="shippingExcTax"
                                        style={{margin: '10px'}}

                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="additional"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Payment method additional fee{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <label htmlFor="">incl tax:</label>
                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="additionalIncTax"
                                        name="additionalIncTax"
                                        style={{margin: '10px'}}

                                    />
                                    <label htmlFor="">excl tax:</label>

                                    <Field
                                        type="number"
                                        className="p-2 w-20 mb-2"
                                        id="additionalExcTax"
                                        name="additionalExcTax"
                                        style={{margin: '10px'}}

                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="taxRates"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order tax rates{" "}
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
                                        id="taxRates"
                                        name="taxRates"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="tax"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order tax{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="number"
                                        className="p-2 w-100 mb-2"
                                        id="tax"
                                        name="tax"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="discount"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order discount{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="number"
                                        className="p-2 w-100 mb-2"
                                        id="discount"
                                        name="discount"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="total"
                                        className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                                    >
                                        Order total{" "}
                                        <span>
                                            <i
                                                className="bi bi-question-circle-fill"
                                                style={{ color: "#3c8dbc" }}
                                            ></i>
                                        </span>
                                    </label>
                                    <Field
                                        type="number"
                                        className="p-2 w-100 mb-2"
                                        id="total"
                                        name="total"
                                    />
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
        </>
    );
};

export default AddressForm;
