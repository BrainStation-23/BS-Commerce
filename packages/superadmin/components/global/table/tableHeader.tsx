import React from "react";

const TableHead = (props: any) => {
  const { columns, onClickForSort } = props;
  return (
    <>
      <thead>
        <tr>
          {columns.map((col: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <th
                  className="text-center"
                  onClick={() => {
                    onClickForSort(col.label);
                  }}
                >
                  {col.label}
                </th>
              </React.Fragment>
            );
          })}
        </tr>
      </thead>
    </>
  );
};
export default TableHead;
