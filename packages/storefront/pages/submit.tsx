import React from 'react';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import Link from 'next/link';

const Submit = () => {
    const imageDimensions = { width: 720, height: 456 };
  
  return (
    <>
      <Breadcrumb
        title="Payment Success"
        pathArray={['Home', 'payment success']}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center border-b py-16">
          <div className="mb-8">
            <img
              src="https://colombocme.org/wp-content/uploads/2019/03/Paymentsuccessful21.png"
              alt="Page not found!!"
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="mb-8"
            />
          </div>
          <span className="mb-2 font-bold">Your Order has been successfully completed</span>
          <button className="rounded-md bg-green-600 py-2 px-6 font-light text-white transition-all duration-200 ease-linear hover:bg-stone-900">
            <Link href="/">Go to home page</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Submit;