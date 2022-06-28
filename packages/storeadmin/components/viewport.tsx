import type { NextComponentType } from "next";
import Head from "next/head";

const Viewport: NextComponentType = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
    </>
  );
};

export default Viewport;
