import Link from 'next/link';

const FormCancelButton = () => {
  return (
    <>
      <div className="text-decoration-none my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3">
        <Link href="/account/sign-in">
          <a className="text-decoration-none font-weight-light text-gray-600 hover:text-gray-500">
            Cancel
          </a>
        </Link>
      </div>
    </>
  );
};

export default FormCancelButton;
