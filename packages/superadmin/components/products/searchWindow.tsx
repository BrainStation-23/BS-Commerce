import { ErrorMessage, Field, Form, Formik } from "formik";
import { searchProductSchema } from "./schema/productFormSchema";

const SearchWindow = () => {
  return (
    <>
      <Formik
        initialValues={{
          SearchProductName: "",
          SearchCategoryId: "",
          SearchIncludeSubCategories: false,
          SearchManufacturerId: 0,
          SearchVendorId: 0,
          SearchWarehouseId: 0,
          SearchProductTypeId: 0,
          SearchPublishedId: 0,
          GoDirectlyToSku: "",
        }}
        onSubmit={(values, actions) => {
          const data = {
            SearchProductName: values.SearchProductName,
            SearchCategoryId: values.SearchCategoryId,
            SearchIncludeSubCategories: values.SearchIncludeSubCategories,
            SearchManufacturerId: values.SearchManufacturerId,
            SearchVendorId: values.SearchVendorId,
            SearchWarehouseId: values.SearchWarehouseId,
            SearchProductTypeId: values.SearchProductTypeId,
            SearchPublishedId: values.SearchPublishedId,
            GoDirectlyToSku: values.GoDirectlyToSku,
          };
          console.log(data);
          console.log("h");

          // handleSearchSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={searchProductSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="card-body m-auto py-5">
                <div
                  className="row search-row opened"
                >
                  <div className="search-text">Search</div>
                  <div className="icon-search">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </div>
                  <div className="icon-collapse">
                    <i className="far fa-angle-up" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="search-body ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchProductName"
                            >
                              Product name
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="A product name."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            className="form-control text-box single-line"
                            id="SearchProductName"
                            name="SearchProductName"
                            type="text"
                          />
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchProductName" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchCategoryId"
                            >
                              Category
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Search by a specific category."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            data-val="true"
                            data-val-required="The Category field is required."
                            id="SearchCategoryId"
                            name="SearchCategoryId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Computers</option>
                            <option value="2">
                              Computers &gt;&gt; Desktops
                            </option>
                            <option value="3">
                              Computers &gt;&gt; Notebooks
                            </option>
                            <option value="4">
                              Computers &gt;&gt; Software
                            </option>
                            <option value="5">Electronics</option>
                            <option value="6">
                              Electronics &gt;&gt; Camera &amp; photo
                            </option>
                            <option value="7">
                              Electronics &gt;&gt; Cell phones
                            </option>
                            <option value="8">
                              Electronics &gt;&gt; Others
                            </option>
                            <option value="9">Apparel</option>
                            <option value="10">Apparel &gt;&gt; Shoes</option>
                            <option value="11">
                              Apparel &gt;&gt; Clothing
                            </option>
                            <option value="12">
                              Apparel &gt;&gt; Accessories
                            </option>
                            <option value="13">Digital downloads</option>
                            <option value="14">Books</option>
                            <option value="15">Jewelry</option>
                            <option value="16">Gift Cards</option>
                          </Field>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchIncludeSubCategories"
                            >
                              Search subcategories
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Check to search in subcategories."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8 my-2">
                          <Field
                            className="check-box"
                            id="SearchIncludeSubCategories"
                            name="SearchIncludeSubCategories"
                            type="checkbox"
                          />
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchIncludeSubCategories" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchManufacturerId"
                            >
                              Manufacturer
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Search by a specific manufacturer."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            id="SearchManufacturerId"
                            name="SearchManufacturerId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Apple</option>
                            <option value="2">HP</option>
                            <option value="3">Nike</option>
                          </Field>
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchManufacturerId" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchVendorId"
                            >
                              Vendor
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Search by a specific vendor."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            id="SearchVendorId"
                            name="SearchVendorId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Vendor 1</option>
                            <option value="2">Vendor 2</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchWarehouseId"
                            >
                              Warehouse
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Search by a specific warehouse."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            id="SearchWarehouseId"
                            name="SearchWarehouseId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Warehouse 1 (New York)</option>
                            <option value="2">Warehouse 2 (Los Angeles)</option>
                          </Field>
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchWarehouseId" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchProductTypeId"
                            >
                              Product type
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Search by a product type."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            id="SearchProductTypeId"
                            name="SearchProductTypeId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="5">Simple</option>
                            <option value="10">
                              Grouped (product with variants)
                            </option>
                          </Field>
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchProductTypeId" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchPublishedId"
                            >
                              Published
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title='Search by a "Published" property.'
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            id="SearchPublishedId"
                            name="SearchPublishedId"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Published only</option>
                            <option value="2">Unpublished only</option>
                          </Field>
                          <div className="errMsg text-red-600 text-danger">
                            <ErrorMessage name="SearchPublishedId" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper text-end row">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="GoDirectlyToSku"
                            >
                              Go directly to product SKU
                            </label>
                            <div
                              data-toggle="tooltip"
                              className="bi bi-question-circle-fill p-0 mt-2"
                              data-placement="bottom"
                              title="Enter product SKU and click Go."
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="Field-group Field-group-short">
                            <Field
                              className="form-control text-box single-line"
                              id="GoDirectlyToSku"
                              name="GoDirectlyToSku"
                              type="text"
                            />
                            <div className="errMsg text-red-600 text-danger">
                              <ErrorMessage name="GoDirectlyToSku" />
                            </div>
                            <span className="Field-group-append">
                              <button
                                type="button"
                                id="goToProductBySku"
                                name="goToProductBySku"
                                className="btn btn-info btn-flat"
                              >
                                Go
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-12 ">
                      <button
                        type="submit"
                        id="search-products"
                        className="btn btn-primary btn-search py-0 my-1"
                      >
                        <i className="bi bi-search float-start "></i>
                        <p className="float-end px-2 ">Search</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchWindow;
