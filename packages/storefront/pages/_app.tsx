import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import Axios from "axios";
import { config } from "config";

Axios.defaults.baseURL = config?.restPrefix;
// Axios.defaults.headers.common = {
//   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlZWMyMzJhLTZlMjktNDNmMi1hMGE4LTYyOTE3NmVhMTAyYyIsInVzZXJuYW1lIjoibmFmaUB0ZXN0LmNvbSIsImxvZ0luVGltZSI6MTY1NjMzNDA2NDIzOCwiaWF0IjoxNjU2MzM0MDY0LCJleHAiOjE2NTY0MjA0NjR9.tCLcKWJqb2meLvfvt9mmvyEJJ_CyZ_2MsRKlbv9qQRw`,
// };

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
