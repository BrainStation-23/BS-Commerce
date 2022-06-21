import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Axios from "axios";
import { config } from "config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiMzFiNzUxLWZjYjEtNDc0MS1iMmY0LWIzMDFjZDNiY2RhYSIsInVzZXJuYW1lIjoic2hhZmlAZ21haWwuY29tIiwibG9nSW5UaW1lIjoxNjU1NzEzODE0ODcyLCJpYXQiOjE2NTU3MTM4MTQsImV4cCI6MTY1NTgwMDIxNH0.kS0UMQptlAKeIeRTxEPwzMHZM-DsNHd2xqCNHjCyGJA`,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
