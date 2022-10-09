import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

interface Path {
  cart: boolean;
  info: boolean;
  shipping: boolean;
  payment: boolean;
  setModal: Function;
}

const Path: React.FC<Path> = (props: Path) => {
  const { cart, info, shipping, payment, setModal } = props;
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <div>
        <Link href="/">{t('common:home')}</Link>
      </div>
      {' > '}
      <div className={cart ? 'font-bold' : 'font-normal'}>
        <Link href="/cart">{t('checkout:cart')}</Link>
      </div>
      {' > '}
      <div>
        <button
          onClick={() => {
            const obj = {
              info: true,
              ship: false,
              pay: false,
            };
            setModal(obj);
          }}
          style={{ border: 'none' }}
          className={info ? 'font-bold' : 'font-normal'}
          disabled
        >
          {t('checkout:information')}
        </button>
      </div>
      {' > '}
      <div>
        <button
          onClick={() => {
            const obj = {
              info: false,
              ship: true,
              pay: false,
            };
            setModal(obj);
          }}
          className={shipping ? 'font-bold' : 'font-normal'}
          style={{ border: 'none' }}
          disabled
        >
          {t('checkout:shipping')}
        </button>
      </div>
      {' > '}
      <div>
        <button
          onClick={() => {
            const obj = {
              info: false,
              ship: false,
              pay: true,
            };
            setModal(obj);
          }}
          style={{ border: 'none' }}
          className={payment ? 'font-bold' : 'font-normal'}
          disabled
        >
          {t('checkout:payment')}
        </button>
      </div>
    </div>
  );
};

export default Path;
