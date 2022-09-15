import { Field, Form, Formik } from "formik";

const SearchForm = () => {
  function handleSearchSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <Formik
        initialValues={{
          startDate: "",
          endDate: "",
          store: "",
          orderStatus: "",
          paymentStatus: "",
          category: "",
          manufacturer: "",
          billingCountry: "",
          product: "",
          groupBy: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            startDate: values.startDate,
            endDate: values.endDate,
            store: values.store,
            orderStatus: values.orderStatus,
            paymentStatus: values.paymentStatus,
            category: values.category,
            manufacturer: values.manufacturer,
            billingCountry: values.billingCountry,
            product: values.product,
            groupBy: values.groupBy,
          };
          handleSearchSubmit(data);
          actions.setSubmitting(false);
        }}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label htmlFor="startDate" className="float-lg-end float-xl-end">
                        <h6>
                          Start Date{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        type="date"
                        className="p-2 w-100 mb-2"
                        id="startDate"
                        name="startDate"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label htmlFor="category" className="float-lg-end float-xl-end">
                        <h6>
                          Category{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="p-2 mb-2"
                        id="category"
                        name="category"
                      >
                        <option>All</option>
                        <option>Computers</option>
                        <option>Computers{'>>'}Desktop</option>
                        <option>Computers{'>>'}Notebook</option>
                        <option>Computers{'>>'}Software</option>
                        <option>Electronics</option>
                        <option>Books</option>
                        <option>Apparel</option>
                        <option>Gift Cards</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label htmlFor="endDate" className="float-lg-end float-xl-end">
                        <h6>
                          End Date{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        type="date"
                        className="p-2 w-100 mb-2"
                        id="endDate"
                        name="endDate"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label htmlFor="category" className="float-lg-end float-xl-end">
                        <h6>
                          Manufacturer{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="category"
                        name="category"
                      >
                        <option>All</option>
                        <option>Apple</option>
                        <option>HP</option>
                        <option>Nike</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label htmlFor="store" className="float-lg-end float-xl-end">
                        <h6>
                          Store{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                    <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="store"
                        name="store"
                      >
                        <option>All</option>
                        <option>Your Store</option>
                        <option>Test Store</option>
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label htmlFor="billingCountry" className="float-lg-end float-xl-end">
                        <h6>
                          Billing Country{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="billingCountry"
                        name="billingCountry"
                      >
                        <option>All</option>
                        <option>United States</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label htmlFor="orderStatus" className="float-lg-end float-xl-end">
                        <h6>
                          Order Status{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                    <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="orderStatus"
                        name="orderStatus"
                      >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Complete</option>
                        <option>Cancelled</option>
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label htmlFor="product" className="float-lg-end float-xl-end">
                        <h6>
                          Product{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        type="text"
                        className="p-2 w-full mb-2"
                        id="product"
                        name="product"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label htmlFor="paymentStatus" className="float-lg-end float-xl-end">
                        <h6>
                          Payment Status{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                    <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="paymentStatus"
                        name="paymentStatus"
                      >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Authorized</option>
                        <option>Paid</option>
                        <option>Partially Refunded</option>
                        <option>Refunded</option>
                        <option>Voided</option>
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label htmlFor="groupBy" className="float-lg-end float-xl-end">
                        <h6>
                          Group By{" "}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: "#3c8dbc" }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="p-2 w-full mb-2"
                        id="groupBy"
                        name="groupBy"
                      >
                        <option>All</option>
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary px-3 py-2"
                  style={{ background: "#3c8dbc", border: "none" }}
                >
                  <span>
                    <i className="bi bi-graph-up-arrow me-2 mt-1"></i>
                  </span>
                  Run Report
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchForm;
