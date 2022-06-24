import type { NextPage } from "next";
import ProductsList from "../../components/products/productsList";
import SearchWindow from "../../components/products/searchWindow";
import { userAPI } from "../../APIs";
import { Product } from "models";
import { useState } from "react";

const Products: NextPage<{ productsList: Product[] }> = ({ productsList }) => {
  const [products, setProducts] = useState(productsList);
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Products</h2>
        <div className="float-end pb-2">
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
        <div className="mt-2 pt-1">
          <SearchWindow setProducts={setProducts} />
          <ProductsList productsList={products} setProducts={setProducts} />
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const productsList = await userAPI.getProducts(7);
  return {
    props: {
      productsList: productsList || [],
    },
  };
}

export default Products;
