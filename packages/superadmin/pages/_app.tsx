import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiMzFiNzUxLWZjYjEtNDc0MS1iMmY0LWIzMDFjZDNiY2RhYSIsInVzZXJuYW1lIjoic2hhZmlAZ21haWwuY29tIiwibG9nSW5UaW1lIjoxNjU1ODc2NDI3OTYzLCJpYXQiOjE2NTU4NzY0MjcsImV4cCI6MTY1NTk2MjgyN30.clr2LpQpNNskR87zHk6rwVOy47Ruhu50AycYQv_ekrY`,
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
