import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="theme-color" content="white"/>
    <link rel="manifest" href="/manifest.json"/>
    <link rel="apple-touch-icon" href="/icon-192x192.png"/>
    <link rel="icon" href="/icon-192x192.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
