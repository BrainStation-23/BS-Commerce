import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import _ from 'lodash';
import { createCategoryRequest, NestedCategoryList } from '@bs-commerce/models';

import { userAPI } from '@/APIs';
import { CategorySchema } from '@/components/category/schema/category.schema';
import { useEffect, useState } from 'react';
import CategoryCreateForm from './forms/category-create-form';

const CreateCategoryComponent: React.FC = () => {
  const [categoryList, setCategoryList] = useState<NestedCategoryList[]>();
  const router = useRouter();
  const handleSubmit = (data: createCategoryRequest) => {
    const response = userAPI.createCategory(data, router);
  };

  useEffect(() => {
    async function loadCategories() {
      const response = await userAPI.getCategoryList();
      setCategoryList(response?.data.categories);
    }
    loadCategories();
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        parentSlug: '',
        photo: {
          url: '',
          alt: '',
        },
        showOnHomePage: false,
        includeInTopMenu: false,
        allowToSelectPageSize: false,
        published: false,
        displayOrder: 0,
        meta: {
          keywords: '',
          description: '',
          title: '',
          SEFN: '',
        },
      }}
      onSubmit={(values, actions) => {
        const metaKeywords = values.meta.keywords.split(' ');
        const structuredValues = {
          ...values,
          meta: { ...values.meta, keywords: metaKeywords },
        };

        handleSubmit(structuredValues);
        actions.setSubmitting(false);
      }}
      validationSchema={CategorySchema}
    >
      {(formikProps) => {
        return (
          <Form onSubmit={formikProps.handleSubmit}>
            <div className="content-header clearfix">
              <h1 className="float-start">
                Add a new category
                <span className="fs-5 p-3">
                  <Link href="/category">
                    <a className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to category list
                    </a>
                  </Link>
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
            {categoryList ? (
              <CategoryCreateForm categoryList={categoryList!} />
            ) : (
              ''
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateCategoryComponent;
