import { FC } from "react";
import Container from "../../global/components/container";
import { ImageCom } from "../../global/components/image";

const HomeShipping: FC = () => {
  return (
    <>
      <Container className="max-w-6xl">
        <div className="flex py-16 flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 flex px-3 pb-2 lg:pb-0">
            <div className="mr-3">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping1_50x50.jpg?v=1588047521"
                height={40}
                width={40}
              />
            </div>
            <div className="">
              <h3 className="text-base mb-1 md:mb-2">Free Shipping</h3>
              <p>Free shipping on all US order or order above $200</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex px-3 pb-2 lg:pb-0">
            <div className="mr-3">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping2_50x50.jpg?v=1588047579"
                height={40}
                width={40}
              />
            </div>
            <div className="">
              <h3 className="text-base mb-1 md:mb-2">SUPPORT 24/7</h3>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex px-3 pb-2 lg:pb-0">
            <div className="mr-3">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping3_50x50.jpg?v=1588047617"
                height={40}
                width={40}
              />
            </div>
            <div className="">
              <h3 className="text-base mb-1 md:mb-2">30 DAYS RETURN</h3>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex px-3 pb-2 lg:pb-0">
            <div className="mr-3">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping4_50x50.jpg?v=1588047895"
                height={40}
                width={40}
              />
            </div>
            <div className="">
              <h3 className="text-base mb-1 md:mb-2">100% PAYMENT SECURE</h3>
              <p>We ensure secure payment with PEV</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeShipping;
