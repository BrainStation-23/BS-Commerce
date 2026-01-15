import React from "react";

const TableHead = (props: any) => {
  const { columns } = props;
  return (
    <>
      <thead>
        <tr>
          {columns.map((col: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <th  className="text-center">{col.label}</th>
              </React.Fragment>
            );
          })}
        </tr>
      </thead>
    </>
  );
};
export default TableHead;