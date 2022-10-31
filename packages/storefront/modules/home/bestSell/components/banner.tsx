import { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';

import PlayIcon from '@/modules/common/icons/playIcon';
import FillPrimaryDarkPrimary from '@/modules/common/icons/handlers/fllPrimaryDarkPrimary';

const Banner: NextComponentType = () => {
  const { t } = useTranslation();
  const BannerTitle = 'Natural Food';
  return (
    <>
      <div className="row-span-full m-auto mb-4 flex h-96 flex-col-reverse bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner4_grande.jpg?v=1588052424')] bg-cover bg-center bg-no-repeat md:m-0 md:mb-0 md:h-full">
        <div className="ml-5 mb-6 lg:mb-7">
          <p className="mb-2 w-1 text-4xl font-thin">{BannerTitle}</p>
          <div className="row text-extrabold text-1xl flex uppercase">
            {t('home:shop_now')}
            <FillPrimaryDarkPrimary icon={<PlayIcon />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
