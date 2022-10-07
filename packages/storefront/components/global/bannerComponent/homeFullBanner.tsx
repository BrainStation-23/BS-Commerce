import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Banner from '@/components/global/bannerComponent/banner';
import BannerHeading from '@/components/global/bannerComponent/bannerHeading';

const HomefullBanner: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-center bg-no-repeat dark:text-black">
      <Banner
        position="relative"
        width="w-full"
        height="h-52 sm:h-52 md:h-52 lg:h-80 xl:h-80"
        hasButton={true}
        buttonText={t('home:discover_now')}
        linkhref="/deals" //need to modify href later
        buttonPosition=" "
        buttonEdge="rounded-lg"
        buttonPadding="px-3 sm:px-3 md:px-9 lg:px-9 xl:px-9 py-2 sm:py-2 lg:py-2.5 xl:py-2.5"
        buttonMargin="my-5"
        buttonBg="bg-primary dark:bg-dark_primary"
        onHover="bg-black"
        buttonTextColor="text-white"
        hasHeading={true}
        heading={
          <BannerHeading
            largeHeading="true"
            largeHeadingText={t('home:sale_50')}
            mediumHeading="true"
            mediumHeadingText={t('home:all_vegetables')}
            smallHeading="true"
            smallHeadingText={t('home:black_fridays')}
            smallHeadingColor="text-primary dark:text-dark_primary"
          />
        }
      />
    </div>
  );
};

export default HomefullBanner;
