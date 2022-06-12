import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
