import type { AppProps } from "next/app";
import Layout from "../components/layouts/index";
import { useEffect } from "react";
import Axios from "axios";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { config } from "../config";
import { store } from "../store";

import "../styles/App.scss";
import { useAppSelector } from "../redux-hooks";

Axios.defaults.baseURL = config?.restPrefix;

let persistor = persistStore(store);
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiOWU0ODQ0LWE2NzMtNDc3ZS1hMDNlLTQ1MTE0ZTk5MzdiMCIsInVzZXJuYW1lIjoicUB3LmNvbSIsImxvZ0luVGltZSI6MTY1NjA4NTU5ODcwMSwiaWF0IjoxNjU2MDg1NTk4LCJleHAiOjE2NTYxNzE5OTh9.rJN4hzyfFFm4r6tPzmFjhoeQiEpT1Hiunev7cHILKaU`,
};

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
