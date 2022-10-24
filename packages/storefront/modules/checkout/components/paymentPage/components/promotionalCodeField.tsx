import ButtonType1 from '@/modules/common/buttons/buttonType1';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';

interface Properties {
  placeholder: string;
}

const PromotionalCodeField: React.FC<Properties> = (props) => {
  const router = useRouter();
  const { t } = useTranslation();

  const submitPromoCodeOnClick = () => {
    alert((document.getElementById('promoCode') as HTMLInputElement).value);
  };
  return (
    <>
      <p className="mt-5 text-lg">{t('checkout:promotion')}</p>
      <div
        className={`mt-3 flex h-12 w-full flex-row items-center justify-between rounded border border-slate-200 text-sm`}
      >
        <input
          className="ml-4 w-full bg-white focus:outline-none dark:bg-dark_bg"
          type="search"
          name="promoCode"
          placeholder={`${props.placeholder}`}
          id="promoCode"
        />
        <div className="flex h-12 w-20 cursor-pointer justify-center rounded-r bg-primary text-white transition-all duration-200 ease-linear hover:bg-stone-900 dark:bg-dark_primary dark:bg-dark_primary">
          <ButtonType1
            type="submit"
            id="submitPromoCode"
            className=""
            onClickFunction={() => {
              submitPromoCodeOnClick();
            }}
            text={t('checkout:apply')}
          />
        </div>
      </div>
    </>
  );
};

export default PromotionalCodeField;
