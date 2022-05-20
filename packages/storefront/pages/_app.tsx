import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
