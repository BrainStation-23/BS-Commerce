import Icon from "../global/components/product/icon";
import Picture from "../global/components/product/picture";
import ProductInfo from "../global/components/product/productInfo";
import { useEffect, useState } from "react";

interface productInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  images: [string];
  category: string;
}

const Product = (props: { product: productInterface }) => {
  const [pictureWidth, setPictureWidth] = useState<number>(92);
  const product = props.product;

  function getResolution() {
    console.log("Your screen resolution is: " + screen.width);
    const sw = screen.width;

    if (sw < 768) setPictureWidth(92);
    else if (sw < 1024) setPictureWidth(108);
    else if (sw <= 1440) setPictureWidth(110);
    else setPictureWidth(120);
  }

  useEffect(() => {
    getResolution();
  }, [pictureWidth]);
  return (
    <>
      <div className="col mb-0" key={product.id}>
        <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
          <div className="rounded overflow-hidden max-w-sm">
            <div className="relative">
              <div
                className={`group  max-w-xs grid grid-cols-3 gap-4 relative text-white overflow-hidden transition-all duration-700 `}
              >
                <div className="relative inset-0 bg-fill bg-center z-0">
                  <Picture
                    product={product}
                    height={pictureWidth}
                    width={pictureWidth}
                    src={product.images[0]}
                    alt={product.category}
                  />
                </div>
                <div className="scale-0 group-hover:scale-100 transition-transform origin-left duration-300 absolute bottom-0.5 left-28 md:left-10 md:bottom-0 lg:bottom-1 lg:left-16 xl:left-32 xl:bottom-5 ">
                  <Icon />
                </div>
                <div className="col-span-2 text-left">
                  <ProductInfo product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
