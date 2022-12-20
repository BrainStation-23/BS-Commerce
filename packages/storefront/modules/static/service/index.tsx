import type { NextComponentType } from 'next';

import { storiesBody } from 'APIs/utils/types';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import ThreeStoriesCard from '@/modules/static/common/threeStoriesCard';
import OurService from '@/modules/static/service/components/ourService';
import UnlimitedService from '@/modules/static/service/components/unlimitedService';
import useTranslation from 'next-translate/useTranslation';

const threeStoriesList: storiesBody[] = [
  {
    id: '507f1f77bcf86cd799439011',
    title: 'Our Mission',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about2_large.jpg?v=1588135255',
    description:
      'Your trusted companion for digital leadership by empowering peopleto achieve more with less',
  },
  {
    id: '507f1f77bcf86cd799439012',
    title: 'Our Mission',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about3_large.jpg?v=1588135320',
    description:
      'Your trusted companion for digital leadership by empowering people to achieve more with less',
  },
  {
    id: '507f1f77bcf86cd799439013',
    title: 'What Do We Do?',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about4_large.jpg?v=1588135356',
    description: 'Design & develop according to your need.',
  },
];

const ServiceComponent: NextComponentType = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        title={t('service:service')}
        pathArray={[`${t('common:home')}`, `${t('service:service')}`]}
        linkArray={['/', '/']}
      />
      <ThreeStoriesCard leftStory={true} threeStoriesList={threeStoriesList} />
      <div className="bg-gray-200 ">
        <OurService />
      </div>
      <div className="mb-2">
        <UnlimitedService />
      </div>
    </>
  );
};

export default ServiceComponent;
