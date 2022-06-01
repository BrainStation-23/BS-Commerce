import React, { Children } from "react";
const Breadcrumb = ({ children, title }: any) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <React.Fragment key={index}>
          {child}
          <span>/</span>
        </React.Fragment>
      );
    }
    //console.log(child);
    return child;
  });

  return (
    <div className="sm:p-5 md:p-8 lg:p-12 bg-[url('https://cdn.pixabay.com/photo/2018/05/15/21/00/tomatoes-3404263_1280.jpg')] bg-cover bg-no-repeat bg-center">
      <h3 className="text-4xl text-center">
        {title}
      </h3>
      <nav>
        <ul className="flex my-3 p-0 flex-wrap justify-center space-x-2">
          {childrenWtihSeperator}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
