import { CustomerProduct } from 'models';
import Product from '@/components/home/bestSell/product';

interface Props {
  products: CustomerProduct[];
}
const ProductRow: React.FC<Props> = ({ products }: Props) => {
  return (
    <>
      <div className="col md:pl-9">
        <div className="grid grid-cols-1 content-center ">
          {products[0] ? (
            <div className="mx-auto py-1 md:float-left">
              <Product product={products[0]} />
            </div>
          ) : (
            ''
          )}
          {products[1] ? (
            <div className="mx-auto py-1 md:float-left">
              <Product product={products[1]} />
            </div>
          ) : (
            ''
          )}
          {products[2] ? (
            <div className="mx-auto py-1 md:float-left">
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
