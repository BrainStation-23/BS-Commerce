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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
            <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
            <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
            <i className="bi bi-app-indicator" aria-hidden="true"></i>
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
