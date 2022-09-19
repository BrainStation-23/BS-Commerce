import { Field, Form, Formik } from 'formik';

const SearchForm = () => {
  function handleSearchSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <Formik
        initialValues={{
          startDate: '',
          endDate: '',
          orderStatus: '',
          paymentStatus: '',
          shippingStatus: '',
        }}
        onSubmit={(values, actions) => {
          const data = {
            startDate: values.startDate,
            endDate: values.endDate,
            orderStatus: values.orderStatus,
            paymentStatus: values.paymentStatus,
            shippingStatus: values.shippingStatus,
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
                      <label
                        htmlFor="startDate"
                        className="float-lg-end float-xl-end"
                      >
                        <h6>
                          Start Date{' '}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: '#3c8dbc' }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        type="date"
                        className="w-100 mb-2 p-2"
                        id="startDate"
                        name="startDate"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label
                        htmlFor="orderStatus"
                        className="float-lg-end float-xl-end"
                      >
                        <h6>
                          Order Status{' '}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: '#3c8dbc' }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="mb-2 w-full p-2"
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
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-lg-6 col-xl-6">
                      <label
                        htmlFor="endDate"
                        className="float-lg-end float-xl-end"
                      >
                        <h6>
                          End Date{' '}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: '#3c8dbc' }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        type="date"
                        className="w-100 mb-2 p-2"
                        id="endDate"
                        name="endDate"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label
                        htmlFor="paymentStatus"
                        className="float-lg-end float-xl-end"
                      >
                        <h6>
                          Payment Status{' '}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: '#3c8dbc' }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="mb-2 w-full p-2"
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
              </div>

              <div className="row mb-3">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center"></div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <label
                        htmlFor="shippingStatus"
                        className="float-lg-end float-xl-end"
                      >
                        <h6>
                          Shipping Status{' '}
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              style={{ color: '#3c8dbc' }}
                            ></i>
                          </span>
                        </h6>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <Field
                        as="select"
                        className="mb-2 w-full p-2"
                        id="shippingStatus"
                        name="shippingStatus"
                      >
                        <option>All</option>
                        <option>Shipping not required</option>
                        <option>Not yet shipped</option>
                        <option>Partially Shipped</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap">
                <button
                  type="submit"
                  className="btn btn-primary px-3 py-2"
                  style={{ background: '#3c8dbc', border: 'none' }}
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
