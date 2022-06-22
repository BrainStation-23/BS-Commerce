import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";

import ProductInfoForm from "./forms/productInfoForm";
import PhotosForm from "./forms/photosForm";
import MetaForm from "./forms/metaForm";
import { userAPI } from "../../APIs";
import { useEffect, useState } from "react";
import CategoryForm from "./forms/categoryForm";
import { toast } from "react-toastify";

const EditProduct = (props: any) => {
  const { product } = props;

  const [categogiesData, setCategoryData] = useState([
    {
      id: 1,
      value: "Category 1",
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 2,
      value: "Category 2",
      isSelected: false,
      isFeatured: true,
      displayOrder: 1,
    },
    {
      id: 3,
      value: "Category 3",
      isSelected: false,
      isFeatured: false,
      displayOrder: 3,
    },
    {
      id: 4,
      value: "Category 4",
      isSelected: false,
      isFeatured: true,
      displayOrder: 5,
    },
    {
      id: 5,
      value: "Category 5",
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 6,
      value: "Category 6",
      isSelected: false,
      isFeatured: true,
      displayOrder: 0,
    },
    {
      id: 7,
      value: "Category 7",
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 8,
      value: "Category 8",
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
  ]);
  const handleSubmit = async (data: any) => {
    const categories: any = [];

    categogiesData?.map((category: any, index: any) => {
      category.isSelected == true
        ? categories.push({
            id: `${category.id}`,
            isFeatured: category.isFeatured,
            displayOrder: +category.displayOrder,
          })
        : "";
    });
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
      photos: [
        {
          url: data.photosUrl,
          id: product.id,
          title: data.photosTitle,
          alt: "image",
          displayOrder: 0,
        },
      ],
      brands: data.brands,
      categories: categories,
    };
    const id = product.id;
    console.log(newData);

    if(categories[0])
    {
      const response = await userAPI.updateProduct(newData, id);
    }
    else
      toast.error("You must select a cateory");
  };

  const getCate = () => {
    categogiesData.map((category: any, index) => {
      const pCat = product?.categories?.filter((pCategory: any) => {
        return pCategory.id == category.id ? pCategory : null;
      });
      if (pCat[0]) {
        category.isFeatured = pCat[0].isFeatured;
        category.isSelected = true;
        category.displayOrder = pCat[0].displayOrder;
      }
    });
    console.log(categogiesData);
  };
  useEffect(() => {
    getCate();
  }, []);

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
            // const data = {
            //   productName: values.productName,
            //   ShortDescription: values.ShortDescription,
            //   FullDescription: values.FullDescription,
            //   Sku: values.Sku,
            //   OldPrice: values.OldPrice,
            //   Price: values.Price,
            //   ProductCost: values.ProductCost,
            //   showOnHomePage: values.showOnHomePage,
            //   includeInTopMenu: values.includeInTopMenu,
            //   allowToSelectPageSize: values.allowToSelectPageSize,
            //   published: values.published,
            //   displayOrder: values.displayOrder,
            //   isFeatured: values.isFeatured,
            //   tags: values.tags,
            //   brands: values.brands,
            //   keywords: values.keywords,
            //   metaTitle: values.metaTitle,
            //   metaDescription: values.metaDescription,
            //   metaFriendlyPageName: values.metaFriendlyPageName,
            //   photosUrl: values.photosUrl,
            //   photosID: values.photosID,
            //   photosTitle: values.photosTitle,
            //   displayOrderPhotos: values.displayOrderPhotos,
            //   SelectedCategoryIds: values.SelectedCategoryIds,
            //   isFeaturedCategory: values.isFeaturedCategory,
            //   displayOrderCategory: values.displayOrderCategory,
            // };
            handleSubmit(values);
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
                  <CategoryForm setCate={setCategoryData} categoryData={categogiesData} setFieldValue={formikprops.setFieldValue}/>
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
