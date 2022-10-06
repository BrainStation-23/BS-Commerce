import { CustomerProduct } from '@bs-commerce/models';

import Product from '@/components/global/components/product/product';

interface Props {
  products: CustomerProduct[];
}
const ProductRow: React.FC<Props> = ({ products }: Props) => {
  return (
    <>
      <div className="grid grid-rows-2">
        {products[0] ? (
          <div className="float-left">
            <Product product={products[0]} />
          </div>
        ) : (
          ''
        )}
        {products[1] ? (
          <div className="float-left">
            <Product product={products[1]} />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ProductRow;
