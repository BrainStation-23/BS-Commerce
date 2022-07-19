import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { CreateProductRequest, subCategoryList } from 'models';

import { userAPI } from '@/APIs';
import MetaForm from '@/components/products/forms/metaForm';
import PhotosForm from '@/components/products/forms/photosForm';
import CategoryForm from '@/components/products/forms/categoryForm';
import ProductInfoForm from '@/components/products/forms/productInfoForm';
import ProductManufacturers from '@/components/products/forms/manufacturerForm';

import { productSchema } from '@/components/products/schema/productSchema/index';
import Category from 'pages/category';

const CreateProduct: NextComponentType = () => {
  const router = useRouter();
  const [categogiesData, setCategoryData] = useState([]);
  const [manufacturerData, setManufacturerData] = useState([]);

  const handleSubmit = (data: CreateProductRequest) => {
    if (data?.categories[0]) {
      userAPI.createProduct(data, router);
    } else toast.error('You must select atleast one category');
  };

  async function loadAllManufacturers() {
    const response = await userAPI.getAllManufacturers();
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

  const addSubCategories = (subCategories: subCategoryList[]) => {
    const categoryList: any = [];
    subCategories.forEach((category) => {
      categoryList.push({
        id: category.id,
        name: category.name,
        value: category.name,
        isSelected: false,
        isFeatured: false,
        displayOrder: category.displayOrder,
      });
      if (category.subCategories && category.subCategories.length > 0) {
        const subCategoryList = addSubCategories(category.subCategories);
        categoryList.push(...subCategoryList);
      }
    });

    return categoryList;
  };

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
          displayOrder: category.displayOrder,
        });
        if (category.subCategories && category.subCategories.length > 0) {
          const subCategoryList = addSubCategories(category.subCategories);
          categories.push(...subCategoryList);
        }
      });
      setCategoryData(categories);
    }
  }

  useEffect(() => {
    loadCategories();
    loadAllManufacturers();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          productName: '',
          ShortDescription: '',
          FullDescription: '',
          Sku: '',
          OldPrice: 0,
          Price: 0,
          ProductCost: 0,
          showOnHomePage: false,
          includeInTopMenu: false,
          allowToSelectPageSize: false,
          published: false,
          displayOrder: 1,
          isFeatured: false,
          publishDate: '',
          tags: [],
          brands: [],
          keywords: '',
          metaTitle: '',
          metaDescription: '',
          metaFriendlyPageName: '',
          photosUrl: '',
          photosID: '',
          photosTitle: '',
          displayOrderPhotos: '',
          SelectedCategoryIds: 0,
          isFeaturedCategory: false,
          displayOrderCategory: 1,
          categoriesData: '',
          manufacturerId: '',
          manufacturerName: '',
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
            keywords: values?.keywords?.split(' '),
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
          // console.log(newData);
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
                <ProductInfoForm />
                <MetaForm />
                <PhotosForm />
                <ProductManufacturers manufacturerData={manufacturerData} />
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
