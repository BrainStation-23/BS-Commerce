import FillPrimaryDarkPrimary from '@/modules/common/icons/handlers/fllPrimaryDarkPrimary';
import PlayIcon from '@/modules/common/icons/playIcon';
import { NextComponentType } from 'next';
import useTranslation from 'next-translate/useTranslation';

const ShopNow: NextComponentType = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="row text-extrabold text-1xl flex flex uppercase">
        {t('home:shop_now')}
        <FillPrimaryDarkPrimary icon={<PlayIcon />} />
      </p>
    </>
  );
};

export default ShopNow;
