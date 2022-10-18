import { FC, useEffect, useState } from 'react';
import ProductSort from '@/modules/cateoryProducts/sort/index';
import CategoryFilter from '@/modules/cateoryProducts/filter/main';
import CategoryBreadcrumb from '@/modules/common/breadcrumbs/categoryBreadcrumb';
import CategoryProducts from '@/modules/cateoryProducts/categoryProducts/categoryProducts';
import { CustomerProduct } from '@bs-commerce/models';
import { Pagination } from '@/modules/global/components/pagination';
import { useRouter } from 'next/router';

interface CategoryNameIdProp {
  name: string;
  id: string;
}

interface props {
  categoryName: string;
  categoryNameAndId: CategoryNameIdProp[];
  products: CustomerProduct[];
  totalProducts: number;
}

const CategoryPageComponent: FC<props> = (props: props) => {
  const { categoryName, categoryNameAndId, products, totalProducts } = props;
  const router = useRouter();

  const [limit, setLimit] = useState<number>(5);
  const [reload, setReload] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = (skip: number) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const queryObject: {
      [key: string]: string | number;
    } = { categoryId: params.categoryId };
    params.categoryId ? (queryObject['categoryId'] = params.categoryId) : '';
    params.name ? (queryObject['name'] = params.name) : '';
    params.brand ? (queryObject['brand'] = params.brand) : '';
    params.minPrice ? (queryObject['minPrice'] = params.minPrice) : '';
    params.maxPrice ? (queryObject['maxPrice'] = params.maxPrice) : '';
    params.orderBy ? (queryObject['orderBy'] = params.orderBy) : '';
    queryObject['skip'] = skip;
    queryObject['limit'] = limit;
    setReload(!reload);

    setCurrentPage(Math.ceil(skip / limit) + 1);
    router.replace({
      pathname: `/collections/${params.name}`,
      query: queryObject,
    });
  };

  useEffect(() => {
    router?.query?.skip
      ? setCurrentPage(
          Math.ceil(parseInt(router?.query?.skip as string) / limit) + 1
        )
      : setCurrentPage(1);
  }, [router?.query]);

  return (
    <div className="">
      <CategoryBreadcrumb
        title={categoryName}
        categoryNameAndId={categoryNameAndId}
      />

      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
          <div>
            <CategoryFilter />
          </div>

          <div className="col-span-4 flex-col">
            <div className="mt-16 mb-8 lg:px-12 xl:px-14">
              <ProductSort />
              <CategoryProducts products={products} />
              {totalProducts > limit && (
                <Pagination
                  totalPages={Math.ceil(totalProducts / limit)}
                  paginate={paginate}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  limit={limit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
