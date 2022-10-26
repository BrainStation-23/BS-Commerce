import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import useTranslation from 'next-translate/useTranslation';

const FormSubmitButton = () => {
  const { t } = useTranslation();

  return (
    <ButtonSecondary
      type="submit"
      id="submit"
      // className="my-2 w-full rounded bg-primary py-2 text-white hover:bg-black dark:bg-dark_primary sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
      className="my-2 py-2 sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4"
      text={t('common:submit')}
    />
  );
};

export default FormSubmitButton;
