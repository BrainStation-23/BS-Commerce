import React, { FC } from 'react';
import Link from 'next/link';

import Container from '@/components/global/components/container';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-52 items-center bg-[url('//cdn.shopify.com/s/files/1/0359/6350/2651/files/banner18.jpg?v=1588133916')] bg-cover bg-center bg-no-repeat py-12">
      <Container>
        <h3 className="mb-2 text-center text-4xl font-normal">{title}</h3>
        <div className="flex items-center justify-center">
          <Link href="/">
            <a className="hover:text-green-600">{t('common:home')} / </a>
          </Link>
          <div>{title}</div>
        </div>
      </Container>
    </div>
  );
};

export default PageTitle;
