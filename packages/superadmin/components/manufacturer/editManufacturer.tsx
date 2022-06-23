import { Formik, Form } from "formik";
import { manufactureSchema } from "./schema/index";

import CreateNewManufacturer from "./add-new/forms/manufacturerInfo";
import DisplayOrders from "./add-new/forms/displayOrder";
import SEO from "./add-new/forms/seo";
import { userAPI } from "../../APIs";
import { useRouter } from "next/router";
const EditManufacturer = (props: any) => {
  const router = useRouter();
  const { manufacturer } = props;

  const handleSubmit = async (data: any) => {
    const newData = {
      name: data.name,
      description: data.description,
      picture: data.picture,
      isPublished: data.isPublished,
      displayOrder: data.displayOrder,
      seo: {
        metaKeyword: data.metaKeyword,
        metaDescription: data.metaDescription,
        metaTitle: data.metaTitle,
        SEFN: data.seftn,
      },
    };
    const id = manufacturer.manufacturer.id;
    // console.log(id);
    // console.log(newData);

    const response = await userAPI.updateManufacturer(newData, id, router);
  };
  console.log(manufacturer);

  return (
    <>
      {manufacturer ? (
        <Formik
          initialValues={{
            name: manufacturer?.manufacturer?.name,
            description: manufacturer?.manufacturer?.description,
            picture: manufacturer?.manufacturer?.picture,
            isPublished: manufacturer?.manufacturer?.isPublished,
            displayOrder: manufacturer?.manufacturer?.displayOrder,
            metaKeyword: manufacturer?.manufacturer?.seo?.metaKeyword,
            metaDescription: manufacturer?.manufacturer?.seo?.metaDescription,
            metaTitle: manufacturer?.manufacturer?.seo?.metaTitle,
            seftn: manufacturer?.manufacturer?.seo?.SEFN,
          }}
          onSubmit={(values, actions) => {
            // console.log(values,"**")
            const data = {
              name: values.name,
              description: values.description,
              picture: values.picture,
              isPublished: values.isPublished,
              displayOrder: values.displayOrder,
              metaKeyword: values.metaKeyword,
              metaDescription: values.metaDescription,
              metaTitle: values.metaTitle,
              seftn: values.seftn,
            };
            // console.log(data,"##")
            handleSubmit(data);
            actions.setSubmitting(false);
          }}
          validationSchema={manufactureSchema}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="content-header clearfix mt-3">
                  <h1 className="float-start">
                    Edit Manufacturer details
                    <span className="fs-5 p-3">
                      <a
                        href="/Admin/Manufacturer/list"
                        className="text-decoration-none "
                      >
                        <i className="bi bi-arrow-left-circle-fill p-2" />
                        Back to Manufacturer list
                      </a>
                    </span>
                  </h1>
                  <div className="float-end">
                    <button
                      type="submit"
                      name="save"
                      className="btn btn-primary m-1"
                      onClick={handleSubmit}
                    >
                      <i className="bi bi-save" />
                      <p className="float-end mx-1 my-0">Save </p>
                    </button>
                  </div>
                </div>

                <div className="col-md-12 clearfix">
                  <button
                    type="button"
                    className="btn btn-info float-left mx-2 my-auto "
                    id="product-editor-settings"
                    data-toggle="modal"
                    data-target="#productsettings-window"
                  >
                    <i className="bi bi-gear-fill pt-1" />
                    <p className="float-end mx-1 my-0">Settings</p>
                  </button>
                </div>

                <div className="mt-4">
                  <CreateNewManufacturer />
                  <DisplayOrders />
                  <SEO />
                </div>
              </Form>
            );
          }}
        </Formik>
      ) : (
        ""
      )}
    </>
  );
};

export default EditManufacturer;
