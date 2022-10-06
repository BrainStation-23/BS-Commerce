import '@/styles/globals.css';

import Axios from 'axios';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store';
import { config } from 'config';

import Layout from '@/components/layout';
import BackToTopButton from './BackToTopButton';
import { ThemeProvider } from 'next-themes';

Axios.defaults.baseURL =
  config?.apiService === 'STATIC'
    ? config?.staticPrefix
    : config?.apiService === 'REST'
    ? config?.restPrefix
    : config?.graphqlPrefix;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <BackToTopButton />
          </Layout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
