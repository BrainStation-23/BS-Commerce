import Product from "@/components/global/components/product/product";

const ProductRow = ({ products }: any) => {
  return (
    <>
      <div className="col">
        {products[0] ? <div className="float-left"><Product product={products[0]} /></div> : ""}
        {products[1] ? <div className="float-left"><Product product={products[1]} /></div> : ""}
      </div>
    </>
  );
};

export default ProductRow;
