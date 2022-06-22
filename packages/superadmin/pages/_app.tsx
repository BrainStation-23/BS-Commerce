import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYjNlOGFkLWQ5YjktNDc2Mi1iMDhmLTExMDNlYTk1OTc1NyIsInVzZXJuYW1lIjoic2VlZmF0aGltZWwxQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTg3ODYxODU2MiwiaWF0IjoxNjU1ODc4NjE4LCJleHAiOjE2NTU5NjUwMTh9.isaQFCP6tpiPvMbUM_jvi-9lhNgthsmw4VG_xce1Luk`,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
