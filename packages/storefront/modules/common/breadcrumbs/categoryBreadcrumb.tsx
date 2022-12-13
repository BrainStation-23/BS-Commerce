import Link from 'next/link';
import React from 'react';

interface CategoryNameIdProp {
  name: string;
  id: string;
}

interface Props {
  title: string;
  categoryNameAndId: CategoryNameIdProp[];
}

const CategoryBreadcrumb: React.FC<Props> = (props) => {
  const { title, categoryNameAndId } = props;

  return (
    <div className=" md:h-48 bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner18.jpg?v=1588133916')] bg-cover bg-center bg-no-repeat p-9 sm:p-5 md:p-12 lg:p-14 xl:p-14">
      <h3 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
        {title}
      </h3>
      <div className="m-2 flex flex-wrap items-center justify-center gap-2 sm:m-2 md:m-3 lg:m-3 xl:m-3">
        {categoryNameAndId.map((path, index) => {
          return (
            <React.Fragment key={path.id}>
              {index === 0 && (
                <Link
                  href="/"
                  passHref
                  className="text-decoration-none text-sm text-black hover:text-primary">
                  
                    Home /
                  
                </Link>
              )}
              {index === categoryNameAndId.length - 1 && (
                (<Link
                  href={{
                    pathname: `/collections/${path.name}`,
                    query: {
                      categoryId: path.id,
                      name: path.name,
                    },
                  }}
                  passHref
                  className="text-decoration-none text-sm text-gray-500 hover:text-primary"
                  style={{ pointerEvents: 'none' }}>

                  {path.name}

                </Link>)
              )}
              {index < categoryNameAndId.length - 1 && (
                (<Link
                  href={{
                    pathname: `/collections/${path.name}`,
                    query: {
                      categoryId: path.id,
                      name: path.name,
                    },
                  }}
                  passHref
                  className="text-decoration-none text-sm text-black hover:text-primary">

                  {path.name}

                </Link>)
              )}
              {index !== categoryNameAndId.length - 1 && <span>/</span>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBreadcrumb;
