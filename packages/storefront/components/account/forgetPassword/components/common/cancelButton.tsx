import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const FormCancelButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="cancelDiv"
        className="text-decoration-none my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3"
      >
        <Link href="/account/sign-in">
          <a
            id="cancelForgetPassword"
            className="text-decoration-none font-weight-light text-gray-600 hover:text-gray-500"
          >
            {t('common:cancel')}
          </a>
        </Link>
      </div>
    </>
  );
};

export default FormCancelButton;
