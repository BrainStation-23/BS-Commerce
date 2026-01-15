import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/index";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYjNlOGFkLWQ5YjktNDc2Mi1iMDhmLTExMDNlYTk1OTc1NyIsInVzZXJuYW1lIjoic2VlZmF0aGltZWwxQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTgwMDkxMDY0NSwiaWF0IjoxNjU1ODAwOTEwLCJleHAiOjE2NTU4ODczMTB9.DWKGNO0_wEnFmPqqyZ6XDgxevcII_LSn5kC4pJChM60`,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
