import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import myImageLoader from 'image/loader';
import Image from 'next/legacy/image';
import { useState } from 'react';

import { Product, ProductPhoto } from '@bs-commerce/models';
interface SingleProduct {
  product: Product;
}

const ProductImagesSlider: React.FC<SingleProduct> = ({
  product,
}: SingleProduct) => {
  var isAvailable = true;

  const [activeThumb, setActiveThumb] = useState<SwiperClass>();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="product-images-slider"
      >
        {product?.photos?.map((item: ProductPhoto, index: number) => (
          <SwiperSlide key={index}>
            <div className="mb-5">
              <Image
                loader={myImageLoader}
                src={item.url!}
                alt="product images"
                quality={100}
                width={600}
                height={400}
              />
            </div>
            {Math.abs(product?.info.oldPrice - product?.info.price) > 0 ? (
              <div className="absolute top-3 left-3 rounded-lg border border-primary bg-primary px-3 py-1 text-base text-white dark:bg-dark_primary dark:bg-dark_primary">
                <p>Sale</p>
              </div>
            ) : null}
            {/* {product?.discountPercentage && isAvailable ? (
              <div className="border border-primary rounded-lg bg-primary absolute top-3 right-3 px-1 py-1 text-white text-xs">
                <p>{`-${product?.discountPercentage}%`}</p>
              </div>
            ) : null} */}
            {isAvailable &&
              Math.abs(product?.info.oldPrice - product?.info.price) > 0 && (
                <div className="absolute top-3 right-3 rounded-lg border border-primary bg-primary px-3 py-1 text-base font-semibold text-white dark:bg-dark_primary">
                  <p>{`-$${Math.abs(
                    product?.info.oldPrice - product?.info.price
                  )}`}</p>
                </div>
              )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="ml-8 w-4/5 md:ml-16">
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          navigation={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="product-images-slider-thumbs"
        >
          {product?.photos?.map((item: ProductPhoto, index: number) => (
            <SwiperSlide key={index}>
              <div className="">
                <Image
                  loader={myImageLoader}
                  src={item.url!}
                  alt="product images"
                  width={600}
                  height={600}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductImagesSlider;
