import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { Product } from '@bs-commerce/models';
import ProductReview from './ProductReview';
interface SingleProduct {
  product: Product;
}

const ProductDescription: React.FC<SingleProduct> = ({
  product,
}: SingleProduct) => {
  const { t } = useTranslation();

  const [description, setDescription] = useState('block');
  const [review, setReview] = useState('hidden');
  const [shipping, setShipping] = useState('hidden');
  const [size_chart, setSize_chart] = useState('hidden');
  // const [descriptionChartFocused, setDescriptionChartFocused] = useState(true);
  // const [sizeChartFocused, setSizeChartFocused] = useState(false);
  const shipping_policy =
    'Lorem ipsum dolor sit On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will amet consectetuer adipiscing elit hdjkdsdf fksdbfg sdfff ksfhf gmnsgbksf eafksbdfg ,saefkbs fs fsdkgbjsgf sdf m,sdf skdgjn sgksugb wrgwsg lf ogs sg slkjg solg sgs gosg sg sl gsgj jsgalflanfpwig sl j so se vs dgjsdgjlb gslg esl efjgsjg ls g ls dgj sl jgs gsl gskg skg s gksg,n sfobe fpeasgff bpa gerogal vag eg';
  const size =
    'https://cdn.shopify.com/s/files/1/0492/7212/7650/files/12_720x720.png?v=1633361194';

  const handleDescription = () => {
    setDescription('block');
    setReview('hidden');
    setShipping('hidden');
    setSize_chart('hidden');
    // setDescriptionChartFocused(true);
    // setSizeChartFocused(false);
  };

  const handleReview = () => {
    setDescription('hidden');
    setReview('block');
    setShipping('hidden');
    setSize_chart('hidden');
  };

  // const handleShipping = () => {
  //   setDescription('hidden');
  //   setReview('hidden');
  //   setShipping('block');
  //   setSize_chart('hidden');
  // };

  const handleSize = () => {
    setDescription('hidden');
    setReview('hidden');
    setShipping('hidden');
    setSize_chart('block');
    // setDescriptionChartFocused(false);
    // setSizeChartFocused(true);
  };

  return (
    <>
      <div className="border-g-300 mx-auto mt-16 border-2 text-slate-600 lg:w-full">
        <div className="block flex flex-wrap border-b-2">
          <ul className="my-3">
            <button
              onClick={handleDescription}
              className={
                description !== 'hidden'
                  ? 'mx-5 font-semibold text-green-600'
                  : 'mx-5 font-semibold '
              }
            >
              {t('product-details:description')}
            </button>
            <button
              onClick={handleReview}
              className={
                review !== 'hidden'
                  ? 'mx-5 font-semibold text-green-600'
                  : 'mx-5 font-semibold '
              }
            >
              Review
            </button>
            {/* <button onClick={handleShipping} className="mx-5 font-semibold">
              Shipping Policy
            </button> */}
            <button
              onClick={handleSize}
              className={
                size_chart !== 'hidden'
                  ? 'mx-5 font-semibold text-green-600'
                  : 'mx-5 font-semibold'
              }
            >
              {t('product-details:size_chart')}
            </button>
          </ul>
        </div>

        <div className="m-5 flex ">
          <div className={description}>{product.info.fullDescription}</div>
          <div className={`${review} w-full`}>
            <ProductReview />
          </div>
          {/* <p className={shipping}>{shipping_policy}</p> */}
          <div className={`${size_chart} w-full`}>
            <h4 className="font-semibold ">
              {t('product-details:size_chart')}
            </h4>
            <div className="flex justify-center">
              <Image src={size} alt="size" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
