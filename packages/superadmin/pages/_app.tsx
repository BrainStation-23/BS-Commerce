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
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlZWMyMzJhLTZlMjktNDNmMi1hMGE4LTYyOTE3NmVhMTAyYyIsInVzZXJuYW1lIjoibmFmaUB0ZXN0LmNvbSIsImxvZ0luVGltZSI6MTY1NjI2MDc2MzkwNCwiaWF0IjoxNjU2MjYwNzYzLCJleHAiOjE2NTYzNDcxNjN9.NDdBTaaCqfPtaCQ7vm6mH0CWjzHuL6-IzXWr9Sw8kvI`,
};

let persistor = persistStore(store);

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
