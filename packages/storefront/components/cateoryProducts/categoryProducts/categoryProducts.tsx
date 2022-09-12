import { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'customHooks/hooks';
import CategoryProductCard from '@/components/cateoryProducts/categoryProducts/categoryProductCard';
import { Pagination } from '@/components/global/components/pagination';
import { useRouter } from 'next/router';
import { Product } from '@bs-commerce/models';

interface props {
  products: Product[];
  totalNumberOfProducts: number;
}

const CategoryProductSegment: FC<props> = ({
  products,
  totalNumberOfProducts,
}) => {
  const router = useRouter();

  const [limit, setLimit] = useState<number>(5);
  const [reload, setReload] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = (skip: number) => {
    // console.log('Skip======================', skip);
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
    // console.log('==========> ', skip / limit + 1);

    setCurrentPage(Math.ceil(skip / limit) + 1);
    router.replace({
      pathname: `/collections/${params.name}`,
      query: queryObject,
    });
    // router.push(
    //   `/collections/Fruits?categoryId=${router.query.categoryId}&name=${router.query.name}&skip=${skip}&limit=${limit}`
    // );
  };

  useEffect(() => {
    // console.log(router?.query?.skip);

    router?.query?.skip ? '' : setCurrentPage(1);
  }, [router?.query?.skip]);

  return (
    <>
      {/* {console.log(currentPage)} */}
      <div className="py-5">
        {products && products[0] ? (
          <div className="grid grid-cols-2 justify-items-center gap-2 md:w-fit lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[25px]">
            {products.map((product) => (
              <CategoryProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="m-auto text-center">
            There is no product in this category
          </p>
        )}
      </div>
      <Pagination
        totalPages={Math.ceil(totalNumberOfProducts / limit)}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        limit={limit}
      />
    </>
  );
};

export default CategoryProductSegment;
