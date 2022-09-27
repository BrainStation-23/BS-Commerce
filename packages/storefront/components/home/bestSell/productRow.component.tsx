import { CustomerProduct } from 'models';
import Product from '@/components/home/bestSell/product';

interface Props {
  products: CustomerProduct[];
}
const ProductRow: React.FC<Props> = ({ products }: Props) => {
  return (
    <>
      <div className="col">
        <div className="grid grid-cols-1 ">
          {products[0] ? (
            <div className="py-1 md:float-left">
              <Product product={products[0]} />
            </div>
          ) : (
            ''
          )}
          {products[1] ? (
            <div className="py-1 md:float-left">
              <Product product={products[1]} />
            </div>
          ) : (
            ''
          )}
          {products[2] ? (
            <div className="py-1 md:float-left">
              <Product product={products[2]} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
