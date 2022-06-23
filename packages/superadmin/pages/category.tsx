import type { NextPage } from "next";
import { useState } from "react";
import { userAPI } from "../APIs";
import CategoryTable from "../components/category/category-table";
import data from "../components/category/category-dummy.json";
import { CategoryInterface } from "../components/category/catergory-model";

const Category: NextPage<{ categories: CategoryInterface[] }> = ({
  categories,
}) => {
  // const [categoyList, setCategories] = useState(categories);
  // console.log(categories);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      {/* Page heading */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h1>Categories</h1>
        <div className="">
          <button className="btn btn-info text-white mx-1">
            <i className="bi bi-plus-square pl-2" />
            Add
          </button>
          <button className="btn btn-success mx-1">
            <i className="bi bi-download" />
            Export
          </button>
          <button className="btn btn-secondary mx-1">
            <i className="bi bi-upload" />
            Import
          </button>
          <button className="btn btn-danger mx-1">
            <i className="bi bi-trash3" />
            Delete(selected)
          </button>
        </div>
      </div>
      {/* Search card */}
      <div className="mb-4">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button bg-white text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <i className="bi bi-search mx-3" />
                Search
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body d-flex flex-column align-items-center">
                <div className="d-flex flex-row align-items-center w-100 justify-content-around mb-5">
                  <div className="d-flex flex-row align-items-center">
                    Category
                    <i
                      className="bi bi-question-circle-fill mx-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="A category name"
                    />
                    <input
                      type="text"
                      aria-label="Last name"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    Published
                    <i
                      className="bi bi-question-circle-fill mx-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Search by a published property"
                    />
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"1"}
                    >
                      <option value="1">All</option>
                      <option value="2">Published only</option>
                      <option value="3">Unpublished only</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-info d-flex flex-row align-items-baseline">
                  <i className="bi bi-search pr-3" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category table */}
      <div className="border rounded p-3">
        <div className="mb-3">Learn more about categories</div>
        <CategoryTable categories={categories} />
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  const categories = await userAPI.getCategories();
  // console.log("soasfj");

  console.log(categories);
  return {
    props: {
      categories: categories,
    },
  };
}

export default Category;
