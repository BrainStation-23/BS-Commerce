import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";

import ProductInfoForm from "./forms/productInfoForm";
import InventoryForm from "./forms/categoryForm";
import PhotosForm from "./forms/photosForm";
import MetaForm from "./forms/metaForm";
import { userAPI } from "../../APIs";

const EditProduct = (props: any) => {
  const { product } = props;

  const handleSubmit = async (data: any) => {
    const newData = {
      info: {
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
      },
      meta: {
        keywords: data.keywords,
        title: data.metaTitle,
        description: data.metaDescription,
        friendlyPageName: data.metaFriendlyPageName,
      },
      tags: data.tags,
      photos: {
        url: data.photosUrl,
        id: product.id,
        title: data.photosTitle,
        alt: "image",
        displayOrder: 0,
      },
      brands: data.brands,
      categories: [
        {
          id: product.id,
          isFeatured: true,
          displayOrder: 0,
        },
      ],
    };
    const id = product.id;
    console.log(newData);
    
    const response = await userAPI.updateProduct(newData, id);
  };
  console.log(product);
  
  return (
    <>
      {product ? (
        <Formik
          initialValues={{
            productName: product?.info?.name,
            ShortDescription: product?.info?.shortDescription,
            FullDescription: product?.info?.fullDescription,
            Sku: product?.info?.sku,
            OldPrice: product?.info?.oldPrice,
            Price: product?.info?.price,
            ProductCost: product?.info?.cost,
            showOnHomePage: product?.info?.showOnHomePage,
            includeInTopMenu: product?.info?.includeInTopMenu,
            allowToSelectPageSize: product?.info?.allowToSelectPageSize,
            published: product?.info?.published,
            displayOrder: product?.info?.displayOrder,
            isFeatured: product?.info?.isFeatured,
            // publishDate:product?.info?.publishDate ,
            tags: product?.tags,
            brands: product?.brands,
            keywords: product?.meta?.keywords,
            metaTitle: product?.meta?.title,
            metaDescription: product?.meta?.description,
            metaFriendlyPageName: product?.meta?.friendlyPageName,
            photosUrl: product?.photos[0]?.url,
            photosID: product?.photos[0]?.id,
            photosTitle: product?.photos[0]?.title,
            displayOrderPhotos: product?.photos[0]?.displayOrder,
            SelectedCategoryIds: product?.categories[0]?.id,
            isFeaturedCategory: product?.categories[0]?.isFeatured,
            displayOrderCategory: product?.categories[0]?.displayOrder,
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
              // publishDate: values.publishDate,
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
            // console.log(values.keywords);
            // console.log(data);
            
            handleSubmit(data);
            actions.setSubmitting(false);
          }}
          validationSchema={productSchema}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="content-header clearfix mt-3">
                  <h1 className="float-start">
                    Edit product details
                    <span className="fs-5 p-3">
                      <a href="/Product" className="text-decoration-none ">
                        <i className="bi bi-arrow-left-circle-fill p-2" />
                        Back to product list
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
                  <ProductInfoForm />
                  <MetaForm />
                  <PhotosForm />
                  <InventoryForm />
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

export default EditProduct;
