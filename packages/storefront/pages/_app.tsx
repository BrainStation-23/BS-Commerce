import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Axios from "axios";
import { config } from "config";

Axios.defaults.baseURL = config?.restPrefix;

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
