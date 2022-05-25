import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";

import "../styles/App.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
