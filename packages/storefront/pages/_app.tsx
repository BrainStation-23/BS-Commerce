import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import Axios from "axios";
import { config } from "config";

Axios.defaults.baseURL = config?.restPrefix;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
