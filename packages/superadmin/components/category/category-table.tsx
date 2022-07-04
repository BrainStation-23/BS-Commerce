import { FC, useState } from "react";
import type { NextComponentType } from "next";
import { Category } from "models";
import { CategoryInterface } from "./catergory-model";
import Link from "next/link";

interface Props {
  categories: CategoryInterface[];
}

const CategoryTable: FC<Props> = ({ categories }) => {
  // console.log(categories);

  return (
    <table className="table table-striped border rounded text-center">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Published</th>
          <th scope="col">Display order</th>
          <th scope="col">Edit</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        {categories?.length > 0 ? (
          categories.map((category) => {
            return (
              <tr key={category.slug}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td className="">{category.name}</td>
                <td>
                  <i className="bi bi-check-lg" />
                </td>
                <td>1</td>
                <td>
                  <button className="btn border rounded bg-white disabled">
                    <i className="bi bi-pencil-fill me-1" />
                    Edit
                  </button>
                </td>
                <td>
                  {/* <Link href={`category/view/${category.slug}`} passHref> */}
                  <button className="btn border rounded bg-white">
                    <i className="bi bi-eye me-1" />
                    View
                  </button>
                  {/* </Link> */}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

export default CategoryTable;
