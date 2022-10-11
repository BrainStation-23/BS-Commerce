import type { NextPage } from 'next';

import PageTitle from '@/components/global/components/pageTitle';
import MapArea from '@/components/static/contact/mapArea';
import ContactArea from '@/components/static/contact/contactArea';
import useTranslation from 'next-translate/useTranslation';

const Contact: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('contact:contact')} />
      <div className="mb-10">
        <MapArea />
      </div>
      <div className="mb-10">
        <ContactArea />
      </div>
    </>
  );
};

export default Contact;
