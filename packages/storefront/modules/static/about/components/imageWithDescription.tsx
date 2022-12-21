import myImageLoader from 'image/loader';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import PageContainer from '@/modules/common/layout/pageContainer';

const ImageWithDescription: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto mb-5 w-full">
          <Image
            loader={myImageLoader}
            src="/aboutUSImage.jpg"
            width={1504}
            height={580}
            alt="about"
          />
        </div>
        <h1 className="mb-5 text-xl capitalize">{t('about:title')}</h1>
        <p className="mx-auto max-w-4xl text-center text-sm">
          It was in 2006, with little capital but a pocketful of belief our CEO,
          Raisul Kabir started Brain Station 23, a software company, right after
          graduating from BUET. The new company initially focused on the
          international market with the local market added in 2010. Since then
          the company has shown a continuous growth and currently employs over
          700+ software engineers. Brain Station 23 is now not only an
          established name in Bangladesh but also in countries like the USA, UK,
          Netherlands, Denmark, Japan, Norway, Sweden, Germany, Canada,
          Switzerland, Turkey and the Middle East etc.
        </p>
        {/* <Image
          loader={myImageLoader}
          src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-signature_medium.png?v=1588134272"
          width={228}
          height={129}
          alt="about"
        /> */}
      </div>
    </PageContainer>
  );
};

export default ImageWithDescription;
