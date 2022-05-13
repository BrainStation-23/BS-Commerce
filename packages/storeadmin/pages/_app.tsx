import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import { ReduxWrapper } from "marketplace";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <ReduxWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxWrapper>
  );
}

export default MyApp;
