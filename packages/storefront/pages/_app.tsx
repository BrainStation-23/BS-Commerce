import type { AppProps } from "next/app";

import "../styles/global.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
