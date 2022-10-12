import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { SwiperSlide } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';

import { slideDetailsInterface } from '@/components/home/imageSlider/models';

import SinglSlide from '@/components/home/imageSlider/singleSlide.component';
import CarouselSlider from '@/components/global/components/carouselSlider';

const ImageSlider = () => {
  const { t } = useTranslation();

  const slideDetails: slideDetailsInterface[] = [
    {
      id: 1,
      image:
        'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider1.jpg?v=1588047077',
      description: `${t('home:slide_details.vegetable_big_sale.description')}`,
      deatils: `${t('home:slide_details.vegetable_big_sale.details')}`,
      title: `${t('home:slide_details.vegetable_big_sale.title')}`,
    },
    {
      id: 2,
      image:
        'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180',
      title: `${t('home:slide_details.fresh_vegetables.title')}`,
      description: `${t('home:slide_details.fresh_vegetables.description')}`,
      deatils: `${t('home:slide_details.fresh_vegetables.details')}`,
    },
    {
      id: 3,
      image:
        'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider3.jpg?v=1588047393',
      title: `${t('home:slide_details.tomato.title')}`,
      description: `${t('home:slide_details.tomato.description')}`,
      deatils: `${t('home:slide_details.tomato.details')}`,
    },
  ];
  return (
    <>
      <CarouselSlider>
        {slideDetails?.map((data) => (
          <SwiperSlide key={data?.id}>
            <SinglSlide product={data} />
          </SwiperSlide>
        ))}
      </CarouselSlider>
    </>
  );
};

export default ImageSlider;
