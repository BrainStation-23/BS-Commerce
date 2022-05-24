import React, { Children, useState } from "react";
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
    return child;
  });

  return (
      <div
        className="p-5 bg-gray-800"
        style={{ background: "#f3f3f3" }}
      >
        <h3 className="text-center" style={{fontWeight: "400"}}>{title}</h3>
        <nav>
          <ul className="flex pl-0 flex-wrap justify-center space-x-2">
            {childrenWtihSeperator}
          </ul>
        </nav>
      </div>
  );
};

export default Breadcrumb;
