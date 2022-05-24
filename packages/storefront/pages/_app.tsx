import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";

////////////////////////////////////////////////////////////////
import { Provider } from "react-redux";
import { store } from "../redux/product.store";
////////////////////////////////////////////////////////////////

function MyApp({ Component, pageProps }: AppProps) {
    // useEffect(() => {
    //     typeof document !== undefined
    //         // ? require("../../../dist/output.css")
    //         ? require("bootstrap/dist/js/bootstrap")
    //         : null;
    // }, []);
    return (
        <Provider store={store}>
    
                <Component {...pageProps} />

        </Provider>
    );
}

export default MyApp;
