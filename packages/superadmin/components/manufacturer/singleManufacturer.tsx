import type { NextComponentType } from "next";
import Link from "next/link";
import { useState } from "react";

const SingleManufacturer = ({ manufacturer, handleDeleteManufacture }: any) => {
  const [modal, setModal] = useState({
    delete: false,
  });

  const handleDelete = () => {
    setModal({ ...modal, delete: true });
  };
  const handleDeleteOff = () => {
    setModal({ ...modal, delete: false });
    handleDeleteManufacture(manufacturer.id, manufacturer.name);
  };
  return (
    <>
      <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
        <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>
          {manufacturer.name}
        </td>
        {manufacturer.isPublished ? (
          <td
            style={{
              border: "1px solid #dddddd",
              textAlign: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="current"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </td>
        ) : (
          <td
            style={{
              border: "1px solid #dddddd",
              textAlign: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            {/* <i className="bi bi-x"></i> */}
          </td>
        )}
        <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>
          {manufacturer.displayOrder}
        </td>
        <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>
          <Link href={"Manufacturer/Edit/" + manufacturer.id} passHref>
            <button
              style={{ border: "1px solid #dddddd" }}
              type="button"
              className="btn btn-light btn-lg"
            >
              <i className="bi bi-pencil"></i>
              {"  "}Edit
            </button>
          </Link>
        </td>
        <td style={{ border: "1px solid #dddddd", textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            style={{
              borderRadius: "5px",
              backgroundColor: "#dd4b39",
              marginLeft: "10px",
            }}
            onClick={() => handleDelete()}
          >
            <i className="bi bi-trash"></i>
            {"  "}
          </button>
        </td>
      </tr>
      {modal.delete ? (
        <div
          className="modal"
          style={{ display: modal.delete ? "block" : "none" }}
        >
          <div
            className="modal-backdrop"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => {
              // close modal when outside of modal is clicked
              setModal({ ...modal, delete: false });
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation();
              }}
              style={{
                textAlign: "left",
                width: "30%",
                marginLeft: "40%",
                marginTop: "5%",
                border: "1px solid gray",
                boxShadow: "1px 1px 10px gray",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div className="container">
                <h1>Are you sure?</h1>
                <hr />
                <p>Are you sure you want to delete this item?</p>
                <br />

                <div className="clearfix">
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{
                      border: "1px solid gray",
                      backgroundColor: "gray",
                      color: "white",
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      setModal({
                        ...modal,
                        delete: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteOff()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default SingleManufacturer;
