import Image from 'next/image';

import type { NextPage } from 'next';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import { useRouter } from 'next/router';

const PageNotFOund: NextPage = () => {
  const imageDimensions = { width: 1024, height: 456 };
  const router = useRouter();

  return (
    <>
      <Breadcrumb
        title="404 Not found"
        pathArray={['Home', '404 Not Found']}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center border-b py-16">
          <div className="mb-8">
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/CryingChip404_1024x1024.gif?v=1589620716"
              alt="Page not found!!"
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="mb-8"
            />
          </div>
          <span className="mb-2 font-bold">Ooops! Error 404</span>
          <span className="mb-4 text-center font-extralight">
            Sorry, But the page you are looking for doesn&apos;t exist!
          </span>
          <ButtonSecondary
            className="py-2 px-8"
            onClickFunction={() => {
              router.push('/');
            }}
            text="Go to home page"
          />
        </div>
      </section>
    </>
  );
};

export default PageNotFOund;
