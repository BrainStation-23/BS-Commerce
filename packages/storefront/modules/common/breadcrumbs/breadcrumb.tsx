import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  pathArray: string[];
  linkArray: string[];
}

const Breadcrumb: React.FC<Props> = (props) => {
  const { title, pathArray, linkArray } = props;

  return (
    <div className="md:h-48 bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner18.jpg?v=1588133916')] bg-cover bg-center bg-no-repeat p-9 dark:text-black sm:p-5 md:p-12 lg:p-14 xl:p-14">
      <h3 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
        {title}
      </h3>
      <div className="m-2 flex flex-wrap items-center justify-center gap-2 sm:m-2 md:m-3 lg:m-3 xl:m-3">
        {pathArray.map((path, index) => {
          return (
            <React.Fragment key={index}>
              {index === pathArray.length - 1 && (
                <Link href={linkArray[index]} passHref>
                  <a
                    className="text-decoration-none text-sm text-gray-500 hover:text-primary dark:hover:text-dark_primary"
                    style={{ pointerEvents: 'none' }}
                  >
                    {path}
                  </a>
                </Link>
              )}
              {index < pathArray.length - 1 && (
                <Link href={linkArray[index]} passHref>
                  <a className="text-decoration-none text-sm text-black hover:text-primary dark:hover:text-dark_primary">
                    {path}
                  </a>
                </Link>
              )}
              {index !== pathArray.length - 1 && <span>/</span>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
