import React from "react";

const TableBody = (props: any) => {
  const { items, columns } = props;
  return (
    <>
      <tbody>
        {items.map((row: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <tr>
                {columns.map((col: any, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      {col.content(row, col.path, index)}
                    </React.Fragment>
                  );
                })}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
