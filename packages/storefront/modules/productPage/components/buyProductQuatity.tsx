import ButtonType2 from '@/modules/common/buttons/buttonType2';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

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
          <button
            onClick={() => (amount > 1 ? setAmount(amount - 1) : '')}
            // {...(amount <= 1 ? (disableDecrement = true) : null)}
            disabled={disableDecrement}
            className="p-2"
          >
            -
          </button>
          <span className="p-2">{amount}</span>
          <button
            onClick={() => setAmount(amount + 1)}
            disabled={disableIncrement}
            className="p-2"
          >
            +
          </button>
        </div>
      </div>
      {isAvailable ? (
        <ButtonType2
          onClickFunction={toCart}
          text={t('product-details:add_to_cart')}
          className="sm:px-12 lg:px-16"
        />
      ) : (
        <ButtonType2
          className="sm:px-12 lg:px-16"
          disabled={true}
          text={'Soldout'}
        />
      )}
    </div>
  );
};

export default BuyProductQuantity;
