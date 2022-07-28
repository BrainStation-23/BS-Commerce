import { NextComponentType } from 'next';

import Container from '@/components/global/components/container';
import { ImageCom } from '@/components/global/components/image';

const HomeShipping: NextComponentType = () => {
  return (
    <>
      <Container className="container">
        <div className="flex flex-wrap py-16">
          <div className="flex w-full px-1 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3">
              <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping1_50x50.jpg?v=1588047521"
                height={55}
                width={55}
              />
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">Free Shipping</h3>
              <p>Free shipping on all US order or order above $200</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#40a944"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">SUPPORT 24/7</h3>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#40a944"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                />
              </svg>
              {/* <ImageCom
                className="lazyload"
                alt=""
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/shipping3_50x50.jpg?v=1588047617"
                height={55}
                width={55}
              /> */}
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">30 DAYS RETURN</h3>
              <p>Simply return it within 30 days for an exchange</p>
            </div>
          </div>
          <div className="flex w-full px-3 pb-2 md:w-1/2 lg:w-1/4 lg:pb-0">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#40a944"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div className="">
              <h3 className="mb-1 text-base md:mb-2">100% PAYMENT SECURE</h3>
              <p>We ensure secure payment with PEV</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeShipping;
