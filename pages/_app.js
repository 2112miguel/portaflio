import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "../styles/globals.css";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
