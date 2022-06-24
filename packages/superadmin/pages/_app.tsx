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

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiMzFiNzUxLWZjYjEtNDc0MS1iMmY0LWIzMDFjZDNiY2RhYSIsInVzZXJuYW1lIjoic2hhZmlAZ21haWwuY29tIiwibG9nSW5UaW1lIjoxNjU2MDQ5NDMxMTE0LCJpYXQiOjE2NTYwNDk0MzEsImV4cCI6MTY1NjEzNTgzMX0.MHg7WMx2-gUukkKZ8SR-r4ldQ9nZiHToADSbLKj7vn8`,
};

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
