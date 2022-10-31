// Swiper.js doesn't support loop with multiple rows.
// so to achive loop with multiple rows ,
// multiple products were grouped here as a single Component.
//productQuantity = 3 => HorizontalProduct
//productQuantity < 3 => VerticalProduct
import { CustomerProduct } from '@bs-commerce/models';

import VerticalProduct from '@/modules/common/product/verticalProduct';
import HorizontalProduct from '@/modules/common/product/horizontalProduct';

const CycleProductGroup: React.FC<{ products: CustomerProduct[] }> = ({
  products,
}) => {
  const productQuantity = products.length;

  return (
    <div
      className={`grid ${
        productQuantity == 3 ? 'h-96' : ''
      } grid-rows-${productQuantity}`}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={`${
              productQuantity == 3 ? 'py-1 md:float-left' : 'float-left'
            }`}
          >
            {productQuantity >= 3 ? (
              <HorizontalProduct product={product} />
            ) : (
              <VerticalProduct product={product} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CycleProductGroup;
