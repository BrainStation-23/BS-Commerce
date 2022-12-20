import myImageLoader from 'image/loader';
import Image from 'next/image';

import { FC } from 'react';

import PageContainer from '@/modules/common/layout/pageContainer';

const ServiceArea: FC = () => {
  return (
    <PageContainer>
      <div className="flex flex-wrap">
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-3 flex justify-center md:mb-4">
            <Image
              loader={myImageLoader}
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon1_50x50.png?v=1588134758"
              width={48}
              height={48}
              alt="about"
            />
          </div>
          <div className="text-center">
            <h3 className="text-base md:text-xl">Agility & Excellence</h3>
            <p className="text-sm md:text-base">
              Deliver The Best Solutions, And Stay Agile Beyond Boundaries. We
              strive for excellence; we lead by example.
            </p>
          </div>
        </div>
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-3 flex justify-center md:mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="mt-2 h-10 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
              />
            </svg>
          </div>
          <div className="chose_content">
            <h3 className="text-base md:text-xl">History Of US</h3>
            <p className="text-sm md:text-base">
              From 2006 to 2021, the company has not only grown significantly
              but also has evolved to become the leading Software Development &
              IT Service Provider company in Bangladesh. We have made it to next
              in terms of global reach and we have gained reputation in the
              course.
            </p>
          </div>
        </div>
        <div className="basis-full p-1 text-center md:basis-1/2 md:p-4 lg:basis-1/3">
          <div className="mb-2 flex justify-center md:mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="mt-3 h-9 w-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <div className="box_content">
            <h3 className="text-base md:text-xl">Our Vision</h3>
            <p className="text-sm md:text-base">
              To be the fastest digital transformation and innovation partner by
              engaging global talents thus creating positive impact.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ServiceArea;
