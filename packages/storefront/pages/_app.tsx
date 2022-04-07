import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import ContextTree from "../contextApi";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <ContextTree>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextTree>
  );
}

export default MyApp;
