import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Category } from "models";
import { userAPI } from "../../../APIs";

const ViewCategory = () => {
  const [category, setCategory] = useState<Category>();
  const router = useRouter();
  const slug = "" + `${router.query.slug}`;

  //   console.log(slug);

  useEffect(() => {
    async function loadCategory() {
      const response = await userAPI.getCategoryBySlug({ slug: slug });
      //   console.log(response);
      setCategory(response?.data);
    }
    loadCategory();
  }, []);

  return (
    <div className="px-5 mt-2">
      <h2>Category details - {category?.name} </h2>
      <div className="mt-4">
        <div className="accordion" id="category-accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-white text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5>
                  <i className="bi bi-info-lg me-2" /> Category info
                </h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#category-accordion"
            >
              <div className="accordion-body">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row">
                    <span className="me-3">Name:</span>
                    {category?.name}
                  </div>
                  <div className="d-flex flex-row">
                    <span className="me-3">Description:</span>
                    {category?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="accordion" id="displayAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-white text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5>
                  <i className="bi bi-display me-2" /> Display info
                </h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#displayAccordion"
            >
              <div className="accordion-body">
                <div className="d-flex flex-column align-items-start">
                  <div className="d-flex flex-row">
                    <span className="me-3">Published:</span>
                    <input
                      type="checkbox"
                      checked={category?.published}
                      readOnly
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <span className="me-3">Show on home page:</span>
                    <input
                      type="checkbox"
                      checked={category?.showOnHomePage}
                      readOnly
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <span className="me-3">
                      Allow customers to select page size:
                    </span>
                    <input
                      type="checkbox"
                      checked={category?.allowToSelectPageSize}
                      readOnly
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <span className="me-3">Display order:</span>
                    {category?.displayOrder}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
