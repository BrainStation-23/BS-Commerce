import { NextComponentType } from 'next';
import { bannerTitle } from './models';

import ShopNowIcon from '@/modules/home/bestSell/shopNow';

const banner: bannerTitle = {
  title: 'Natural Food',
};

const Banner: NextComponentType = () => {
  return (
    <>
      <div className="row-span-full m-auto mb-4 flex h-96 flex-col-reverse bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner4_grande.jpg?v=1588052424')] bg-cover bg-center bg-no-repeat md:m-0 md:mb-0 md:h-full">
        <div className="ml-5 mb-6 lg:mb-7">
          <p className="mb-2 w-1 text-4xl font-thin">{banner.title}</p>
          <ShopNowIcon />
        </div>
      </div>
    </>
  );
};

export default Banner;
