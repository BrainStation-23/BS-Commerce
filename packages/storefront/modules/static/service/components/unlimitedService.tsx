import myImageLoader from 'image/loader';
import Image from 'next/image';
import { FC } from 'react';

import PageContainer from '@/modules/common/layout/pageContainer';
import Link from 'next/link';

const UnlimitedService: FC = () => {
  return (
    <PageContainer>
      <div className="flex flex-wrap items-center">
        <div className="w-full pb-2 pr-2 md:w-1/2">
          <Image
            loader={myImageLoader}
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/services4.jpg?v=1590916919"
            alt=""
            width={555}
            height={435}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mb-2 text-xl">Let Us Help You With Your Project</h1>
          <div className="inline-block rounded-2xl border border-solid border-gray-200 py-2 px-5 no-underline hover:bg-primary hover:text-white dark:hover:bg-dark_primary">
            <Link href="/contact" passHref>
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default UnlimitedService;
