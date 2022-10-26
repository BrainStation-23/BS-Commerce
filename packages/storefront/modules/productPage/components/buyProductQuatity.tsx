import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import TextButton from '@/modules/common/buttons/textButton';

interface Props {
  amount: number;
  disableDecrement: boolean;
  setAmount: Function;
  disableIncrement: boolean;
  isAvailable: boolean;
  toCart: Function;
}

const BuyProductQuantity: React.FC<Props> = ({
  amount,
  disableDecrement,
  setAmount,
  disableIncrement,
  isAvailable,
  toCart,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex text-black dark:text-dark_text">
      <div className="title-text flex items-center lg:mx-2">
        {t('product-details:quantity')}
        <div className="m-1 rounded border-2 border-gray-200 md:ml-4">
          <TextButton
            onClickFunction={() => (amount > 1 ? setAmount(amount - 1) : '')}
            // {...(amount <= 1 ? (disableDecrement = true) : null)}
            disabled={disableDecrement}
            className="p-2 pt-0"
            text="-"
          />
          <span className="p-2">{amount}</span>

          <TextButton
            onClickFunction={() => setAmount(amount + 1)}
            disabled={disableIncrement}
            className="p-2 pt-0"
            text="+"
          />
        </div>
      </div>
      {isAvailable ? (
        <ButtonSecondary
          onClickFunction={toCart}
          text={t('product-details:add_to_cart')}
          className="sm:px-12 lg:px-16"
        />
      ) : (
        <ButtonSecondary
          className="sm:px-12 lg:px-16"
          disabled={true}
          text={'Soldout'}
        />
      )}
    </div>
  );
};

export default BuyProductQuantity;
