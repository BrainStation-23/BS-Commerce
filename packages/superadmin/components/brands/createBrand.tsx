import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';

import { userAPI } from 'APIs';
import { productSchema } from '@/components/products/schema/productSchema/index';
import MetaForm from '@/components/products/forms/metaForm';
import PhotosForm from '@/components/products/forms/photosForm';
import CategoryForm from '@/components/products/forms/categoryForm';
import ProductInfoForm from '@/components/products/forms/productInfoForm';
import BrandInfoForm from './forms/brandInfoForm';
import BrandMetaForm from './forms/brandMetaForm';
import { brandSchema } from './schema/brandsSchema';

interface FormDataInterFace {
  productName: string;
  ShortDescription: string;
  FullDescription: string;
  Sku: string;
  OldPrice: number;
  Price: number;
  ProductCost: number;
  showOnHomePage: boolean;
  includeInTopMenu: boolean;
  allowToSelectPageSize: boolean;
  published: boolean;
  displayOrder: number;
  isFeatured: boolean;
  publishDate: string;
  tags: Array<string>;
  brands: Array<string>;
  keywords: Array<string>;
  metaTitle: string;
  metaDescription: string;
  metaFriendlyPageName: string;
  photosUrl: string;
  photosID: string;
  photosTitle: string;
  displayOrderPhotos: string;
  SelectedCategoryIds: number;
  isFeaturedCategory: boolean;
  displayOrderCategory: number;
  categoriesData: string;
}
const CreateBrand: NextComponentType = () => {
  const router = useRouter();
  const [categogiesData, setCategoryData] = useState([]);

  const handleSubmit = (data: FormDataInterFace) => {
    console.log(data);

    // userAPI.createProduct(newData, router);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          description: '',
          allowToSelectPageSize: false,
          published: false,
          displayOrder: 1,
          pageSizeOptions: [],
          keywords: [],
          metaTitle: '',
          metaDescription: '',
          SEFN: '',
        }}
        onSubmit={(values, actions) => {
          const info = {
            name: values?.name,
            description: values?.description,
            allowToSelectPageSize: values?.allowToSelectPageSize,
            published: values?.published,
            displayOrder: values?.displayOrder,
            pageSizeOptions: values?.pageSizeOptions,
          };
          const meta = {
            keywords: values?.keywords,
            metaTitle: values?.metaTitle,
            metaDescription: values?.metaDescription,
            SEFN: values?.SEFN,
          };
          const newData = {
            info: info,
            meta: meta,
          };
          // console.log(newData);

          handleSubmit(newData);
          actions.setSubmitting(false);
        }}
        validationSchema={brandSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix pt-4">
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
                </div>
              </div>
              <div className="mt-4">
                <BrandInfoForm />
                <BrandMetaForm />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateBrand;
