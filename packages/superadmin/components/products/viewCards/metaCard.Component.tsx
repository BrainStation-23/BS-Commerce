import { FC } from "react";

import { Product } from "models";
import SingleView from "@/components/products/singleView";
interface MetaCardInterface {
  product: Product;
}
const MetaCard: FC<MetaCardInterface> = (props: MetaCardInterface) => {
  const { product } = props;

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
            <div className="fs-5 col px-3 text-start">Meta</div>
          </div>
        </div>
        <div className="" id="metaTab">
          <div className="card-body">
            <SingleView label="Keywords" value={product?.meta?.keywords} />
            <SingleView label="Title" value={product?.meta?.title} />
            <SingleView
              label="Description"
              value={product?.meta?.description}
            />
            <SingleView
              label="Friendly Page Name"
              value={product?.meta?.friendlyPageName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaCard;
