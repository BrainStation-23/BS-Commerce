import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState, FC } from 'react';
import Image from 'next/image';

import { Product } from 'models';
interface SingleProduct {
  product: Product;
}

const ProductImagesSlider: React.FC<SingleProduct> = ({
  product,
}: SingleProduct) => {
  var isAvailable = true;

  const [activeThumb, setActiveThumb] = useState<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {product?.photos?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="mb-5">
              <Image
                src={item.url}
                alt="product images"
                quality={100}
                width={600}
                height={600}
              />
            </div>
            {product?.info?.oldPrice > 0 ? (
              <div className="absolute top-3 left-3 rounded-lg border border-[#40a944] bg-[#40a944] px-3 py-1 text-base text-white">
                <p>Sale</p>
              </div>
            ) : null}
            {/* {product?.discountPercentage && isAvailable ? (
              <div className="border border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 right-3 px-1 py-1 text-white text-xs">
                <p>{`-${product?.discountPercentage}%`}</p>
              </div>
            ) : null} */}
            {isAvailable && product?.info.oldPrice > 0 && (
              <div className="absolute top-3 right-3 rounded-lg border border-[#40a944] bg-[#40a944] px-3 py-1 text-base font-semibold text-white">
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
          onSwiper={setActiveThumb} //onSwiper={()=>setActiveThumb}
          loop={true}
          navigation={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="product-images-slider-thumbs"
        >
          {product?.photos?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="">
                <Image
                  src={item.url}
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
