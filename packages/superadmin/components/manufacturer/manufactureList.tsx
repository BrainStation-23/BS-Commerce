import _ from "lodash";
import Pagination from "../common/pagination";
import React, { useEffect, useState } from "react";
import SingleManufacturer from "./singleManufacturer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "../sales/service/modal";
import axios from "axios";
import { userAPI } from "../../APIs/index";
import Link from "next/link";
import { useRouter } from "next/router";

const ManufactureList = ({ manufactureData, getAllManufacturers }: any) => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(5);

  const [modal, setModal] = useState({
    delete: false,
  });

  const paginatedData = () => {
    const start = (activePage - 1) * pageCount;
    const requiredData = manufactureData.manufacturers.slice(
      start,
      start + pageCount
    );
    return requiredData;
  };

  const paginateData = paginatedData();

  const handleDelete = () => {
    setModal({ ...modal, delete: true });
  };

  const handleDeleteManufacture = (id: any, name: any) => {
    console.log("Deleted id from list", id, name);
    userAPI.deleteManufacturer(id, router);
    setModal({ ...modal, delete: false });
    getAllManufacturers();
  };

  const handleClickPage = (activePage: any) => {
    setActivePage(activePage);
  };
  useEffect(() => {}, [reloadPage]);

  return (
    <>
      <main className="">
        {/* <button
          onClick={() => setSearch(!search)}
          aria-controls="prouctInfoTab"
          data-bs-toggle="collapse"
          data-bs-target="#prouctInfoTab"
          aria-expanded="true"
          style={{
            width: "100%",
            border: "1px solid #dddddd",
            textAlign: "left",
            fontSize: "20px",
            padding: "20px",
            marginBottom: "20px",
            marginLeft: "10px",
            // transition: '10s'
          }}
        >
          <i className="bi bi-search"></i> Search
        </button> */}

        {/* <div style={{ marginLeft: "20px" }}>
          <Formik
            initialValues={{
              name: "",
              published: "",
            }}
            onSubmit={(values, actions) => {
              const data = {
                name: values.name,
                published: values.published,
              };
              // handleSearchSubmit(data);
              actions.setSubmitting(false);
            }}
          >
            {(formikprops) => {
              return (
                <Form onSubmit={formikprops.handleSubmit}>
                  <div className="card rounded border-1 mt-3">
                    <div className="row">
                      <div className="col-2">
                        <strong className="fs-6 me-1">Manufacturer name</strong>
                        <span>
                          <i
                            className="bi bi-question-circle-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="A manufacturer name"
                            style={{
                              color: "#3c8dbc",
                            }}
                          ></i>
                        </span>
                      </div>
                      <div className="col-3">
                        <Field
                          type="text"
                          className="p-2 w-100 mb-2"
                          id="name"
                          name="name"
                        />
                      </div>

                      <div className="invalid-feedback d-block">
                      </div>
                    </div>

                    <div>
                      <div className="row mt-1">
                        <div className="col-2">
                          <strong className="fs-6 me-1">Published</strong>
                          <span>
                            <i
                              className="bi bi-question-circle-fill"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="A manufacturer name"
                              style={{
                                color: "#3c8dbc",
                              }}
                            ></i>
                          </span>
                        </div>
                        <div className="col-3">
                          <Field
                            as="select"
                            className="p-2 w-100"
                            id="published"
                            name="published"
                          >
                            <option>All</option>
                            <option>Published only</option>
                            <option>Unpublished only</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex flex-wrap justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5"
                      style={{
                        background: "#3c8dbc",
                        border: "none",
                        marginBottom: "20px",
                      }}
                    >
                      <span>
                        <i className="bi bi-search me-2"></i>
                      </span>
                      Search
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div> */}

        <div className="card rounded border-1 px-2 mt-3">
          <div className="card-body">
            <table
              className="table"
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ fontSize: "20px" }}>
                  <th
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <span>Name</span>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <span>Published</span>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <span>Display order</span>
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <span>Edit</span>
                  </th>
                  <th style={{ textAlign: "center" }}>
                    <span>Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {console.log(paginateData)} */}
                {paginateData?.length > 0 &&
                  paginateData?.map((manufacturer: any, index: any) => (
                    <SingleManufacturer
                      key={manufacturer.id}
                      manufacturer={manufacturer}
                      handleDeleteManufacture={handleDeleteManufacture}
                      handleDelete={handleDelete}
                      modal={modal}
                      setModal={setModal}
                    />
                  ))}
              </tbody>
            </table>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "18px" }}
            >
              <span>
                <Pagination
                  totalItems={manufactureData.manufacturers.length}
                  pageCount={pageCount}
                  activePage={activePage}
                  onClickPage={handleClickPage}
                ></Pagination>
              </span>
              <span>
                <span style={{ margin: "10px" }}>Show</span>
                <button
                  className="dropdown"
                  style={{
                    padding: "10px",
                    border: "1px solid gray",
                  }}
                >
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: "10px",
                    }}
                  >
                    {pageCount}
                  </a>
                  <div className="dropdown-menu">
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(2)}
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(5)}
                    >
                      5
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => setPageCount(10)}
                    >
                      10
                    </a>
                  </div>
                </button>
                <span style={{ margin: "10px" }}>items</span>
              </span>
              {(activePage - 1) * pageCount + 1}-
              {(activePage - 1) * pageCount + pageCount} of {pageCount} items
              <button
                style={{
                  height: "100%",
                  padding: "10px",
                  width: "5%",
                  border: "1px solid white",
                }}
                onClick={() =>
                  (window.location.href = `http://localhost:3001/Admin/Manufacturer/list`)
                }
              >
                <i className="bi bi-arrow-repeat"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManufactureList;
