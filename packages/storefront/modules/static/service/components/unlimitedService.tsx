import React, { FC } from 'react';
import Image from 'next/image';
import myImageLoader from 'image/loader'

import PageContainer from '@/modules/common/layout/pageContainer';

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
          <h1 className="mb-2 text-base">UNLIMITED IDEAS</h1>
          <p className="mb-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, suscipit dolorum ullam soluta voluptatem quasi molestias
            illum possimus, accusantium assumenda inventore debitis ducimus.
            Quis ducimus, consequatur corrupti, sunt rerum sit atque eum
            inventore. Autem excepturi reiciendis voluptate totam sit, sunt
            fugiat voluptatum beatae voluptas ab quia vitae accusamus assumenda
            facilis perferendis, quam itaque aliquid qui omnis culpa consectetur
            placeat ipsa quaerat.&nbsp;
          </p>
          <div className="text-sm">
            <a
              className="inline-block rounded-2xl border border-solid border-gray-200 py-2 px-5 no-underline hover:bg-primary hover:text-white dark:hover:bg-dark_primary"
              href="/policies/terms-of-service"
            >
              More Info
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
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default UnlimitedService;
