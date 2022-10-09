import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import Container from '@/components/global/components/container';

const ImageWithDescription: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto mb-5 w-full">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
            width={1504}
            height={580}
            alt="about"
          />
        </div>
        <h1 className="mb-5 text-xl capitalize">{t('about:title')}</h1>
        <p className="mx-auto max-w-4xl text-center text-sm">
          Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus.
          Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend
          feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis,
          praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris,
          elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem
          consectetuer, sociosqu phasellus risus urna aliquam, ornare.
        </p>
        <Image
          src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-signature_medium.png?v=1588134272"
          width={228}
          height={129}
          alt="about"
        />
      </div>
    </Container>
  );
};

export default ImageWithDescription;
