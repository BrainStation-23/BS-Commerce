import { FC } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { manufactureSchema } from "../schema/index";
import CreateNewManufacturer from "./forms/manufacturerInfo";
import DisplayOrders from "./forms/displayOrder";
import SEO from "./forms/seo";
import { userAPI } from "../../../APIs";
import Link from "next/link";
const CreateManufacturer: FC = () => {
  const router = useRouter();
  const handleSubmit = (data: any) => {
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
    userAPI.createManufacturer(newData, router);
  };
  return <>
    <Formik
      initialValues={{
        name: "",
        description: "",
        picture: "",
        isPublished: false,
        displayOrder: "",
        metaKeyword: "",
        metaDescription: "",
        metaTitle: "",
        seftn: "",
      }}
      onSubmit={(values, actions) => {
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
        handleSubmit(data);
        actions.setSubmitting(false);
      }}
      validationSchema={manufactureSchema}
    >
      {(formikprops) => {
        return (
          <Form onSubmit={formikprops.handleSubmit}>
            <div
              className="content-header clearfix"
              style={{ paddingTop: "10px" }}
            >
              <h3 className="float-start">
                Add a Manufacturer
                <span className="fs-5 p-3">
                  <Link href="/Manufacturer/" className="text-decoration-none">

                    <i className="bi bi-arrow-left-circle-fill p-2" />
                    <span style={{ fontSize: "14px" }}>
                      Back to Manufacturer list
                    </span>

                  </Link>
                </span>
              </h3>
              <div className="float-end">
                {/* <button
                  type="button"
                  className="btn btn-info float-left mx-2 my-auto "
                  id="product-editor-settings"
                  data-toggle="modal"
                  data-target="#productsettings-window"
                >
                  <i className="bi bi-gear-fill pt-1" />
                  <p className="float-end mx-1 my-0">Settings</p>
                </button> */}
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
              <CreateNewManufacturer />
              <DisplayOrders />
              <SEO />
            </div>
          </Form>
        );
      }}
    </Formik>
  </>;
};

export default CreateManufacturer;
