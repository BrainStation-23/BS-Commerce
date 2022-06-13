import React from "react";
import TableData from "./tableData";

const Table = (props: any) => {
  const { items, columns } = props;

  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-between"
        style={{ overflow: "auto" }}
      >
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Seconds (run period)</th>
              <th>Enabled</th>
              <th>Stop on error</th>
              <th>Last start date</th>
              <th>Last end date</th>
              <th>Last success date</th>
              <th>Run now</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data: any, index: any) => {
              return (
                <React.Fragment key={index}>
                 <TableData data={data} />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
