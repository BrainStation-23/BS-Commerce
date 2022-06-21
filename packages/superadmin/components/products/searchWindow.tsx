import { ErrorMessage, Field, Form, Formik } from "formik";
import { userAPI } from "../../APIs";
import Tooltips from "../global/tooltip";
// import { searchProductSchema } from "./schema/productSchema";
import { Product } from "models";

const SearchWindow = ({ setProducts }: any) => {
  const handleSearchSubmit = async (data: string) => {
    const searchProduct: any = await userAPI.searchProduct(data);
    setProducts([searchProduct]);
  };
  return (
    <>
      <Formik
        initialValues={{
          // SearchProductName: "",
          // SearchCategoryId: "",
          // SearchIncludeSubCategories: false,
          // SearchManufacturerId: 0,
          // SearchVendorId: 0,
          // SearchWarehouseId: 0,
          // SearchProductTypeId: 0,
          // SearchPublishedId: 0,
          GoDirectlyToSku: "",
        }}
        onSubmit={(values, actions) => {
          // const data = {
          //   SearchProductName: values.SearchProductName,
          //   SearchCategoryId: values.SearchCategoryId,
          //   SearchIncludeSubCategories: values.SearchIncludeSubCategories,
          //   SearchManufacturerId: values.SearchManufacturerId,
          //   SearchVendorId: values.SearchVendorId,
          //   SearchWarehouseId: values.SearchWarehouseId,
          //   SearchProductTypeId: values.SearchProductTypeId,
          //   SearchPublishedId: values.SearchPublishedId,
          //   GoDirectlyToSku: values.GoDirectlyToSku,
          // };
          handleSearchSubmit(values.GoDirectlyToSku);
          actions.setSubmitting(false);
        }}
        //validationSchema={searchProductSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="card rounded border-1 mt-5">
                <div className="card-header">
                  <i
                    className="bi bi-search float-start mx-2"
                    aria-hidden="true"
                  />
                  <p className="float mx-2">Search</p>
                </div>
                <div className="card-body">
                  <div className="form-group row py-1">
                    <div className="col-md-3">
                      <div className="label-wrapper row row-cols-auto float-md-end px-2">
                        <label
                          className="col-form-label"
                          htmlFor="GoDirectlyToSku"
                        >
                          Go directly to product SKU
                        </label>
                        <Tooltips title="Enter product SKU and click Go." />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="Field-group Field-group-short ">
                        <div className="row">
                          <Field
                            className="form-control col my-3 mt-2 rounded-start rounded-0 "
                            id="GoDirectlyToSku"
                            name="GoDirectlyToSku"
                            type="text"
                          />
                        </div>

                        <div className="errMsg text-red-600 text-danger">
                          <ErrorMessage name="GoDirectlyToSku" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <span className="Field-group-append">
                        <button
                          type="submit"
                          id="goToProductBySku"
                          name="goToProductBySku"
                          className="btn btn-info btn-flat my-2  rounded-end rounded-0 "
                        >
                          Go
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card rounded border-1 px-2 mt-5">
                <div className="card-body">
                  <div className="row search-row opened">
                    <div className="search-text">
                      <i
                        className="bi bi-search float-start mx-2"
                        aria-hidden="true"
                      />
                      <p className="float mx-2">Search</p>{" "}
                    </div>
                  </div>
                  <div className="search-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group row py-1">
                          <div className="col-md-4">
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchProductName"
                              >
                                Product name
                              </label>
                              <Tooltips title="A product name." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchCategoryId"
                              >
                                Category
                              </label>
                              <Tooltips title="Search by a specific category." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchIncludeSubCategories"
                              >
                                Search subcategories
                              </label>
                              <Tooltips title="Check to search in subcategories." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchManufacturerId"
                              >
                                Manufacturer
                              </label>
                              <Tooltips title="Search by a specific manufacturer." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchVendorId"
                              >
                                Vendor
                              </label>
                              <Tooltips title="Search by a specific vendor." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchWarehouseId"
                              >
                                Warehouse
                              </label>
                              <Tooltips title="Search by a specific warehouse." />
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
                              <option value="2">
                                Warehouse 2 (Los Angeles)
                              </option>
                            </Field>
                            <div className="errMsg text-red-600 text-danger">
                              <ErrorMessage name="SearchWarehouseId" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group row py-1">
                          <div className="col-md-4">
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchProductTypeId"
                              >
                                Product type
                              </label>
                              <Tooltips title="Search by a product type." />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="SearchPublishedId"
                              >
                                Published
                              </label>
                              <Tooltips title='Search by a "Published" property.' />
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
                            <div className="label-wrapper row row-cols-auto float-md-end">
                              <label
                                className="col-form-label col px-1"
                                htmlFor="GoDirectlyToSku"
                              >
                                Go directly to product SKU
                              </label>
                              <Tooltips title="Enter product SKU and click Go." />
                            </div>
                          </div>
                          <div className="col-md-8 ps-4 ">
                            <div className="Field-group Field-group-short ">
                              <div className="row">
                                <Field
                                className="form-control col my-3 mt-2 rounded-start rounded-0 "
                                id="GoDirectlyToSku"
                                name="GoDirectlyToSku"
                                type="text"
                              />
                              <span className="Field-group-append float-end col-auto ps-0">
                                <button
                                  type="button"
                                  id="goToProductBySku"
                                  name="goToProductBySku"
                                  className="btn btn-info btn-flat my-2  rounded-end rounded-0 "
                                >
                                  Go
                                </button>
                              </span>
                              </div>
                              
                              <div className="errMsg text-red-600 text-danger">
                                <ErrorMessage name="GoDirectlyToSku" />
                              </div>
                              
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
                          className="btn btn-primary px-4 p my-1"
                          style={{ borderRadius: "10px" }}
                        >
                          <i className="bi bi-search float-start "></i>
                          <p className="float-end px-2 m-0 ">Search</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchWindow;
