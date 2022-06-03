import React, { FC } from "react";

import Container from "../../global/components/container";

const OurService: FC = () => {
  return (
    <Container>
      <div className="py-14 text-center">
        <h2 className="text-2xl">OUR SERVICES</h2>
        <p className="w-3/4 mx-auto">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit.
        </p>
      </div>
      <div className="flex flex-wrap pb-7">
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">Free Shipping</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">WEB DESIGN</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">PHOTOGRAPHY</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">WEB DEVELOPMENT</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">CODING</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">MARKETING</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">SUPPORT</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
        <div className="flex mb-7 w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">GRAPHIC DESIGN</h3>
            <p className="text-sm">
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurService;
