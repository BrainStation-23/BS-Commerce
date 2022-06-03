import { FC } from "react";
import Container from "../global/components/container";
import { ImageCom } from "../global/components/image";

const HomeBanner: FC = () => {
  return (
    <>
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pl-3 pr-5">
            <a href="/products/4-soldout-product">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner10_1170x.jpg?v=1588640027"
                height={197}
                width={752}
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 pr-3 pl-5">
            <a href="/products/9-without-shortcode-product">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner11_1170x.jpg?v=1588640050"
                height={197}
                width={752}
              />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeBanner;
