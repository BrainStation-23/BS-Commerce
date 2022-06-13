import type { NextPage } from "next";
import ProductUpdate from "../../components/products/editProductDetails";
import InventoryForm from "../../components/products/forms/inventoryForm";
import PicturesForm from "../../components/products/forms/picturesForm";
import PricesForm from "../../components/products/forms/pricesForm";
import ProductAttributes from "../../components/products/forms/productAttributes";
import ShippingForm from "../../components/products/forms/shippingForm";
import Test from "../../components/products/forms/test";
import ProductList from "../../components/products/productList";
import SearchWindow from "../../components/products/searchWindow";

const Products: NextPage = () => {
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div> */}

        <h2>Products</h2>
        <div className="float-end">
          <a className="btn btn-primary" href="/Product/Create">
            {/* <i className="fas fa-plus-square"></i> */}
            Add new
          </a>
          <button
            type="submit"
            name="download-catalog-pdf"
            className="btn bg-purple"
            // formaction="/Admin/Product/DownloadCatalogPDF"
          >
            <i className="far fa-file-pdf"></i>
            Download catalog as PDF
          </button>
          <div className="btn-group">
            <button type="button" className="btn btn-success">
              <i className="fas fa-download"></i>
              Export
            </button>
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="caret"></span>
              <span className="sr-only">&nbsp;</span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li className="dropdown-item">
                <button
                  type="submit"
                  name="exportxml-all"
                  // formaction="/Admin/Product/ExportToXml"
                >
                  <i className="far fa-file-code"></i>
                  Export to XML (all found)
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" id="exportxml-selected">
                  <i className="far fa-file-code"></i>
                  Export to XML (selected)
                </button>
              </li>
              <li className="dropdown-divider"></li>
              <li className="dropdown-item">
                <button
                  type="submit"
                  name="exportexcel-all"
                  // formaction="/Admin/Product/ExportToExcel"
                >
                  <i className="far fa-file-excel"></i>
                  Export to Excel (all found)
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" id="exportexcel-selected">
                  <i className="far fa-file-excel"></i>
                  Export to Excel (selected)
                </button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            name="importexcel"
            className="btn bg-olive"
            data-toggle="modal"
            data-target="#importexcel-window"
          >
            <i className="fas fa-upload"></i>
            Import
          </button>
          <button
            type="button"
            id="delete-selected"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#delete-selected-action-confirmation"
            name=""
          >
            <i className="far fa-trash-alt"></i>
            Delete (selected)
          </button>
          <div
            id="delete-selected-action-confirmation"
            className="modal fade"
            // tabindex="-1"
            role="dialog"
            aria-labelledby="delete-selected-action-confirmation-title"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    id="delete-selected-action-confirmation-title"
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
                    id="delete-selected-action-confirmation-submit-button"
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
            </div>
            {/* <script>$(document).ready(function () {$('#delete-selected').attr("data-toggle", "modal").attr("data-target", "#delete-selected-action-confirmation");$('#delete-selected-action-confirmation-submit-button').attr("name", $("#delete-selected").attr("name"));$("#delete-selected").attr("name", "");if($("#delete-selected").attr("type") == "submit")$("#delete-selected").attr("type", "button");});</script> */}
          </div>
        </div>
            <SearchWindow />
            {/* <Test /> */}
            <ProductList />
            {/* <ProductUpdate /> */}
            {/* <PricesForm /> */}
            {/* <ShippingForm /> */}
            {/* <InventoryForm /> */}
            {/* <PicturesForm />
            <ProductAttributes /> */}
      </main>
    </>
  );
};

export default Products;
