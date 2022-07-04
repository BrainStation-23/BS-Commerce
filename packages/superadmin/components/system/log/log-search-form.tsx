import { Field, Form, Formik } from "formik";

const LogSearchForm = () => {
  function handleSearchSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <Formik
        initialValues={{
          createdFrom: "",
          msg: "",
          createdTo: "",
          logLevel: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            createdFrom: values.createdFrom,
            msg: values.msg,
            createdTo: values.createdTo,
            logLevel: values.logLevel,
          };
          handleSearchSubmit(data);
          actions.setSubmitting(false);
        }}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="d-flex flex-wrap flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between">
                <div>
                  <label
                    htmlFor="createdForm"
                    className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                  >
                    Created from{" "}
                    <span>
                      <i
                        className="bi bi-question-circle-fill"
                        style={{ color: "#3c8dbc" }}
                      ></i>
                    </span>
                  </label>
                  <Field
                    type="date"
                    className="p-2 w-100 mb-2"
                    id="createdFrom"
                    name="createdFrom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="msg"
                    className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                  >
                    Message{" "}
                    <span>
                      <i
                        className="bi bi-question-circle-fill"
                        style={{ color: "#3c8dbc" }}
                      ></i>
                    </span>
                  </label>
                  <Field type="text" className="p-2 w-100 mb-2" id="msg" name="msg" />
                </div>
              </div>
              <div className="d-flex flex-wrap flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between mb-3">
                <div>
                  <label
                    htmlFor="createdTo"
                    className="me-1 me-sm-2 me-md-2 me-xl-2 me-lg-2"
                  >
                    Created to{" "}
                    <span>
                      <i
                        className="bi bi-question-circle-fill"
                        style={{ color: "#3c8dbc" }}
                      ></i>
                    </span>
                  </label>
                  <Field
                    type="date"
                    className="p-2 w-100 mb-2"
                    id="createdTo"
                    name="createdTo"
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
              <div className="d-flex flex-wrap justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5"
                  style={{ background: "#3c8dbc", border: "none" }}
                >
                  <span>
                    <i className="bi bi-search me-2"></i>
                  </span>
                  Search
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LogSearchForm;
