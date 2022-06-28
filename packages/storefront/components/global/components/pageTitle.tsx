import React, { FC } from "react";
import Link from "next/link";

import Container from "./container";

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <div className="py-12 h-52 flex items-center bg-[url('//cdn.shopify.com/s/files/1/0359/6350/2651/files/banner18.jpg?v=1588133916')] bg-no-repeat bg-center bg-cover">
      <Container>
        <h3 className="text-4xl mb-2 font-normal text-center">{title}</h3>
        <div className="flex items-center justify-center">
          <Link href="/">
            <a className="hover:text-green-600">Home / </a>
          </Link>
          <div>{title}</div>
        </div>
      </Container>
    </div>
  );
};

export default PageTitle;
