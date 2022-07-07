import { FC } from "react";
import SingleView from "./singleView";
interface Props {
  manufacturer: any;
}
const SeoCard: FC<Props> = ({ manufacturer }) => {
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center  ps-2 pt-2">
            <i className="bi bi-meta col-1" style={{ fontSize: "25px" }} />
            <div className="fs-5 col px-3 text-start">Manufacturer Info</div>
          </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView
              label="Keywords"
              value={manufacturer?.seo?.metaKeyword}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Meta Description"
              value={manufacturer?.seo?.metaDescription}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Meta Title"
              value={manufacturer?.seo?.metaTitle}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="SEFTN"
              value={manufacturer?.seo?.SEFN}
              toolkitMessage="toolkitMessage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoCard;
