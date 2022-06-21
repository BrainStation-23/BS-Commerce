import { FC, useState } from "react";
import type { NextComponentType } from "next";
import { Category } from "models";

interface Props {
  categoryList: Category[];
}

const CategoryTable: FC<Props> = ({ categoryList }) => {
  console.log(categoryList);

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
        </tr>
      </thead>
      <tbody>
        {categoryList?.length > 0 ? (
          categoryList.map((category) => {
            return (
              <tr key={category.id}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{category.name}</td>
                <td>
                  <i className="bi bi-check-lg" />
                </td>
                <td>{category.displayOrder}</td>
                <td>
                  <button className="btn border rounded bg-white">
                    <i className="bi bi-pencil-fill" />
                    Edit
                  </button>
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
