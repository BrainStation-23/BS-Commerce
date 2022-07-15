import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { userAPI } from '@/APIs';
import { ProductCategory, UpdateProductRequest } from 'models';

import MetaForm from '@/components/products/forms/metaForm';
import PhotosForm from '@/components/products/forms/photosForm';
import CategoryForm from '@/components/products/forms/categoryForm';
import ProductInfoForm from '@/components/products/forms/productInfoForm';
import { productSchema } from '@/components/products/schema/productSchema/index';
import {
  CategoryInterface,
  EditProductInterface,
  FormDataInterFace,
} from '@/components/products/models/index';

const EditProduct: FC<EditProductInterface> = (props: EditProductInterface) => {
  const [product, setProduct] = useState(props.product);
  const router = useRouter();
  const [categogiesData, setCategoryData] = useState([]);
  const [manufacturerData, setManufacturerData] = useState([]);

  const handleSubmit = async (data: UpdateProductRequest) => {
    const id = product.id;

    if (data?.categories[0]) {
      const response = await userAPI.updateProduct(data, id, router);
    } else toast.error('You must select atleast one category');
  };
  async function loadAllManufacturers() {
    const response = await userAPI.getAllManufacturers();
    // console.log('manures', response);
    const allManufacturers: any = [];

    if (response.data.manufacturers.length! > 0) {
      response.data.manufacturers.forEach((manufacturer: any) => {
        allManufacturers.push({
          id: manufacturer.id,
          name: manufacturer.name,
        });
      });
      setManufacturerData(allManufacturers);
    }
  }
  useEffect(() => {
    async function loadCategories() {
      const response = await userAPI.getCategoryList();
      if (response?.data.categories.length! > 0) {
        const categories: any = [];
        response?.data.categories.forEach((category, index) => {
          categories.push({
            id: category.id,
            name: category.name,
            value: category.name,
            isSelected: false,
            isFeatured: false,
            displayOrder: 0,
          });
        });
        categories.map((category) => {
          product?.categories?.map((productCategory) => {
            category.id === productCategory.id
              ? (category.isSelected = true)
              : '';
          });
        });
        setCategoryData(categories);
      }
    }
    loadCategories();
    loadAllManufacturers();
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
            const info = {
              name: values?.productName,
              shortDescription: values?.ShortDescription,
              fullDescription: values?.FullDescription,
              sku: values?.Sku,
              price: values?.Price,
              oldPrice: values?.OldPrice,
              cost: values?.ProductCost,
              showOnHomePage: values?.showOnHomePage,
              includeInTopMenu: values?.includeInTopMenu,
              allowToSelectPageSize: values?.allowToSelectPageSize,
              published: values?.published,
              displayOrder: +values?.displayOrder,
              isFeatured: values?.isFeatured,
            };
            const meta = {
              keywords: values?.keywords,
              title: values?.metaTitle,
              description: values?.metaDescription,
              friendlyPageName: values?.metaFriendlyPageName,
            };
            const photos = {
              url: values?.photosUrl,
              id: values?.photosID,
              title: values?.photosTitle,
              displayOrder: +`${values?.displayOrderPhotos}`,
              alt: 'image',
            };
            const categories: any = [];
            categogiesData?.map((category: any, index: any) => {
              category.isSelected == true
                ? categories.push({
                    id: `${category.id}`,
                    name: category.name,
                    isFeatured: category.isFeatured,
                    displayOrder: +category.displayOrder,
                  })
                : '';
            });
            const manufacturer = {
              id: '',
              name: values.manufacturerName,
            };
            manufacturerData.map((manufacturerr) => {
              if (values.manufacturerName == manufacturerr.name) {
                return (manufacturer.id = manufacturerr.id);
              }
            });
            const newData = {
              info: info,
              meta: meta,
              tags: values.tags,
              photos: [photos],
              brands: values.brands,
              manufacturer: manufacturer,
              categories: categories,
            };
            handleSubmit(newData);
            actions.setSubmitting(false);
          }}
          validationSchema={productSchema}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="content-header clearfix pt-4">
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

                {/* <div className="col-md-12 clearfix">
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
                </div> */}

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
      ) : (
        'Something went wrong!'
      )}
    </>
  );
};

export default EditProduct;
