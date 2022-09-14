import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { userAPI } from '@/APIs';
import {
  NestedCategoryList,
  ProductManufacturer,
  subCategoryList,
  UpdateProductCategory,
  UpdateProductRequest,
} from '@bs-commerce/models';

import MetaForm from '@/components/products/forms/metaForm';
import PhotosForm from '@/components/products/forms/photosForm';
import CategorySection from '@/components/products/forms/categorySection';
import ProductInfoForm from '@/components/products/forms/productInfoForm';
import ProductManufacturers from '@/components/products/forms/manufacturerForm';
import { productSchema } from '@/components/products/schema/productSchema/index';
import {
  CategoryInterface,
  EditProductInterface,
} from '@/components/products/models/index';

const EditProduct: FC<EditProductInterface> = (props: EditProductInterface) => {
  const router = useRouter();
  const [product, setProduct] = useState(props.product);
  const [customCategoryData, setCustomCategoryData] = useState<
    CategoryInterface[]
  >([]);

  const [categogiesFullList, setCategoryFullList] =
    useState<NestedCategoryList[]>(); // what we get from get category api
  const [manufacturerData, setManufacturerData] = useState<
    ProductManufacturer[]
  >([]);

  const handleSubmit = async (data: UpdateProductRequest) => {
    const id = product.id;

    if (data?.categories![0]) {
      const response = await userAPI.updateProduct(data, id, router);
    } else toast.error('You must select atleast one category');
  };
  async function loadAllManufacturers() {
    const response = await userAPI.getAllManufacturers();
    const allManufacturers: ProductManufacturer[] = [];
    if (response?.data.manufacturers.length! > 0) {
      response?.data.manufacturers.forEach(
        (manufacturer: ProductManufacturer) => {
          allManufacturers.push({
            id: manufacturer.id,
            name: manufacturer.name,
          });
        }
      );
      setManufacturerData(allManufacturers);
    }
  }
  const checkCat = (
    cat: NestedCategoryList,
    tempCat: UpdateProductCategory[]
  ) => {
    customCategoryData.filter((cat2) => {
      cat.id === cat2.id && cat2.isSelected
        ? cat.subCategories?.map((subCat: NestedCategoryList) =>
            checkCat(subCat, tempCat)
          )
        : '';
      cat.id === cat2.id &&
        cat2.isSelected &&
        tempCat.push({ id: cat.id, name: cat.name });
    });
  };

  const printCat = () => {
    const tempCat: UpdateProductCategory[] = [];
    categogiesFullList?.map((cat) => checkCat(cat, tempCat));
    return tempCat;
  };

  const addSubCategories = (subCategories: subCategoryList[]) => {
    const categoryList: CategoryInterface[] = [];
    subCategories.forEach((category) => {
      categoryList.push({
        id: category.id,
        name: category.name,
        isSelected: false,
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
      setCategoryFullList(
        response?.data?.categories ? response.data.categories : []
      );
      const categories: CategoryInterface[] = [];
      response?.data.categories.forEach((category, index) => {
        categories.push({
          id: category.id,
          name: category.name,
          isSelected: false,
        });
        if (category.subCategories && category.subCategories.length > 0) {
          const subCategoryList = addSubCategories(category.subCategories);
          categories.push(...subCategoryList);
        }
      });

      categories.map((category: CategoryInterface) => {
        product?.categories?.map((productCategory) => {
          category.id === productCategory.id
            ? (category.isSelected = true)
            : '';
        });
      });
      setCustomCategoryData(categories);
    }
  }

  const addCategory = (catID: string) => {
    customCategoryData.map((category: CategoryInterface) => {
      category.id == catID ? (category.isSelected = true) : '';
    });
    setCustomCategoryData([...customCategoryData]);
  };
  const removeCategory = (catID: string) => {
    customCategoryData.map((category: CategoryInterface) => {
      category.id == catID ? (category.isSelected = false) : '';
    });
    setCustomCategoryData([...customCategoryData]);
  };
  useEffect(() => {
    if (customCategoryData.length === 0) loadCategories();
    if (manufacturerData.length === 0) loadAllManufacturers();
  });

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
            keywords: product?.meta?.keywords?.join(' '),
            metaTitle: product?.meta?.title,
            metaDescription: product?.meta?.description,
            metaFriendlyPageName: product?.meta?.friendlyPageName,
            photosUrl: product?.photos ? product?.photos[0]?.url : '',
            photosID: product?.photos ? product?.photos[0]?.id : '',
            photosTitle: product?.photos ? product?.photos[0]?.title : '',
            displayOrderPhotos: product?.photos
              ? product?.photos[0]?.displayOrder
              : '',
            manufacturerId: product?.manufacturer?.id,
            manufacturerName: product?.manufacturer?.name,
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
              displayOrder: +values?.displayOrder!,
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
              categories: printCat(),
            };
            handleSubmit(newData);

            actions.setSubmitting(false);
          }}
          validationSchema={productSchema}
        >
          {(formikprops) => {
            return (
              <Form onSubmit={formikprops.handleSubmit} className="min-vh-100">
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
                <div className="mt-4 pb-5">
                  <ProductInfoForm />
                  <MetaForm />
                  <PhotosForm />
                  <ProductManufacturers manufacturerData={manufacturerData} />
                  {/* <CategoryForm
                    setCustomCategoryData={setCustomCategoryData}
                    categoryData={customCategoryData}
                    setFieldValue={formikprops.setFieldValue}
                  /> */}
                  <CategorySection
                    categoryData={customCategoryData}
                    categogiesFullList={categogiesFullList!}
                    removeCategory={removeCategory}
                    addCategory={addCategory}
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
