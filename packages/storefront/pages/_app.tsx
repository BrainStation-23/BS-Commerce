import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";

import { AuthProvider } from "../context/Auth/auth.context";
import  ProductProvider  from "../context/Product/productContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <AuthProvider>
      <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ProductProvider>
    </AuthProvider>
  );
}

export default MyApp;
