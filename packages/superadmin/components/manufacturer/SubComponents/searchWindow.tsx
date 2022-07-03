import { ErrorMessage, Field, Form, Formik } from "formik";
import Tooltips from "../../global/tooltip";
import { toast } from "react-toastify";

const ManufacturerSearchWindow = ({ setProducts, allProducts }: any) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          published: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            name: values.name,
            published: values.published,
          };
        }}
        //    actions.setSubmitting(false);
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="card border-1 mt-3 rounded">
                <div className="card-header">
                  <span className="ms-2 fs-4">Search</span>
                </div>
                <div className="card-body">
                  <div className="form-group row py-2">
                    <div className="col-md-3">
                      <div className="label-wrapper row row-cols-auto float-md-end px-2">
                        <label
                          className="col-form-label"
                          htmlFor="GoDirectlyToSku"
                        >
                          Manufacturer Name
                        </label>
                        <Tooltips title="Enter product SKU and click Go." />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="Field-group Field-group-short ">
                        <div className="row">
                          <Field
                            className="form-control col rounded-start rounded-0 my-3 mt-2 "
                            id="GoDirectlyToSku"
                            name="GoDirectlyToSku"
                            type="text"
                          />
                        </div>

                        <div className="errMsg text-danger text-red-600">
                          <ErrorMessage name="GoDirectlyToSku" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row py-2">
                    <div className="col-md-3">
                      <div className="label-wrapper row row-cols-auto float-md-end px-2">
                        <strong className="fs-6 me-1">Published</strong>
                        <span>
                          <i
                            className="bi bi-question-circle-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="A manufacturer name"
                            style={{
                              color: "#3c8dbc",
                            }}
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <Field
                        as="select"
                        className="w-100 p-2"
                        id="published"
                        name="published"
                      >
                        <option>All</option>
                        <option>Published only</option>
                        <option>Unpublished only</option>
                      </Field>
                    </div>
                  </div>
                </div>
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
                    Search
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ManufacturerSearchWindow;
