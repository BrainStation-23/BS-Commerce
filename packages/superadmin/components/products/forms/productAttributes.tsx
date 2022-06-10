const ProductAttributes = () => {
  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-product-attributes"
        data-hideattribute="ProductPage.HideProductAttributesBlock"
        id="product-product-attributes"
      >
        <div className="card-header with-border clearfix" id="parent1">
          <div className="card-title float-start">
            <i className="fas fa-paperclip" />
            Product attributes
          </div>
          <div className="card-tools float-end">
            <div>
              <p>
                <button
                  className="btn btn-tool"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fa toggle-icon fa-minus">0</i>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="collapse " id="collapseExample">
          <div
            className="card-body"
            // id="collapseExample"
            // style={{ display: "block" }}
          >
            <p>
              Product attributes are quantifiable or descriptive aspects of a
              product (such as, color). For example, if you were to create an
              attribute for color, with the values of blue, green, yellow, and
              so on, you may want to apply this attribute to shirts, which you
              sell in various colors (you can adjust a price or weight for any
              of existing attribute values). You can add attribute for your
              product using existing list of attributes, or if you need to
              create a new one go to Catalog &gt; Attributes &gt; Product
              attributes. Please notice that if you want to manage inventory by
              product attributes (e.g. 5 green shirts and 3 blue ones), then
              ensure that Inventory method is set to Track inventory by product
              attributes.
            </p>
             <div
              id="productattribute-edit"
              className="card card-primary card-outline card-outline-tabs nav-tabs-custom"
            >
              <div className="card-header p-0 pt-1 border-bottom-0">
                <ul
                  className="nav nav-tabs"
                  id="custom-content-above-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      aria-selected="false"
                      className="nav-link active"
                      data-tab-name="tab-attributes"
                      data-toggle="pill"
                      href="#tab-attributes"
                      role="tab"
                    >
                      Attributes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      aria-selected="false"
                      className="nav-link"
                      data-tab-name="tab-attribute-combinations"
                      data-toggle="pill"
                      href="#tab-attribute-combinations"
                      role="tab"
                    >
                      Attribute combinations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className="tab-pane fade{0} active"
                    id="tab-attributes"
                    role="tabpanel"
                  >
                    <div className="cards-group">
                      <div className="card card-default">
                        <div className="card-body">
                          <div
                            id="productattributemappings-grid_wrapper"
                            className="dataTables_wrapper dt-bootstrap4 no-footer"
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="dataTables_scroll">
                                  <div
                                    className="dataTables_scrollHead"
                                    style={{
                                      overflow: "hidden",
                                      position: "relative",
                                      border: "0px",
                                      width: "100%",
                                    }}
                                  >
                                    <div
                                      className="dataTables_scrollHeadInner"
                                      style={{
                                        boxSizing: "content-box",
                                        width: "712.775px",
                                        paddingRight: "0px",
                                      }}
                                    >
                                      <table
                                        className="table table-bordered table-hover table-striped dataTable no-footer"
                                        width="100%"
                                        role="grid"
                                        style={{
                                          marginLeft: "0px",
                                          width: "712.775px",
                                        }}
                                      >
                                        <thead>
                                          <tr role="row">
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "65.65px" }}
                                            >
                                              Attribute
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "52.85px" }}
                                            >
                                              Text prompt
                                            </th>
                                            <th
                                              className="sorting_disabled text-center"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "64.275px" }}
                                            >
                                              Is Required
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "79.75px" }}
                                            >
                                              Control type
                                            </th>
                                            <th
                                              className="sorting_disabled text-center"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "52.1875px" }}
                                            >
                                              Display order
                                            </th>
                                            <th
                                              className="sorting_disabled text-center"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "71.65px" }}
                                            >
                                              Validation rules
                                            </th>
                                            <th
                                              className="sorting_disabled text-center"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "69.5125px" }}
                                            >
                                              Condition
                                            </th>
                                            <th
                                              className="sorting_disabled button-column"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "55.9px" }}
                                            >
                                              Edit
                                            </th>
                                          </tr>
                                        </thead>
                                      </table>
                                    </div>
                                  </div>
                                  <div
                                    className="dataTables_scrollBody"
                                    style={{
                                      position: "relative",
                                      overflow: "auto",
                                      width: "100%",
                                    }}
                                  >
                                    <table
                                      className="table table-bordered table-hover table-striped dataTable no-footer"
                                      width="100%"
                                      id="productattributemappings-grid"
                                      role="grid"
                                      aria-describedby="productattributemappings-grid_info"
                                      style={{ width: "100%" }}
                                    >
                                      <thead>
                                        <tr
                                          role="row"
                                          style={{ height: "0px" }}
                                        >
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "65.65px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Attribute
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "52.85px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Text prompt
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled text-center"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "64.275px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Is Required
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "79.75px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Control type
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled text-center"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "52.1875px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Display order
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled text-center"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "71.65px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Validation rules
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled text-center"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "69.5125px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Condition
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled button-column"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "55.9px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Edit
                                            </div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="odd">
                                          <td>Processor</td>
                                          <td />
                                          <td className=" text-center">
                                            <i
                                              className="fas fa-check true-icon"
                                              nop-value="true"
                                            />
                                          </td>
                                          <td>Drop-down list</td>
                                          <td className=" text-center">0</td>
                                          <td className=" text-center" />
                                          <td className=" text-center" />
                                          <td className=" button-column">
                                            <a
                                              className="btn btn-default"
                                              href="/Admin/Product/ProductAttributeMappingEdit/1"
                                            >
                                              <i className="fas fa-pencil-alt" />
                                              Edit
                                            </a>
                                          </td>
                                        </tr>
                                        <tr className="even">
                                          <td>RAM</td>
                                          <td />
                                          <td className=" text-center">
                                            <i
                                              className="fas fa-check true-icon"
                                              nop-value="true"
                                            />
                                          </td>
                                          <td>Drop-down list</td>
                                          <td className=" text-center">0</td>
                                          <td className=" text-center" />
                                          <td className=" text-center" />
                                          <td className=" button-column">
                                            <a
                                              className="btn btn-default"
                                              href="/Admin/Product/ProductAttributeMappingEdit/2"
                                            >
                                              <i className="fas fa-pencil-alt" />
                                              Edit
                                            </a>
                                          </td>
                                        </tr>
                                        <tr className="odd">
                                          <td>HDD</td>
                                          <td />
                                          <td className=" text-center">
                                            <i
                                              className="fas fa-check true-icon"
                                              nop-value="true"
                                            />
                                          </td>
                                          <td>Radio button list</td>
                                          <td className=" text-center">0</td>
                                          <td className=" text-center" />
                                          <td className=" text-center" />
                                          <td className=" button-column">
                                            <a
                                              className="btn btn-default"
                                              href="/Admin/Product/ProductAttributeMappingEdit/3"
                                            >
                                              <i className="fas fa-pencil-alt" />
                                              Edit
                                            </a>
                                          </td>
                                        </tr>
                                        <tr className="even">
                                          <td>OS</td>
                                          <td />
                                          <td className=" text-center">
                                            <i
                                              className="fas fa-check true-icon"
                                              nop-value="true"
                                            />
                                          </td>
                                          <td>Radio button list</td>
                                          <td className=" text-center">0</td>
                                          <td className=" text-center" />
                                          <td className=" text-center" />
                                          <td className=" button-column">
                                            <a
                                              className="btn btn-default"
                                              href="/Admin/Product/ProductAttributeMappingEdit/4"
                                            >
                                              <i className="fas fa-pencil-alt" />
                                              Edit
                                            </a>
                                          </td>
                                        </tr>
                                        <tr className="odd">
                                          <td>Software</td>
                                          <td />
                                          <td className=" text-center">
                                            <i
                                              className="fas fa-times false-icon"
                                              nop-value="false"
                                            />
                                          </td>
                                          <td>Checkboxes</td>
                                          <td className=" text-center">0</td>
                                          <td className=" text-center" />
                                          <td className=" text-center" />
                                          <td className=" button-column">
                                            <a
                                              className="btn btn-default"
                                              href="/Admin/Product/ProductAttributeMappingEdit/5"
                                            >
                                              <i className="fas fa-pencil-alt" />
                                              Edit
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row margin-t-5">
                              <div className="col-lg-5 col-xs-12">
                                <div className="float-lg-left">
                                  <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="productattributemappings-grid_paginate"
                                  >
                                    <ul className="pagination">
                                      <li
                                        className="paginate_button page-item previous disabled"
                                        id="productattributemappings-grid_previous"
                                      >
                                        <a
                                          href="#"
                                          aria-controls="productattributemappings-grid"
                                          data-dt-idx={0}
                                          tabIndex={0}
                                          className="page-link"
                                        >
                                          <i className="k-icon k-i-arrow-w" />
                                        </a>
                                      </li>
                                      <li className="paginate_button page-item active">
                                        <a
                                          href="#"
                                          aria-controls="productattributemappings-grid"
                                          data-dt-idx={1}
                                          tabIndex={0}
                                          className="page-link"
                                        >
                                          1
                                        </a>
                                      </li>
                                      <li
                                        className="paginate_button page-item next disabled"
                                        id="productattributemappings-grid_next"
                                      >
                                        <a
                                          href="#"
                                          aria-controls="productattributemappings-grid"
                                          data-dt-idx={2}
                                          tabIndex={0}
                                          className="page-link"
                                        >
                                          <i className="k-icon k-i-arrow-e" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-xs-12">
                                <div className="text-center">
                                  <div
                                    className="dataTables_length"
                                    id="productattributemappings-grid_length"
                                  >
                                    <label>
                                      Show{" "}
                                      <select
                                        name="productattributemappings-grid_length"
                                        aria-controls="productattributemappings-grid"
                                        className="custom-select custom-select-sm form-control form-control-sm"
                                      >
                                        <option value={7}>7</option>
                                        <option value={15}>15</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                      </select>{" "}
                                      items
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-xs-12">
                                <div className="float-lg-right text-center">
                                  <div
                                    className="dataTables_info"
                                    id="productattributemappings-grid_info"
                                    role="status"
                                    aria-live="polite"
                                  >
                                    1-5 of 5 items
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-1 col-xs-12">
                                <div className="float-lg-right text-center data-tables-refresh">
                                  <div className="dt-buttons btn-group flex-wrap">
                                    <button
                                      className="btn btn-secondary"
                                      tabIndex={0}
                                      aria-controls="productattributemappings-grid"
                                      type="button"
                                    >
                                      <span>
                                        <i
                                          className="fas fa-sync-alt"
                                          style={{ paddingLeft: "5px" }}
                                        />
                                      </span>
                                    </button>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <a
                            className="btn btn-primary"
                            href="/Admin/Product/ProductAttributeMappingCreate?productId=1"
                          >
                            <i className="fas fa-plus-square" />
                            Add a new attribute
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade{0}"
                    id="tab-attribute-combinations"
                    role="tabpanel"
                  >
                    <div className="cards-group">
                      <div className="card card-default">
                        <div className="card-body">
                          <p>
                            Note that some attribute control types that support
                            custom user input (e.g. file upload, textboxes, date
                            picker) are useless with attribute combinations
                          </p>
                          <div
                            id="attributecombinations-grid_wrapper"
                            className="dataTables_wrapper dt-bootstrap4 no-footer"
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="dataTables_scroll">
                                  <div
                                    className="dataTables_scrollHead"
                                    style={{
                                      overflow: "hidden",
                                      position: "relative",
                                      border: "0px",
                                      width: "100%",
                                    }}
                                  >
                                    <div
                                      className="dataTables_scrollHeadInner"
                                      style={{
                                        boxSizing: "content-box",
                                        width: "0px",
                                        paddingRight: "0px",
                                      }}
                                    >
                                      <table
                                        className="table table-bordered table-hover table-striped dataTable no-footer"
                                        width="100%"
                                        role="grid"
                                        style={{
                                          marginLeft: "0px",
                                          width: "0px",
                                        }}
                                      >
                                        <thead>
                                          <tr role="row">
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Attributes
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Stock quantity
                                            </th>
                                            <th
                                              className="sorting_disabled text-center"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Allow out of stock
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              SKU
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Manufacturer part number
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              GTIN
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Overridden price
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Notify admin for quantity below
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Picture
                                            </th>
                                            <th
                                              className="sorting_disabled button-column"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Edit
                                            </th>
                                            <th
                                              className="sorting_disabled button-column"
                                              rowSpan={1}
                                              colSpan={1}
                                              style={{ width: "0px" }}
                                            >
                                              Delete
                                            </th>
                                          </tr>
                                        </thead>
                                      </table>
                                    </div>
                                  </div>
                                  <div
                                    className="dataTables_scrollBody"
                                    style={{
                                      position: "relative",
                                      overflow: "auto",
                                      width: "100%",
                                    }}
                                  >
                                    <table
                                      className="table table-bordered table-hover table-striped dataTable no-footer"
                                      width="100%"
                                      id="attributecombinations-grid"
                                      role="grid"
                                      aria-describedby="attributecombinations-grid_info"
                                      style={{ width: "100%" }}
                                    >
                                      <thead>
                                        <tr
                                          role="row"
                                          style={{ height: "0px" }}
                                        >
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Attributes
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Stock quantity
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled text-center"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Allow out of stock
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              SKU
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Manufacturer part number
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              GTIN
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Overridden price
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Notify admin for quantity below
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Picture
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled button-column"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Edit
                                            </div>
                                          </th>
                                          <th
                                            className="sorting_disabled button-column"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{
                                              width: "0px",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                              borderTopWidth: "0px",
                                              borderBottomWidth: "0px",
                                              height: "0px",
                                            }}
                                          >
                                            <div
                                              className="dataTables_sizing"
                                              style={{
                                                height: "0px",
                                                overflow: "hidden",
                                              }}
                                            >
                                              Delete
                                            </div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="odd">
                                          <td
                                            valign="top"
                                            colSpan={11}
                                            className="dataTables_empty"
                                          >
                                            No data available in table
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row margin-t-5">
                              <div className="col-lg-5 col-xs-12">
                                <div className="float-lg-left">
                                  <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="attributecombinations-grid_paginate"
                                  >
                                    <ul className="pagination">
                                      <li
                                        className="paginate_button page-item previous disabled"
                                        id="attributecombinations-grid_previous"
                                      >
                                        <a
                                          href="#"
                                          aria-controls="attributecombinations-grid"
                                          data-dt-idx={0}
                                          tabIndex={0}
                                          className="page-link"
                                        >
                                          <i className="k-icon k-i-arrow-w" />
                                        </a>
                                      </li>
                                      <li
                                        className="paginate_button page-item next disabled"
                                        id="attributecombinations-grid_next"
                                      >
                                        <a
                                          href="#"
                                          aria-controls="attributecombinations-grid"
                                          data-dt-idx={1}
                                          tabIndex={0}
                                          className="page-link"
                                        >
                                          <i className="k-icon k-i-arrow-e" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-xs-12">
                                <div className="text-center">
                                  <div
                                    className="dataTables_length"
                                    id="attributecombinations-grid_length"
                                  >
                                    <label>
                                      Show{" "}
                                      <select
                                        name="attributecombinations-grid_length"
                                        aria-controls="attributecombinations-grid"
                                        className="custom-select custom-select-sm form-control form-control-sm"
                                      >
                                        <option value={7}>7</option>
                                        <option value={15}>15</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                        <option value={100}>100</option>
                                      </select>{" "}
                                      items
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-xs-12">
                                <div className="float-lg-right text-center">
                                  <div
                                    className="dataTables_info"
                                    id="attributecombinations-grid_info"
                                    role="status"
                                    aria-live="polite"
                                  >
                                    No records
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-1 col-xs-12">
                                <div className="float-lg-right text-center data-tables-refresh">
                                  <div className="dt-buttons btn-group flex-wrap">
                                    <button
                                      className="btn btn-secondary"
                                      tabIndex={0}
                                      aria-controls="attributecombinations-grid"
                                      type="button"
                                    >
                                      <span>
                                        <i
                                          className="fas fa-sync-alt"
                                          style={{ paddingLeft: "5px" }}
                                        />
                                      </span>
                                    </button>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="attributecombinations-grid_deleteConflict-action-alert"
                            className="modal fade"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="attributecombinations-grid_deleteConflict-action-alert-title"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="attributecombinations-grid_deleteConflict-action-alert-title"
                                  >
                                    Information
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div
                                    className="additional-text"
                                    id="attributecombinations-grid_deleteConflict-info"
                                  />
                                </div>
                                <div className="modal-footer">
                                  <span
                                    className="btn btn-primary float-right"
                                    data-dismiss="modal"
                                  >
                                    Ok
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="btn btn-default"
                              id="attributecombinations-grid_deleteConflict"
                              style={{ display: "none" }}
                              data-toggle="modal"
                              data-target="#attributecombinations-grid_deleteConflict-action-alert"
                            />
                          </div>
                          <div
                            id="attributecombinations-grid_deleteCommonFailed-action-alert"
                            className="modal fade"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="attributecombinations-grid_deleteCommonFailed-action-alert-title"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="attributecombinations-grid_deleteCommonFailed-action-alert-title"
                                  >
                                    Information
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div
                                    className="additional-text"
                                    id="attributecombinations-grid_deleteCommonFailed-info"
                                  />
                                </div>
                                <div className="modal-footer">
                                  <span
                                    className="btn btn-primary float-right"
                                    data-dismiss="modal"
                                  >
                                    Ok
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="btn btn-default"
                              id="attributecombinations-grid_deleteCommonFailed"
                              style={{ display: "none" }}
                              data-toggle="modal"
                              data-target="#attributecombinations-grid_deleteCommonFailed-action-alert"
                            />
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            type="submit"
                            id="btnAddNewCombination"
                            // onclick="javascript:OpenWindow('/Admin/Product/ProductAttributeCombinationCreatePopup?productId=1&btnId=btnRefreshCombinations&formId=product-form', 800, 700, true); return false;"
                            className="btn btn-primary"
                          >
                            Add combination
                          </button>
                          <button
                            type="button"
                            id="btnGenerateAllCombinations"
                            className="btn btn-info"
                            data-toggle="modal"
                            data-target="#btnGenerateAllCombinations-action-confirmation"
                            // name
                          >
                            Generate all possible combinations
                          </button>
                          <button
                            type="submit"
                            id="btnGenerateSeveralCombination"
                            // onclick="javascript:OpenWindow('/Admin/Product/ProductAttributeCombinationGeneratePopup?productId=1&btnId=btnRefreshCombinations&formId=product-form', 800, 700, true); return false;"
                            className="btn btn-info"
                          >
                            Generate several combinations
                          </button>
                          <div
                            id="btnGenerateAllCombinations-action-confirmation"
                            className="modal fade"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="btnGenerateAllCombinations-action-confirmation-title"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="btnGenerateAllCombinations-action-confirmation-title"
                                  >
                                    Are you sure?
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Are you sure you want to perform this action?
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="submit"
                                    id="btnGenerateAllCombinations-action-confirmation-submit-button"
                                    className="btn btn-primary float-right"
                                  >
                                    Yes
                                  </button>
                                  <span
                                    className="btn btn-default float-right margin-r-5"
                                    data-dismiss="modal"
                                  >
                                    No, cancel
                                  </span>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                          <button
                            type="submit"
                            id="btnRefreshCombinations"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="generateAllAttributeCombinationsAlert-action-alert"
                      className="modal fade"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="generateAllAttributeCombinationsAlert-action-alert-title"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4
                              className="modal-title"
                              id="generateAllAttributeCombinationsAlert-action-alert-title"
                            >
                              Information
                            </h4>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div
                              className="additional-text"
                              id="generateAllAttributeCombinationsAlert-info"
                            />
                            Error while generating attribute combinations.
                          </div>
                          <div className="modal-footer">
                            <span
                              className="btn btn-primary float-right"
                              data-dismiss="modal"
                            >
                              Ok
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="btn btn-default"
                        id="generateAllAttributeCombinationsAlert"
                        style={{ display: "none" }}
                        data-toggle="modal"
                        data-target="#generateAllAttributeCombinationsAlert-action-alert"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAttributes;
