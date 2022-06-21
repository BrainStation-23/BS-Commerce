import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlZWMyMzJhLTZlMjktNDNmMi1hMGE4LTYyOTE3NmVhMTAyYyIsInVzZXJuYW1lIjoibmFmaUB0ZXN0LmNvbSIsImxvZ0luVGltZSI6MTY1NTgwNjE4MjQxNCwiaWF0IjoxNjU1ODA2MTgyLCJleHAiOjE2NTU4OTI1ODJ9.agSuRwdYhDhE1bBBNWxnLQhk8q_GiyvK3RzljDMU3Jw`,
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
