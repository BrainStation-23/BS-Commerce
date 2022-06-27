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
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwNTBjMDBhLWRmNmMtNGY0Mi1hMjg1LTE5ZGI1NzYzN2QzMCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NjMwNjQ3MTgzNSwiaWF0IjoxNjU2MzA2NDcxLCJleHAiOjE2NTYzOTI4NzF9.fgdah5FNTGKPzMRtDOwnR-b53VPOyFVB74W5X60sA4s`,
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
