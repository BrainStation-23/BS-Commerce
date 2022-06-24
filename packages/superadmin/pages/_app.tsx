import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYjNlOGFkLWQ5YjktNDc2Mi1iMDhmLTExMDNlYTk1OTc1NyIsInVzZXJuYW1lIjoic2VlZmF0aGltZWwxQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NjA0NTAwOTUzMSwiaWF0IjoxNjU2MDQ1MDA5LCJleHAiOjE2NTYxMzE0MDl9.NcgwMdkXnytJ83osJzIZ2H_--mrX2Z_mn2Pz5FlaZF4`,
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
