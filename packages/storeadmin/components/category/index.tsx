import type { NextComponentType } from "next";
import { useEffect, useState } from "react";
import { NestedCategoryList } from "@bs-commerce/models";

import { userAPI } from "@/APIs";

import CategoryTable from "@/components/category/category-table";
import Accordion from "@/components/global/accordion";
import Link from "next/link";

const CategoryComponent: NextComponentType = ({}) => {
  const [categoryList, setCategoryList] = useState<NestedCategoryList[]>();

  useEffect(() => {
    async function loadCategories() {
      const response = await userAPI.getCategoryList();
      setCategoryList(response?.data.categories);
    }
    loadCategories();
  }, []);

  return (
    <main>
      {/* Page heading */}
      <div className="d-flex justify-content-between align-items-center flex-row">
        <h1>Categories</h1>
        <div className="">
          <Link href="/category/create" passHref legacyBehavior>
            <button className="btn btn-info mx-1 text-white">
              <i className="bi bi-plus-square me-1 pl-2" />
              Add
            </button>
          </Link>
          {/* <button className="btn btn-success disabled mx-1">
            <i className="bi bi-download me-1" />
            Export
          </button>
          <button className="btn btn-secondary disabled mx-1">
            <i className="bi bi-upload me-1" />
            Import
          </button>
          <button className="btn btn-danger disabled mx-1">
            <i className="bi bi-trash3 me-1" />
            Delete(selected)
          </button> */}
        </div>
      </div>
      {/* Search card */}
      {/* <div className="mb-4">
        <Accordion title="Search" icon="bi bi-search" id={1} show={true}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center w-100 justify-content-around mb-5 flex-row">
              <div className="d-flex align-items-center flex-row">
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
              <div className="d-flex align-items-center flex-row">
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
            <button className="btn btn-info d-flex align-items-baseline flex-row">
              <i className="bi bi-search pr-3" />
              Search
            </button>
          </div>
        </Accordion>
      </div> */}

      {/* Category table */}
      {categoryList?.length! > 0 ? (
        <div className="rounded border bg-white p-3">
          <div className="mb-3">Learn more about categories</div>
          <CategoryTable categories={categoryList!} />
        </div>
      ) : (
        <div className="rounded border bg-white p-3">
          There&apos;s no category!
        </div>
      )}
    </main>
  );
};

export default CategoryComponent;
