import { ErrorMessage, Field } from "formik";
import React from "react";
import { useEffect, useState } from "react";
import Tooltips from "../../global/tooltip";

const CategoryForm = (props: any) => {
  const { setCate, categoryData } = props;

  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };
  const [reload, setReload] = useState(false);
  const handleRemoveCategory = (id) => {
    const categoryID = document.getElementById("SelectedCategoryIds").value;
    categoryData.map((data, index) => {
      data.id == id ? (
        <>{(data.isSelected = false)}</>
      ) : (
        console.log("mile nai !! ", data.id)
      );
    });
    setCate(categoryData);
    setReload(!reload);
  };

  const handleAddCategory = () => {
    const isFeatured = document.getElementById("isFeaturedCategory").value;
    const categoryID = document.getElementById("SelectedCategoryIds").value;
    const displayOrder = document.getElementById("displayOrderCategory").value;
    const newcat = categoryData.map((data, index) => {
      data.id == categoryID ? (
        <>
          {(data.isSelected = true)}
          {console.log(isFeatured)}
          {
            (data.isFeatured =
              isFeatured == "false" || isFeatured == false ? false : true)
          }
          {(data.displayOrder = displayOrder)}
        </>
      ) : (
        console.log("mile nai", data.id)
      );
    });

    setCate(categoryData);
    document.getElementById("isFeaturedCategory").value = false;
    document.getElementById("SelectedCategoryIds").value = "--Select--";

    setReload(!reload);
    console.log(categoryData);
  };
  useEffect(() => {});
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="category"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="category"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoryTab"
            aria-expanded="true"
            aria-controls="categoryTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <i
                className="bi bi-diagram-3-fill col-1"
                style={{ fontSize: "25px", marginTop: "-20px" }}
              />
              <div className="px-3 fs-5 col text-start">Category</div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <div className="form-group row my-2 ">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end pe-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="SelectedCategoryIds"
                    id="SelectedCategoryIds_label"
                  >
                    Categories
                  </label>
                  <Tooltips title="Choose categories. You can manage product categories by selecting Catalog > Categories." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="py-2">
                  <Field
                    as="select"
                    id="SelectedCategoryIds"
                    name="SelectedCategoryIds"
                    data-role="multiselect"
                    className="form-control"
                    aria-disabled="false"
                  >
                    <option defaultValue={0} value={0} disabled={true}>
                      --Select--
                    </option>
                    {categoryData?.map((data, index) => {
                      return (
                        <option
                          key={index}
                          value={data.id}
                          disabled={data.isSelected}
                        >
                          {data.value}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="SelectedCategoryIds" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="isFeaturedCategory"
                  >
                    Featured
                  </label>
                  <Tooltips title="Determines whether this product is tax exempt (tax will not be applied to this product at checkout)." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <Field
                  className="check-box mt-2"
                  id="isFeaturedCategory"
                  name="isFeaturedCategory"
                  type="checkbox"
                />
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="isFeaturedCategory" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end p-2">
                  <label
                    className="col-form-label col px-1"
                    htmlFor="displayOrderCategory"
                  >
                    Display Order
                  </label>
                  <Tooltips title="Product cost is a prime product cost. This field is only for internal use, not visible for customers." />
                </div>
              </div>
              <div className="col-md-9 mt-md-3 mx-2 mx-md-0">
                <div className="input-group ">
                  <Field
                    type="number"
                    id="displayOrderCategory"
                    name="displayOrderCategory"
                    aria-disabled="false"
                    className="form-control"
                  />
                </div>
                <div className="errMsg text-red-600 text-danger">
                  <ErrorMessage name="displayOrderCategory" />
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="mx-auto btn btn-primary"
                type="button"
                onClick={() => handleAddCategory()}
              >
                Add
              </button>
            </div>

            <div className="my-3 py-3">
              <table className="table table-bordered ">
                <thead>
                  <th className="text-center py-3">Category</th>
                  <th className="text-center py-3">Feaured</th>
                  <th className="text-center py-3">Display order</th>
                  <th className="text-center py-3">Remove</th>
                </thead>
                <tbody>
                  {categoryData?.map((data, index) => {
                    if (data.isSelected)
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="text-center">{data.value}</td>
                            <td className="text-center">
                              {data.isFeatured ? (
                                <i className="bi bi-check-lg"></i>
                              ) : (
                                ""
                              )}
                            </td>
                            <td className="text-center">{data.displayOrder}</td>
                            <td className="text-center">
                              <button
                                className="mx-auto btn btn-primary"
                                type="button"
                                onClick={() => handleRemoveCategory(data.id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </React.Fragment>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
