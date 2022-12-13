import React, { FC } from 'react';
import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import myImageLoader from 'image/loader'

import withAuth from '@/modules/auth/withAuth';
import useTranslation from 'next-translate/useTranslation';
import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import { useRouter } from 'next/router';

const SubmitComponent: FC = () => {
  const imageDimensions = { width: 456, height: 300 };
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <Breadcrumb
        title={t('submit:payment_success')}
        pathArray={[`${t('common:home')}`, `${t('submit:payment_success')}`]}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center border-b py-16">
          <div className="mb-8">
            <Image
                loader={myImageLoader}
              src="https://cdn.dribbble.com/users/458522/screenshots/14007167/media/214f6fa81fbd40f3b65b2cb747393226.png?compress=1&resize=400x300&vertical=top"
              alt="Page not found!!"
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="mb-8"
            />
          </div>
          <span className="mb-2 font-bold">{t('submit:order_completed')}</span>
          <ButtonSecondary
            onClickFunction={() => {
              router.push('/order');
            }}
            className=" py-2 px-9"
            text={t('submit:goto_order_page')}
          />
        </div>
      </section>
    </>
  );
};

export default withAuth(SubmitComponent);
