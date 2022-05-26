import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/global.css";
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
