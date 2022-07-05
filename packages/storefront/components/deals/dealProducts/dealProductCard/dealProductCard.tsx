import { CustomerProduct } from "models";
import Icon from "@/components/global/components/icon";
import ProductInfo from "@/components/global/components/product/common/productInfo";
import Picture from "@/components/global/components/product/common/picture";
import Counter from "@/components/global/components/product/common/counter";

const time = {
  day: "00",
  hour: "00",
  min: "00",
  sec: "00",
};

interface Props {
  product: CustomerProduct;
}

const DealProductCard: React.FC<Props> = ({product}: Props) => {

  return (
    <>
      <div className="col mb-0" key={product.id}>
        <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
          <div className="rounded overflow-hidden max-w-sm">
            <div className="relative">
              <div className="relative text-white overflow-hidden transition-all duration-700">
                <div className="relative inset-0 bg-cover bg-center z-0">
                  <Picture
                    product={product}
                    height={280}
                    width={280}
                    src={product?.photos[0]?.url}
                    alt={product?.tags[0]}
                  ></Picture>{" "}
                </div>
              </div>
              <div className="md:flex md:flex-wrap lg:flex flex-wrap hover:-translate-y-20 opacity-70 hover:opacity-70 duration-300 absolute inset-0 z-10 sm:justify-center items-center text-black font-semibold">
                <Counter time={time}></Counter>
                <div className="md:hover:hover:translate-y-28 hover:translate-y-20 opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
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
