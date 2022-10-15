import { CustomerProduct } from '@bs-commerce/models';
import HorizontalProduct from '@/modules/home/bestSell/horizontalProduct';

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
              <HorizontalProduct product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductRow;
