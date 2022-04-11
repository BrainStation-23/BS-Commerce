import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";

import { AuthProvider } from "../context/auth.context";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
