import type { NextComponentType } from 'next';

import MapArea from '@/modules/static/contact/components/mapArea';
import ContactArea from '@/modules/static/contact/components/contactArea';
import useTranslation from 'next-translate/useTranslation';
import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';

const ContactComponent: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        title={t('contact:contact')}
        pathArray={[`${t('common:home')}`, `${t('contact:contact')} `]}
        linkArray={['/', '/']}
      />
      <div className="mt-2 mb-10">
        <MapArea />
      </div>
      <div className="mb-10">
        <ContactArea />
      </div>
    </>
  );
};

export default ContactComponent;
