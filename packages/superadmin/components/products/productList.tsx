const ProductList = () => {
  return (
    <>
      <div className="card-body">
        <div className="documentation-reference">
          <span>
            Learn more about{" "}
            <a target="_blank" href="">
              products
            </a>
          </span>
        </div>
        <div id="products-grid_wrapper" className="">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <div
                  style={{
                    position: "relative",
                    overflow: "auto",
                    width: "100%",
                  }}
                >
                  <table
                    className="table table-bordered table-hover table-striped dataTable no-footer"
                    width="100%"
                    id="products-grid"
                    role="grid"
                    aria-describedby="products-grid_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row" style={{ height: "60px" }}>
                        <th
                          className="text-center"
                          style={{
                            width: "18.5625px",
                            height: "0px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            <input className="mastercheckbox" type="checkbox" />
                          </div>
                        </th>
                        <th  
                          style={{
                            width: "78.875px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div
                            className="dataTables_sizing"
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Picture
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "85.8875px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Product name
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "86.3625px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            SKU
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "35.825px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Price
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "60.8625px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Stock quantity
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "71.95px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Published
                          </div>
                        </th>
                        <th 
                          style={{
                            width: "59.675px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            height: "60px",
                          }}
                        >
                          <div 
                            style={{ height: "60px", overflow: "hidden" }}
                          >
                            Edit
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td className=" text-center">
                          <input
                            name="checkbox_products"
                            defaultValue={1}
                            type="checkbox"
                            className="checkboxGroups"
                          />
                        </td>
                        <td>
                          <img src="https://admin-demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer_75.jpeg" />
                        </td>
                        <td>Build your own computer</td>
                        <td>COMP_CUST</td>
                        <td>1200</td>
                        <td>10000</td>
                        <td className=" text-center">
                          <i
                            className="fas fa-check true-icon"
                            nop-value="true"
                          ></i>
                        </td>
                        <td className=" button-column">
                          <a className="btn btn-default" href="Edit/1">
                            <i className="fas fa-pencil-alt"></i>Edit
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className=" text-center">
                          <input
                            name="checkbox_products"
                            defaultValue={2}
                            type="checkbox"
                            className="checkboxGroups"
                          />
                        </td>
                        <td>
                          <img src="https://admin-demo.nopcommerce.com/images/thumbs/0000022_digital-storm-vanquish-3-custom-performance-pc_75.jpeg" />
                        </td>
                        <td>Digital Storm VANQUISH 3 Custom Performance PC</td>
                        <td>DS_VA3_PC</td>
                        <td>1259</td>
                        <td>10000</td>
                        <td className=" text-center">
                          <i
                            className="fas fa-check true-icon"
                            nop-value="true"
                          ></i>
                        </td>
                        <td className=" button-column">
                          <a className="btn btn-default" href="Edit/2">
                            <i className="fas fa-pencil-alt"></i>Edit
                          </a>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className=" text-center">
                          <input
                            name="checkbox_products"
                            defaultValue={3}
                            type="checkbox"
                            className="checkboxGroups"
                          />
                        </td>
                        <td>
                          <img src="https://admin-demo.nopcommerce.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_75.jpeg" />
                        </td>
                        <td>Lenovo IdeaCentre 600 All-in-One PC</td>
                        <td>LE_IC_600</td>
                        <td>500</td>
                        <td>9999</td>
                        <td className=" text-center">
                          <i
                            className="fas fa-check true-icon"
                            nop-value="true"
                          ></i>
                        </td>
                        <td className=" button-column">
                          <a className="btn btn-default" href="Edit/3">
                            <i className="fas fa-pencil-alt"></i>Edit
                          </a>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className=" text-center">
                          <input
                            name="checkbox_products"
                            defaultValue={4}
                            type="checkbox"
                            className="checkboxGroups"
                          />
                        </td>
                        <td>
                          <img src="https://admin-demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_75.jpeg" />
                        </td>
                        <td>Apple MacBook Pro 13-inch</td>
                        <td>AP_MBP_13</td>
                        <td>1800</td>
                        <td>10000</td>
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
                  id="products-grid_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="products-grid_previous"
                    >
                      <a
                        href="#"
                        aria-controls="products-grid"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                      >
                        <i className="k-icon k-i-arrow-w"></i>
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="products-grid"
                        data-dt-idx={1}
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="products-grid"
                        data-dt-idx={2}
                        tabIndex={0}
                        className="page-link"
                      >
                        2
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="products-grid"
                        data-dt-idx={3}
                        tabIndex={0}
                        className="page-link"
                      >
                        3
                      </a>
                    </li>
                    <li
                      className="paginate_button page-item next"
                      id="products-grid_next"
                    >
                      <a
                        href="#"
                        aria-controls="products-grid"
                        data-dt-idx={4}
                        tabIndex={0}
                        className="page-link"
                      >
                        <i className="k-icon k-i-arrow-e"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
              <div className="text-center">
                <div className="dataTables_length" id="products-grid_length">
                  <label>
                    Show{" "}
                    <select
                      name="products-grid_length"
                      aria-controls="products-grid"
                      className="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value={7}>7</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    items
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12">
              <div className="float-lg-right text-center">
                <div
                  className="dataTables_info"
                  id="products-grid_info"
                  role="status"
                  aria-live="polite"
                >
                  1-15 of 45 items
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-xs-12">
              <div className="float-lg-right text-center data-tables-refresh">
                <div className="dt-buttons btn-group flex-wrap">
                  <button
                    className="btn btn-secondary"
                    tabIndex={0}
                    aria-controls="products-grid"
                    type="button"
                  >
                    <span>
                      <i
                        className="fas fa-sync-alt"
                        style={{ paddingLeft: "5px" }}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="deleteSelectedFailed-action-alert"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="deleteSelectedFailed-action-alert-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  id="deleteSelectedFailed-action-alert-title"
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
                  id="deleteSelectedFailed-info"
                ></div>
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
            id="deleteSelectedFailed"
            style={{ display: "none" }}
            data-toggle="modal"
            data-target="#deleteSelectedFailed-action-alert"
          ></div>
        </div>
        <div
          id="nothingSelectedAlert-action-alert"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="nothingSelectedAlert-action-alert-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  id="nothingSelectedAlert-action-alert-title"
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
                  id="nothingSelectedAlert-info"
                ></div>
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
            id="nothingSelectedAlert"
            style={{ display: "none" }}
            data-toggle="modal"
            data-target="#nothingSelectedAlert-action-alert"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
