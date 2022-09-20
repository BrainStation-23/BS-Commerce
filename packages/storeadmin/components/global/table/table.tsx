import TableBody from "./tableBody";
import TableHead from "./tableHeader";

const Table = (props: any) => {
  const { items, columns, onClickForSort } = props;

  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-between"
        style={{ overflow: "auto" }}
      >
        <table className="table table-bordered table-striped">
            <TableHead columns={columns} onClickForSort={onClickForSort}/>
            <TableBody items={items} columns={columns} />
        </table>
      </div>
    </>
  );
};

export default Table;
