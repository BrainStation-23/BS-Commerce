import { useState } from 'react';

const TableData = (props: any) => {
  const { data } = props;

  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>
          {!showUpdate && <p>{data.seconds}</p>}
          {showUpdate && (
            <input type="text" defaultValue={data.seconds}></input>
          )}
        </td>
        <td className="text-center">
          {data.enabled ? (
            <>
              {!showUpdate && <i className="bi bi-check-lg"></i>}
              {showUpdate && (
                <input type="checkbox" defaultValue="false"></input>
              )}
            </>
          ) : (
            <>
              {!showUpdate && ''}
              {showUpdate && (
                <input type="checkbox" defaultValue="false"></input>
              )}
            </>
          )}
        </td>
        <td className="text-center">
          {data.stopOnError ? (
            <>
              {!showUpdate && <i className="bi bi-x"></i>}
              {showUpdate && (
                <input type="checkbox" defaultValue="false"></input>
              )}
            </>
          ) : (
            <>
              {!showUpdate && ''}
              {showUpdate && (
                <input type="checkbox" defaultValue="false"></input>
              )}
            </>
          )}
        </td>
        <td>{data.startDate}</td>
        <td>{data.endDate}</td>
        <td>{data.successDate}</td>
        {/* <td>
          <button className="btn btn-success">Run</button>
        </td> */}
        {/* <td>
          {!showUpdate && (
            <button
              onClick={() => {
                setShowUpdate(true);
              }}
            >
              <div>
                <span>
                  <i className="bi bi-pencil"></i>
                </span>
                Edit
              </div>
            </button>
          )}
          {showUpdate && (
            <>
              <button className="px-3 py-2">
                <span>
                  <i className="bi bi-check-lg"></i>
                </span>
                Update
              </button>
              <button
                onClick={() => {
                  setShowUpdate(false);
                  console.log(setShowUpdate);
                }}
                className="mt-2 px-3 py-2"
              >
                <span>
                  <i className="bi bi-slash-circle"></i>
                </span>
                Cancel
              </button>
            </>
          )}
        </td> */}
      </tr>
    </>
  );
};

export default TableData;
