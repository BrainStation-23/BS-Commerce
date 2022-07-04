import React from "react";
import { useState } from "react";
import { ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import FieldTemplate from "./fieldTemplate";

const CategoryForm = (props: any) => {
  const { setCategoryData, categoryData, setFieldValue } = props;
  const [showTable, setShowTable] = useState(false);
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");
  const [reload, setReload] = useState(false);

  const checkTable = () => {
    const totalSelectedCategory = categoryData.filter((data: any) =>
      data.isSelected ? data : null
    );
    const isSelectedZero = totalSelectedCategory[0] ? true : false;
    isSelectedZero == showTable ? "" : setShowTable(isSelectedZero);
  };

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };
  const handleRemoveCategory = (id: any) => {
    categoryData.map((data: any, index: any) => {
      data.id == id ? <>{(data.isSelected = false)}</> : "";
    });
    setCategoryData(categoryData);
    setReload(!reload);
  };

  const handleAddCategory = () => {
    const categoryID = document.getElementById("SelectedCategoryIds").value;
    if (categoryID == 0) {
      toast.error("Please Select a Category");
      return;
    }
    const isFeatured = document.getElementById("isFeaturedCategory").value;
    const displayOrder = document.getElementById("displayOrderCategory").value;
    const newcat = categoryData.map((data: any, index: any) => {
      data.id == categoryID ? (
        <>
          {(data.isSelected = true)}
          {
            (data.isFeatured =
              isFeatured == "false" || isFeatured == false ? false : true)
          }
          {(data.displayOrder = displayOrder)}
        </>
      ) : (
        ""
      );
    });
    setCategoryData(categoryData);
    setFieldValue("isFeaturedCategory", false);
    setFieldValue("displayOrderCategory", 1);
    setFieldValue("SelectedCategoryIds", 0);
    setReload(!reload);
  };
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
              <div className="px-3 fs-5 col text-start">
                <i
                  className="bi bi-diagram-3-fill col-1 px-1"
                  style={{ fontSize: "25px" }}
                />
                Category
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="categoryTab">
          <div className="card-body">
            <div className="form-group row my-2 mb-3">
              <div className="col-md-3">
                <div className="label-wrapper row row-cols-auto float-md-end pe-3">
                  <label
                    className="col-form-label col px-1 fs-5  "
                    htmlFor="SelectedCategoryIds"
                    id="SelectedCategoryIds_label"
                  >
                    Categories<span className="required text-danger ">*</span>
                  </label>
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group">
                  <Field
                    as="select"
                    id="SelectedCategoryIds"
                    name="SelectedCategoryIds"
                    data-role="multiselect"
                    className="form-control single-line border border-0 border-bottom rounded-0 shadow-none border-2"
                    aria-disabled="false"
                  >
                    <option defaultValue={0} value={0} disabled={true}>
                      --Select--
                    </option>
                    {categoryData?.map((data: any, index: any) => {
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

            <FieldTemplate
              label="Featured"
              isRequired={false}
              fieldID="isFeaturedCategory"
              fieldType="checkbox"
              fieldAs=""
              extraClass=""
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Display Order"
              isRequired={false}
              fieldID="displayOrderCategory"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <div className="text-center mt-4">
              <button
                className="mx-auto btn btn-primary"
                type="button"
                onClick={() => handleAddCategory()}
              >
                Add
              </button>
            </div>
            {checkTable()}
            {showTable ? (
              <div className="my-3 py-3">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th className="text-center py-3">Category</th>
                      <th className="text-center py-3">Feaured</th>
                      <th className="text-center py-3">Display order</th>
                      <th className="text-center py-3">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData?.map((data: any, index: any) => {
                      if (data.isSelected)
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td className="text-center">{data.value}</td>
                              <td className="text-center">
                                {data.isFeatured ? (
                                  <i className="bi bi-check-lg"></i>
                                ) : (
                                  "X"
                                )}
                              </td>
                              <td className="text-center">
                                {data.displayOrder}
                              </td>
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
