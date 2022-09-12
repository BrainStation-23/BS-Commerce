import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';

import { Brand, CreateBrandRequest } from '@bs-commerce/models';

import { userAPI } from '@/APIs';
import BrandInfoForm from '@/components/brands/forms/brandInfoForm';
import BrandMetaForm from '@/components/brands/forms/brandMetaForm';
import { brandSchema } from '@/components/brands/schema/brandsSchema';
import { FC } from 'react';

const CreateBrand: FC = () => {
  const router = useRouter();

  const handleSubmit = (data: CreateBrandRequest) => {
    userAPI.createBrand(data, router);
  };
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
          keywords: '',
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
            title: values?.metaTitle,
            description: values?.metaDescription,
            SEFN: values?.SEFN,
          };
          const newData = {
            info: info,
            meta: meta,
          };
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
                  Add a new brand
                  <span className="fs-5 p-3">
                    <a href="/Brands" className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to brands list
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
