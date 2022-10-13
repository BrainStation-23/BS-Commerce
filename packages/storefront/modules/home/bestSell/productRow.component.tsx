import { CustomerProduct } from '@bs-commerce/models';
import Product from '@/modules/home/bestSell/product';

interface Props {
  products: CustomerProduct[];
}
const ProductRow: React.FC<Props> = ({ products }: Props) => {
  return (
    <>
      <div className="grid h-96 grid-rows-3">
        {products.map((product) => {
          return (
            <div key={product.id} className="py-1 md:float-left">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductRow;
