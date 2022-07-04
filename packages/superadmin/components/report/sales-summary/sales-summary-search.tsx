import { useState } from "react";
import ChevronDown from "../../global/icons/chevron-down";
import ChevronUp from "../../global/icons/chevron-up";
import SearchForm from "./sales-summary-search-form";

const SalesSummarySearch = () => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <>
      <div className="card rounded border-1 font-lg px-2 mt-3">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <h5>
                {" "}
                <span>
                  <i className="bi bi-search me-2"></i>
                </span>
                Search
              </h5>
            </div>
            <div>
              {!dropdown && (
                <button
                  onClick={() => {
                    setDropdown(true);
                  }}
                  style={{ background: "none", borderStyle: "none" }}
                >
                  {" "}
                  <ChevronDown />{" "}
                </button>
              )}
              {dropdown && (
                <button
                  onClick={() => {
                    setDropdown(false);
                  }}
                  style={{ background: "none", borderStyle: "none" }}
                >
                  {" "}
                  <ChevronUp />{" "}
                </button>
              )}
            </div>
          </div>
          {dropdown && (
            <>
              <SearchForm />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SalesSummarySearch;