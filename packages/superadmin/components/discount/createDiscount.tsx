import { Formik, Form } from "formik";
import { discountSchema } from "./schema/discountSchema";
import DiscountInfoForm from "./forms/discountInfo";
import RequirementsForm from "./forms/requirementsForm";



const CreateDiscount = () => {
  return (
    <>
      <Formik
        initialValues={{
          discountName: "",
          type: "",
          usePercentage: false,
          discountPercentage: 0,
          startDate: "",
          endDate: "",
          requireCuponCode: false,
          cuponCode: "",
          discountLimit: "",
          nTimes: 0,
          adminComment: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            discountName: values.discountName,
            type: values.type,
            usePercentage: values.usePercentage,
            discountPercentage: values.discountPercentage,
            startDate: values.startDate,
            endDate: values.endDate,
            requireCuponCode: values.requireCuponCode,
            cuponCode: values.cuponCode,
            discountLimit: values.discountLimit,
            nTimes: values.nTimes,
            adminComment: values.adminComment,
          };
          // handleSearchSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={discountSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix">
                <h1 className="float-start">
                  Add a new discount
                  <span className="fs-5 p-3">
                    <a href="/discount" className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to discount list
                    </a>
                  </span>
                </h1>
                <div className="float-end">
                  <button
                    type="submit"
                    name="save"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">Save</p>
                  </button>
                  <button
                    type="submit"
                    name="save-continue"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">
                      Save and Continue Edit
                    </p>
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <DiscountInfoForm />
                <RequirementsForm />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateDiscount;
