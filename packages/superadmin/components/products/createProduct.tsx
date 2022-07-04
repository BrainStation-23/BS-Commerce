import { Formik, Form } from "formik";
import { productSchema } from "./schema/productSchema";

import ProductInfoForm from "./forms/productInfoForm";
import PhotosForm from "./forms/photosForm";
import MetaForm from "./forms/metaForm";
import { userAPI } from "../../APIs";

import { useRouter } from "next/router";
import CategoryForm from "./forms/categoryForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const router = useRouter();
  const [categogiesData, setCategoryData] = useState([]);
  // const [categogiesData, setCategoryData] = useState([
  //   {
  //     id: 1,
  //     value: "Category 1",
  //     isSelected: false,
  //     isFeatured: false,
  //     displayOrder: 0,
  //   },
  //   {
  //     id: 2,
  //     value: "Category 2",
  //     isSelected: false,
  //     isFeatured: true,
  //     displayOrder: 1,
  //   },
  //   {
  //     id: 3,
  //     value: "Category 3",
  //     isSelected: false,
  //     isFeatured: false,
  //     displayOrder: 3,
  //   },
  //   {
  //     id: 4,
  //     value: "Category 4",
  //     isSelected: false,
  //     isFeatured: true,
  //     displayOrder: 5,
  //   },
  //   {
  //     id: 5,
  //     value: "Category 5",
  //     isSelected: false,
  //     isFeatured: false,
  //     displayOrder: 0,
  //   },
  //   {
  //     id: 6,
  //     value: "Category 6",
  //     isSelected: false,
  //     isFeatured: true,
  //     displayOrder: 0,
  //   },
  //   {
  //     id: 7,
  //     value: "Category 7",
  //     isSelected: false,
  //     isFeatured: false,
  //     displayOrder: 0,
  //   },
  //   {
  //     id: 8,
  //     value: "Category 8",
  //     isSelected: false,
  //     isFeatured: false,
  //     displayOrder: 0,
  //   },
  // ]);

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
      displayOrder: +data.displayOrder,
      isFeatured: data.isFeatured,
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
      displayOrder: +`${data.displayOrderPhotos}`,
      alt: "image",
    };

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
      info: info,
      meta: meta,
      tags: data.tags,
      photos: [photos],
      brands: data.brands,
      categories: categories,
    };
    if (categories[0]) {
      userAPI.createProduct(newData, router);
    } else toast.error("You must select atleast one category");
  };

  useEffect(() => {
    async function loadCategories() {
      const response = await userAPI.getCategories();
      // console.log(response);
      if (response?.length! > 0) {
        const categories: any = [];
        response?.forEach((category, index) => {
          categories.push({
            id: index + 1,
            value: category.name,
            isSelected: false,
            isFeatured: false,
            displayOrder: 0,
          });
        });
        setCategoryData(categories);
      }
    }
    loadCategories();
  }, []);

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
          displayOrder: 1,
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
          SelectedCategoryIds: 0,
          isFeaturedCategory: false,
          displayOrderCategory: 1,
          categoriesData: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
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
                  {/* <button
                    type="submit"
                    name="save-continue"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">
                      Save and Continue Edit
                    </p>
                  </button> */}
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
                <CategoryForm
                  setCategoryData={setCategoryData}
                  categoryData={categogiesData}
                  setFieldValue={formikprops.setFieldValue}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateProduct;
