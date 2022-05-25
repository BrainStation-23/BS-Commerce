import React, { FC } from "react";
import Image from "next/image";

import Container from "../../global/components/container";

const UnlimitedService: FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 pb-2">
          <Image
            src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/services4.jpg?v=1590916919"
            alt=""
            width={555}
            height={435}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-base mb-2">UNLIMITED IDEAS</h1>
          <p className="text-sm mb-2">
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
              className="py-2 px-5 inline-block rounded-2xl border border-solid border-gray-200 no-underline hover:bg-green-600 hover:text-white"
              href="/policies/terms-of-service"
            >
              More Info <i className="bi bi-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UnlimitedService;
