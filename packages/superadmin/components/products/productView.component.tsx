import { FC, useEffect, useState } from 'react';

import { ProductCategory } from 'models';
import PhotosCard from '@/components/products/viewCards/photosCard';
import MetaCard from '@/components/products/viewCards/metaCard.Component';
import ProductInfoCard from '@/components/products/viewCards/productInfo.card';
import CaegoryCard from '@/components/products/viewCards/categoryCard.component';
import {
  CategoryInterface,
  ViewProductInterface,
} from '@/components/products/models/index';

const ViewProduct: FC<ViewProductInterface> = (props: ViewProductInterface) => {
  const { product } = props;

  const [categogiesData, setCategoryData] = useState([
    {
      id: 1,
      value: 'Category 1',
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 2,
      value: 'Category 2',
      isSelected: false,
      isFeatured: true,
      displayOrder: 1,
    },
    {
      id: 3,
      value: 'Category 3',
      isSelected: false,
      isFeatured: false,
      displayOrder: 3,
    },
    {
      id: 4,
      value: 'Category 4',
      isSelected: false,
      isFeatured: true,
      displayOrder: 5,
    },
    {
      id: 5,
      value: 'Category 5',
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 6,
      value: 'Category 6',
      isSelected: false,
      isFeatured: true,
      displayOrder: 0,
    },
    {
      id: 7,
      value: 'Category 7',
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
    {
      id: 8,
      value: 'Category 8',
      isSelected: false,
      isFeatured: false,
      displayOrder: 0,
    },
  ]);

  const getCategoryData = () => {
    categogiesData.map((category: CategoryInterface, index) => {
      const productCategories = product?.categories?.filter(
        (productCategory: ProductCategory) => {
          return productCategory.id == `${category.id}`
            ? productCategory
            : null;
        }
      );
      if (productCategories[0]) {
        category.isFeatured = productCategories[0].isFeatured;
        category.isSelected = true;
        category.displayOrder = productCategories[0].displayOrder;
      }
    });
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      {product ? (
        <div>
          <div className="content-header clearfix mt-3">
            <h1 className="float-start">
              View product details
              <span className="fs-5 p-3">
                <a href="/Product" className="text-decoration-none ">
                  <i className="bi bi-arrow-left-circle-fill p-2" />
                  Back to product list
                </a>
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <ProductInfoCard product={product} />
            <MetaCard product={product} />
            <PhotosCard product={product} />
            <CaegoryCard product={product} categoryData={categogiesData} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewProduct;
