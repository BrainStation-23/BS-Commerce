import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";
 
import ProductInfoForm from "./forms/productInfoForm";
import PhotosForm from "./forms/photosForm";
import MetaForm from "./forms/metaForm";
import { userAPI } from "../../APIs";


import { useRouter } from "next/router";
import CategoryForm from "./forms/categoryForm";

const CreateProduct = () => {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    const info = {
      name: data.productName,
      shortDescription: data.ShortDescription,
      fullDescription: data.FullDescription,
      sku: data.Sku,
      price: data.Price,
      oldPrice: data.OldPrice,
      cost: data.ProductCost,
      showOnHomePage: data.showOnHomePage,
      includeInTopMenu: data.includeInTopMenu,
      allowToSelectPageSize: data.allowToSelectPageSize,
      published: data.published,
      displayOrder: data.displayOrder,
      isFeatured: data.isFeatured,
      // publishDate: "2022-06-20T09:06:25.239Z",
      // publishDate: data.publishDate,
    };
    const meta = {
      keywords: data.keywords,
      title: data.metaTitle,
      description: data.metaDescription,
      friendlyPageName: data.metaFriendlyPageName,
    };

    const photos = {
      url: data.photosUrl,
      id: data.photosID,
      title: data.photosTitle,
      displayOrder: `${data.displayOrderPhotos}`,
      alt: "image",
    };
    const categories = {
      id: data.SelectedCategoryIds,
      isFeatured: data.isFeaturedCategory,
      displayOrder: data.displayOrderCategory,
    };

    console.log(info);
    console.log(meta);
    console.log(photos);
    console.log(categories);

    const newData = {
      info: info,
      meta: meta,
      tags: data.tags,
      photos: [photos],
      brands: data.brands,
      categories: [categories],
    };

    console.log(newData);
    userAPI.createProduct(newData);
  };

  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          ShortDescription: "",
          FullDescription: "",
          Sku: "",
          OldPrice: 0,
          Price: 0,
          ProductCost: 0,
          showOnHomePage: false,
          includeInTopMenu: false,
          allowToSelectPageSize: false,
          published: false,
          displayOrder: 0,
          isFeatured: false,
          publishDate: "",
          tags: "",
          brands: "",
          keywords: "",
          metaTitle: "",
          metaDescription: "",
          metaFriendlyPageName: "",
          photosUrl: "",
          photosID: "",
          photosTitle: "",
          displayOrderPhotos: "",
          SelectedCategoryIds: "--Select--",
          isFeaturedCategory: false,
          displayOrderCategory: 0,
        }}
        onSubmit={(values, actions) => {
          const data = {
            productName: values.productName,
            ShortDescription: values.ShortDescription,
            FullDescription: values.FullDescription,
            Sku: values.Sku,
            OldPrice: values.OldPrice,
            Price: values.Price,
            ProductCost: values.ProductCost,
            showOnHomePage: values.showOnHomePage,
            includeInTopMenu: values.includeInTopMenu,
            allowToSelectPageSize: values.allowToSelectPageSize,
            published: values.published,
            displayOrder: values.displayOrder,
            isFeatured: values.isFeatured,
            publishDate: values.publishDate,
            tags: values.tags,
            brands: values.brands,
            keywords: values.keywords,
            metaTitle: values.metaTitle,
            metaDescription: values.metaDescription,
            metaFriendlyPageName: values.metaFriendlyPageName,
            photosUrl: values.photosUrl,
            photosID: values.photosID,
            photosTitle: values.photosTitle,
            displayOrderPhotos: values.displayOrderPhotos,
            SelectedCategoryIds: values.SelectedCategoryIds,
            isFeaturedCategory: values.isFeaturedCategory,
            displayOrderCategory: values.displayOrderCategory,
          };
          console.log(data);
          handleSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={productSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix">
                <h1 className="float-start">
                  Add a new product
                  <span className="fs-5 p-3">
                    <a href="/Product" className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to product list
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
                <ProductInfoForm />
                <MetaForm />
                <PhotosForm />
                <CategoryForm />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateProduct;
