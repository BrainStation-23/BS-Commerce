import Product from "./product";

const ProductRow = ({ products }: any) => {
  return (
    <>
      <div className="col pl-9">
        {products[0] ? <div className="float-left"><Product product={products[0]} /></div> : ""}
        {products[1] ? <div className="float-left"><Product product={products[1]} /></div> : ""}
        {products[2] ? <div className="float-left"><Product product={products[2]} /></div> : ""}
      </div>
    </>
  );
};

export default ProductRow;
