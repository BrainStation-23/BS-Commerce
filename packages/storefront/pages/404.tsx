import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';

const PageNotFOund: NextPage = () => {
  const imageDimensions = { width: 1024, height: 456 };
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
          <button className="rounded-md bg-green-600 py-2 px-6 font-light text-white transition-all duration-200 ease-linear hover:bg-stone-900">
            <Link href="/">Go to home page</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default PageNotFOund;
