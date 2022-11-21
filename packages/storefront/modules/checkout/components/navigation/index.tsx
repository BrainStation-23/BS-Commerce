import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import TextButton from '@/modules/common/buttons/textButton';

interface Props {
  cart: boolean;
  info: boolean;
  shipping: boolean;
  payment: boolean;
  setModal: Function;
}

const CheckoutPageNavigation: React.FC<Props> = (props) => {
  const { cart, info, shipping, payment, setModal } = props;
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <div>
        <Link href="/" legacyBehavior>{t('common:home')}</Link>
      </div>
      {' > '}
      <div className={cart ? 'font-bold' : 'font-normal'}>
        <Link href="/cart" legacyBehavior>{t('checkout:cart')}</Link>
      </div>
      {' > '}
      <div>
        <TextButton
          onClickFunction={() => {
            const obj = {
              info: true,
              ship: false,
              pay: false,
            };
            setModal(obj);
          }}
          text={t('checkout:information')}
          className={`mt-0 ${info ? 'font-bold' : 'font-normal'}`}
          disabled={true}
        />
      </div>
      {' > '}
      <div>
        <TextButton
          onClickFunction={() => {
            const obj = {
              info: false,
              ship: true,
              pay: false,
            };
            setModal(obj);
          }}
          text={t('checkout:shipping')}
          className={`mt-0 ${shipping ? 'font-bold' : 'font-normal'}`}
          disabled={true}
        />
      </div>
      {' > '}
      <div>
        <TextButton
          onClickFunction={() => {
            const obj = {
              info: false,
              ship: false,
              pay: true,
            };
            setModal(obj);
          }}
          text={t('checkout:payment')}
          className={`mt-0 ${payment ? 'font-bold' : 'font-normal'}`}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default CheckoutPageNavigation;
