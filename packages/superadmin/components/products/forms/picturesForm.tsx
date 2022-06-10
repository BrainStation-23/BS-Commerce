import Image from "next/image";

const PicturesForm = () => {
  return (
    <>
      <div
        className="card card-secondary card-outline"
        data-card-name="product-pictures"
        data-hideattribute="ProductPage.HidePicturesBlock"
        id="product-pictures"
      >
        <div className="card-header with-border clearfix">
          <div className="card-title">
            <i className="far fa-images" />
            Pictures
          </div>
          <div className="card-tools float-right">
            <button
              className="btn btn-tool"
              data-card-widget="collapse"
              type="button"
            >
              <i className="fa toggle-icon fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div
            id="productpictures-grid_wrapper"
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
                        width: "949px",
                        paddingRight: "0px",
                      }}
                    >
                      <table
                        className="table table-bordered table-hover table-striped dataTable no-footer"
                        width="100%"
                        role="grid"
                        style={{ marginLeft: "0px", width: "949px" }}
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "150px" }}
                            >
                              Picture
                            </th>
                            <th
                              className="sorting_disabled text-center"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "118.088px" }}
                            >
                              Display order
                            </th>
                            <th
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "141.25px" }}
                            >
                              Alt
                            </th>
                            <th
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "145.3px" }}
                            >
                              {/* Title */}
                            </th>
                            <th
                              className="sorting_disabled button-column"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "153px" }}
                            >
                              Edit
                            </th>
                            <th
                              className="sorting_disabled button-column"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "90.3625px" }}
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
                      id="productpictures-grid"
                      role="grid"
                      aria-describedby="productpictures-grid_info"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr role="row" style={{ height: "0px" }}>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "150px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              Picture
                            </div>
                          </th>
                          <th
                            className="sorting_disabled text-center"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "118.088px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              Display order
                            </div>
                          </th>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "141.25px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              Alt
                            </div>
                          </th>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "145.3px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              {/* Title */}
                            </div>
                          </th>
                          <th
                            className="sorting_disabled button-column"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "153px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              Edit
                            </div>
                          </th>
                          <th
                            className="sorting_disabled button-column"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "90.3625px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                          >
                            <div
                              className="dataTables_sizing"
                              style={{ height: "0px", overflow: "hidden" }}
                            >
                              Delete
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td data-columnname="PictureUrl">
                            <a
                              href="https://admin-demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer.jpeg"
                              // target="_blank"
                            >
                              <Image
                                alt={"20"}
                                src="https://admin-demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer.jpeg"
                                // width={150}
                                layout="fill"
                              />
                            </a>
                          </td>
                          <td
                            className=" text-center"
                            data-columnname="DisplayOrder"
                          >
                            1
                          </td>
                          <td data-columnname="OverrideAltAttribute" />
                          <td data-columnname="OverrideTitleAttribute" />
                          <td className=" button-column" data-columnname="Id">
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonEdit_productpictures_grid1"
                              // onClick="editData_productpictures_grid($(this).parent().parent(), '1');return false;"
                            >
                              <i className="fas fa-pencil-alt" />
                              Edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonConfirm_productpictures_grid1"
                              style={{ display: "none" }}
                              // onClick="confirmEditData_productpictures_grid($(this).parent().parent(), '1', 'Id');return false;"
                            >
                              <i className="fas fa-check" />
                              Update
                            </a>
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonCancel_productpictures_grid1"
                              style={{ display: "none" }}
                              // onClick="cancelEditData_productpictures_grid('[object Object]', '1');updateTableWidth('#productpictures-grid');return false;"
                            >
                              <i className="fas fa-ban" />
                              Cancel
                            </a>
                          </td>
                          <td className=" button-column" data-columnname="Id">
                            <a
                              href="#"
                              className="btn btn-default"
                              // onClick="table_deletedata_productpictures_grid('1');return false;"
                            >
                              <i className="far fa-trash-alt" />
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr className="even">
                          <td data-columnname="PictureUrl">
                            <a
                              href="https://admin-demo.nopcommerce.com/images/thumbs/0000021_build-your-own-computer.jpeg"
                              // target="_blank"
                            >
                              <Image
                                alt={"21"}
                                src="https://admin-demo.nopcommerce.com/images/thumbs/0000021_build-your-own-computer.jpeg"
                                // width={150}
                                // height="auto"
                                layout="fill"

                              />
                            </a>
                          </td>
                          <td
                            className=" text-center"
                            data-columnname="DisplayOrder"
                          >
                            2
                          </td>
                          <td data-columnname="OverrideAltAttribute" />
                          <td data-columnname="OverrideTitleAttribute" />
                          <td className=" button-column" data-columnname="Id">
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonEdit_productpictures_grid2"
                              // onClick="editData_productpictures_grid($(this).parent().parent(), '2');return false;"
                            >
                              <i className="fas fa-pencil-alt" />
                              Edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonConfirm_productpictures_grid2"
                              style={{ display: "none" }}
                              // onClick="confirmEditData_productpictures_grid($(this).parent().parent(), '2', 'Id');return false;"
                            >
                              <i className="fas fa-check" />
                              Update
                            </a>
                            <a
                              href="#"
                              className="btn btn-default"
                              id="buttonCancel_productpictures_grid2"
                              style={{ display: "none" }}
                              // onClick="cancelEditData_productpictures_grid('[object Object]', '2');updateTableWidth('#productpictures-grid');return false;"
                            >
                              <i className="fas fa-ban" />
                              Cancel
                            </a>
                          </td>
                          <td className=" button-column" data-columnname="Id">
                            <a
                              href="#"
                              className="btn btn-default"
                              // onClick="table_deletedata_productpictures_grid('2');return false;"
                            >
                              <i className="far fa-trash-alt" />
                              Delete
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
                    id="productpictures-grid_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="productpictures-grid_previous"
                      >
                        <a
                          href="#"
                          aria-controls="productpictures-grid"
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
                          aria-controls="productpictures-grid"
                          data-dt-idx={1}
                          tabIndex={0}
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="productpictures-grid_next"
                      >
                        <a
                          href="#"
                          aria-controls="productpictures-grid"
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
                    id="productpictures-grid_length"
                  >
                    <label>
                      Show{" "}
                      <select
                        name="productpictures-grid_length"
                        aria-controls="productpictures-grid"
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
                    id="productpictures-grid_info"
                    role="status"
                    aria-live="polite"
                  >
                    1-2 of 2 items
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-xs-12">
                <div className="float-lg-right text-center data-tables-refresh">
                  <div className="dt-buttons btn-group flex-wrap">
                    <button
                      className="btn btn-secondary"
                      tabIndex={0}
                      aria-controls="productpictures-grid"
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
            id="productpictures-grid_deleteConflict-action-alert"
            className="modal fade"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="productpictures-grid_deleteConflict-action-alert-title"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    id="productpictures-grid_deleteConflict-action-alert-title"
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
                    id="productpictures-grid_deleteConflict-info"
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
              id="productpictures-grid_deleteConflict"
              style={{ display: "none" }}
              data-toggle="modal"
              data-target="#productpictures-grid_deleteConflict-action-alert"
            />
          </div>
          <div
            id="productpictures-grid_deleteCommonFailed-action-alert"
            className="modal fade"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="productpictures-grid_deleteCommonFailed-action-alert-title"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    id="productpictures-grid_deleteCommonFailed-action-alert-title"
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
                    id="productpictures-grid_deleteCommonFailed-info"
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
              id="productpictures-grid_deleteCommonFailed"
              style={{ display: "none" }}
              data-toggle="modal"
              data-target="#productpictures-grid_deleteCommonFailed-action-alert"
            />
          </div>
          <div className="card card-default">
            <div className="card-header">Add a new picture</div>
            <div className="card-body">
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="AddPictureModel_PictureId"
                    >
                      Picture
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Choose a picture to upload. If the picture size exceeds your stores max image size setting, it will be automatically resized."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div id="picture1977437657value">
                    <input
                      type="hidden"
                      data-val="true"
                      data-val-required="The Picture field is required."
                      id="AddPictureModel_PictureId"
                      name="AddPictureModel.PictureId"
                      defaultValue={0}
                    />
                  </div>
                  <div className="upload-picture-block">
                    <div className="picture-container">
                      <div
                        id="picture1977437657image"
                        className="uploaded-image"
                      >
                        <Image alt="" src="https://admin-demo.nopcommerce.com/images/thumbs/default-image_100.png"                                 layout="fill"
 />
                      </div>
                    </div>
                    <div className="upload-button-container">
                      <div
                        id="picture1977437657"
                        className="upload-image-button float-left px-md-1"
                      >
                        <noscript>
                          &lt;p&gt;Please enable JavaScript to use file
                          uploader.&lt;/p&gt;
                        </noscript>
                        <div>
                          <div className="qq-uploader-selector qq-uploader">
                            <div
                              className="qq-upload-drop-area-selector qq-upload-drop-area"
                              qq-hide-dropzone
                              style={{ display: "none" }}
                            >
                              <span>Drop files here to upload</span>
                            </div>
                            <div
                              className="qq-upload-button-selector btn bg-gradient-green"
                              style={{
                                position: "relative",
                                overflow: "hidden",
                                direction: "ltr",
                              }}
                            >
                              <div>Upload a file</div>
                              <input
                                qq-button-id="d4e550d3-5933-489d-9139-9d80dadec5cc"
                                title="file input"
                                type="file"
                                name="qqfile"
                                style={{
                                  position: "absolute",
                                  right: "0px",
                                  top: "0px",
                                  fontFamily: "Arial",
                                  fontSize: "118px",
                                  margin: "0px",
                                  padding: "0px",
                                  cursor: "pointer",
                                  opacity: 0,
                                  height: "100%",
                                }}
                              />
                            </div>
                            <span className="qq-drop-processing-selector qq-drop-processing qq-hide">
                              <span>Processing dropped files...</span>
                              <span className="qq-drop-processing-spinner-selector qq-drop-processing-spinner" />
                            </span>
                            <ul className="qq-upload-list-selector qq-upload-list" />
                          </div>
                        </div>
                      </div>
                      <div className="remove-image-button float-left px-md-1">
                        <span
                          id="picture1977437657remove"
                          className="btn btn-danger"
                          style={{ display: "none" }}
                        >
                          Remove picture
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="AddPictureModel.PictureId"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="AddPictureModel_OverrideAltAttribute"
                    >
                      Alt
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title='Override "alt" attribute for "img" HTML element. If empty, then a default rule will be used (e.g. product name).'
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    className="form-control text-box single-line"
                    id="AddPictureModel_OverrideAltAttribute"
                    name="AddPictureModel.OverrideAltAttribute"
                    type="text"
                    // defaultValue
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="AddPictureModel.OverrideAltAttribute"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="AddPictureModel_OverrideTitleAttribute"
                    >
                      Title
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title='Override "title" attribute for "img" HTML element. If empty, then a default rule will be used (e.g. product name).'
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                    className="form-control text-box single-line"
                    id="AddPictureModel_OverrideTitleAttribute"
                    name="AddPictureModel.OverrideTitleAttribute"
                    type="text"
                    // defaultValue
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="AddPictureModel.OverrideTitleAttribute"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-3">
                  <div className="label-wrapper">
                    <label
                      className="col-form-label"
                      htmlFor="AddPictureModel_DisplayOrder"
                    >
                      Display order
                    </label>
                    <div
                      // title
                      data-toggle="tooltip"
                      className="ico-help"
                      data-original-title="Display order of the picture. 1 represents the top of the list."
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <span className="k-widget k-numerictextbox" style={{}}>
                    <span className="k-numeric-wrap k-state-default">
                      <input
                        type="text"
                        className="k-formatted-value k-input"
                        title={"0"}
                        tabIndex={0}
                        role="spinbutton"
                        aria-valuemin={-2147483648}
                        aria-valuemax={2147483647}
                        autoComplete="off"
                        aria-valuenow={0}
                        aria-disabled="false"
                        style={{}}
                      />
                      <input
                        type="text"
                        data-val="true"
                        data-val-required="The Display order field is required."
                        id="AddPictureModel_DisplayOrder"
                        name="AddPictureModel.DisplayOrder"
                        defaultValue={0}
                        data-role="numerictextbox"
                        role="spinbutton"
                        className="k-input"
                        aria-valuemin={-2147483648}
                        aria-valuemax={2147483647}
                        aria-valuenow={0}
                        aria-disabled="false"
                        style={{ display: "none" }}
                      />
                      <span
                        className="k-icon k-i-warning"
                        style={{ display: "none" }}
                      />
                      <span className="k-select">
                        <span
                          unselectable="on"
                          className="k-link k-link-increase"
                          aria-label="Increase value"
                          title="Increase value"
                        >
                          <span
                            unselectable="on"
                            className="k-icon k-i-arrow-60-up"
                          />
                        </span>
                        <span
                          unselectable="on"
                          className="k-link k-link-decrease"
                          aria-label="Decrease value"
                          title="Decrease value"
                        >
                          <span
                            unselectable="on"
                            className="k-icon k-i-arrow-60-down"
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="AddPictureModel.DisplayOrder"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <button
                    type="button"
                    id="addProductPicture"
                    className="btn btn-primary"
                  >
                    Add product picture
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="addProductPictureAlert-action-alert"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="addProductPictureAlert-action-alert-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  id="addProductPictureAlert-action-alert-title"
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
                  id="addProductPictureAlert-info"
                />
                Upload picture first.
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
            id="addProductPictureAlert"
            style={{ display: "none" }}
            data-toggle="modal"
            data-target="#addProductPictureAlert-action-alert"
          />
        </div>
        <div
          id="productPictureAddAlert-action-alert"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="productPictureAddAlert-action-alert-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  id="productPictureAddAlert-action-alert-title"
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
                  id="productPictureAddAlert-info"
                />
                Failed to add product picture.
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
            id="productPictureAddAlert"
            style={{ display: "none" }}
            data-toggle="modal"
            data-target="#productPictureAddAlert-action-alert"
          />
        </div>
      </div>
    </>
  );
};

export default PicturesForm;
