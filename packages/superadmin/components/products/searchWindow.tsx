const SearchWindow = () => {
  return (
    <>
      <div className="card-body m-auto py-5">
        <div
          className="row search-row opened"
          data-hideattribute="ProductListPage.HideSearchBlock"
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
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchProductName"
                    >
                      Product name
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="A product name."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control text-box single-line"
                    id="SearchProductName"
                    name="SearchProductName"
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchCategoryId"
                    >
                      Category
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a specific category."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Category field is required."
                    id="SearchCategoryId"
                    name="SearchCategoryId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Computers</option>
                    <option value="2">Computers &gt;&gt; Desktops</option>
                    <option value="3">Computers &gt;&gt; Notebooks</option>
                    <option value="4">Computers &gt;&gt; Software</option>
                    <option value="5">Electronics</option>
                    <option value="6">
                      Electronics &gt;&gt; Camera &amp; photo
                    </option>
                    <option value="7">Electronics &gt;&gt; Cell phones</option>
                    <option value="8">Electronics &gt;&gt; Others</option>
                    <option value="9">Apparel</option>
                    <option value="10">Apparel &gt;&gt; Shoes</option>
                    <option value="11">Apparel &gt;&gt; Clothing</option>
                    <option value="12">Apparel &gt;&gt; Accessories</option>
                    <option value="13">Digital downloads</option>
                    <option value="14">Books</option>
                    <option value="15">Jewelry</option>
                    <option value="16">Gift Cards</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchIncludeSubCategories"
                    >
                      Search subcategories
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Check to search in subcategories."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <input
                    className="check-box"
                    data-val="true"
                    data-val-required="The Search subcategories field is required."
                    id="SearchIncludeSubCategories"
                    name="SearchIncludeSubCategories"
                    type="checkbox"
                    value="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchManufacturerId"
                    >
                      Manufacturer
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a specific manufacturer."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Manufacturer field is required."
                    id="SearchManufacturerId"
                    name="SearchManufacturerId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Apple</option>
                    <option value="2">HP</option>
                    <option value="3">Nike</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="SearchVendorId">
                      Vendor
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a specific vendor."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Vendor field is required."
                    id="SearchVendorId"
                    name="SearchVendorId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Vendor 1</option>
                    <option value="2">Vendor 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="form-group row" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="SearchStoreId">
                      Store
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a specific store."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Store field is required."
                    id="SearchStoreId"
                    name="SearchStoreId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Your store name</option>
                    <option value="2">Test store 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchWarehouseId"
                    >
                      Warehouse
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a specific warehouse."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Warehouse field is required."
                    id="SearchWarehouseId"
                    name="SearchWarehouseId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Warehouse 1 (New York)</option>
                    <option value="2">Warehouse 2 (Los Angeles)</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchProductTypeId"
                    >
                      Product type
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Search by a product type."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Product type field is required."
                    id="SearchProductTypeId"
                    name="SearchProductTypeId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="5">Simple</option>
                    <option value="10">Grouped (product with variants)</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="SearchPublishedId"
                    >
                      Published
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title='Search by a "Published" property.'
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    data-val="true"
                    data-val-required="The Published field is required."
                    id="SearchPublishedId"
                    name="SearchPublishedId"
                  >
                    <option defaultValue="0">
                      All
                    </option>
                    <option value="1">Published only</option>
                    <option value="2">Unpublished only</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="label-wrapper">
                    <label className="col-form-label" htmlFor="GoDirectlyToSku">
                      Go directly to product SKU
                    </label>
                    <div
                      title=""
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Enter product SKU and click Go."
                    >
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="input-group input-group-short">
                    <input
                      className="form-control text-box single-line"
                      id="GoDirectlyToSku"
                      name="GoDirectlyToSku"
                      type="text"
                      value=""
                    />
                    <span className="input-group-append">
                      <button
                        type="submit"
                        id="go-to-product-by-sku"
                        name="go-to-product-by-sku"
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
            <div className="text-center col-12">
              <button
                type="button"
                id="search-products"
                className="btn btn-primary btn-search"
              >
                <i className="fas fa-search"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchWindow;
