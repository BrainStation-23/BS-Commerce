import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  pathArray: string[];
  linkArray: string[];
}

const Breadcrumb: React.FC<Props> = (props) => {
  const { title, pathArray, linkArray } = props;

  return (
    <div className="p-9 sm:p-5 md:p-12 lg:p-14 xl:p-14 bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner18.jpg?v=1588133916')] bg-cover bg-no-repeat bg-center">
      <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center">
        {title}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-2 m-2 sm:m-2 md:m-3 lg:m-3 xl:m-3">
        {pathArray.map((path, index) => {
          return (
            <React.Fragment key={index}>
              {index === pathArray.length - 1 && (
                <Link href={linkArray[index]} passHref>
                  <a
                    className="text-decoration-none text-sm text-gray-500 hover:text-green-600/100"
                    style={{ pointerEvents: "none" }}
                  >
                    {path}
                  </a>
                </Link>
              )}
              {index < pathArray.length - 1 && (
                <Link href={linkArray[index]} passHref>
                  <a className="text-decoration-none text-sm text-black hover:text-green-600/100">
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
