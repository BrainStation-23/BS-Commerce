import { useState } from "react";
import CustomSelect from "../CustomSelect.component";
import FieldTemplate from "./fieldTemplate";

const MetaForm = () => {
  const [btnToggler, setBtnToggler] = useState("bi-plus-lg");

  const toggleButton = () => {
    if (btnToggler == "bi-plus-lg") setBtnToggler("bi-dash");
    else setBtnToggler("bi-plus-lg");
  };
  const keywordOptions = [
    {
      label: "mobile",
      value: "mobile",
    },
    {
      label: "car",
      value: "car",
    },
    {
      label: "video",
      value: "video",
    },
    {
      label: "Fruit",
      value: "Fruit",
    },
    {
      label: "color",
      value: "color",
    },
  ];
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn invisible w-100 h-auto text-top m-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#metaTab"
            aria-expanded="true"
            aria-controls="metaTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="px-3 fs-5 col text-start">
                <i
                  className="bi bi-meta col-1 px-1"
                  style={{ fontSize: "25px" }}
                />
                Meta
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="metaTab">
          <div className="card-body">
            <FieldTemplate
              label="Keywords"
              isRequired={false}
              fieldID="keywords"
              fieldType="none"
              fieldAs=""
              extraClass=""
              fieldClass="custom-select w-100"
              options={keywordOptions}
              component={CustomSelect}
              placeholder="Select brands..."
              isMulti={true}
            />
            <FieldTemplate
              label="Title"
              isRequired={false}
              fieldID="metaTitle"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Description"
              isRequired={false}
              fieldID="metaDescription"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Friendly Page Name"
              isRequired={true}
              fieldID="metaFriendlyPageName"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaForm;
