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
    <div className="sm:p-5 md:p-8 lg:p-14 bg-[url('https://cdn.pixabay.com/photo/2018/05/15/21/00/tomatoes-3404263_1280.jpg')] bg-cover bg-no-repeat bg-center">
      <h3 className="text-4xl text-center">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-2 m-3">
        {pathArray.map((path, index) => {
          return (
            <React.Fragment key={index}>
              {index === pathArray.length - 1 && (
                <Link href={linkArray[index]} passHref>
                  <a className="text-decoration-none text-sm text-gray-500 hover:text-green-600/100" style={{ pointerEvents: "none" }}>
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
