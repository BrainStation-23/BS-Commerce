import type { NextComponentType } from 'next';

import { storiesBody } from 'APIs/utils/types';

import PageTitle from '@/modules/global/components/pageTitle';
import ThreeStoriesCard from '@/modules/static/common/threeStoriesCard';
import OurService from '@/modules/static/service/components/ourService';
import UnlimitedService from '@/modules/static/service/components/unlimitedService';
import useTranslation from 'next-translate/useTranslation';
import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';

const threeStoriesList: storiesBody[] = [
  {
    id: '507f1f77bcf86cd799439011',
    title: 'Our Mission',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about2_large.jpg?v=1588135255',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
  },
  {
    id: '507f1f77bcf86cd799439012',
    title: 'History Of Us',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about3_large.jpg?v=1588135320',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
  },
  {
    id: '507f1f77bcf86cd799439013',
    title: 'What Do We Do?',
    image:
      'https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about4_large.jpg?v=1588135356',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
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
