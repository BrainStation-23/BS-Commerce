import SingleView from "../singleView";

const ProductInfoCard = (props: any) => {
  const { product } = props;

  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="product-info"
        id="product-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <div className="card-title row align-items-center pt-2 ps-2">
            <i
              className="bi bi-info-lg align-text-top col-1"
              style={{ fontSize: "25px" }}
            />
            <div className="px-3 fs-5 col text-start">Product info</div>
          </div>
        </div>
        <div className="" id="prouctInfoTab">
          <div className="card-body">
            <SingleView
              label="Product name"
              value={product?.info?.name}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Short description"
              value={product?.info?.shortDescription}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Full description"
              value={product?.info?.fullDescription}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="SKU"
              value={product?.info?.sku}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Price"
              value={product?.info?.price}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Old price"
              value={product?.info?.oldPrice}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Product cost"
              value={product?.info?.cost}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Publish Date"
              value={product?.info?.publishDate}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Tags"
              value={product?.tags}
              toolkitMessage="toolkitMessage"
            />
            <SingleView
              label="Brands"
              value={product?.brands}
              toolkitMessage="toolkitMessage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoCard;
