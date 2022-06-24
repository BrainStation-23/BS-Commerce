import type { AppProps } from "next/app";
import { useEffect } from "react";
import Axios from "axios";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "../components/layout";
import { config } from "../config";
import { store } from "../store";

import "../styles/App.scss";
import { useAppSelector } from "../redux-hooks";

Axios.defaults.baseURL = config?.restPrefix;

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
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
