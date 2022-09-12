import { CustomerProduct } from '@bs-commerce/models';
import Icon from '@/components/global/components/icon';
import ProductInfo from '@/components/global/components/product/common/productInfo';
import Picture from '@/components/global/components/product/common/picture';
import Counter from '@/components/global/components/product/common/counter';

const time = {
  day: '00',
  hour: '00',
  min: '00',
  sec: '00',
};

interface Props {
  product: CustomerProduct;
}

const DealProductCard: React.FC<Props> = ({ product }: Props) => {
  return (
    <>
      <div className="col mb-0" key={product.id}>
        <div className="duration-0 group cursor-pointer py-3 transition hover:bg-white hover:duration-700">
          <div className="max-w-sm overflow-hidden rounded">
            <div className="relative">
              <div className="relative overflow-hidden text-white transition-all duration-700">
                <div className="relative inset-0 z-0 bg-cover bg-center">
                  <Picture
                    height={280}
                    width={280}
                    src={product?.photos![0]?.url!}
                    alt={product?.tags![0]}
                  ></Picture>{' '}
                </div>
              </div>
              <div className="absolute inset-0 z-10 flex-wrap items-center font-semibold text-black opacity-70 duration-300 hover:-translate-y-20 hover:opacity-70 sm:justify-center md:flex md:flex-wrap lg:flex">
                <Counter time={time}></Counter>
                <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black opacity-0 duration-300 hover:translate-y-20 hover:opacity-90 md:hover:hover:translate-y-28">
                  <Icon product={product} />
                </div>
              </div>
              <div className="text-center">
                <ProductInfo product={product}></ProductInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealProductCard;
