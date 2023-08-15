import React from "react";
import { AppProps } from "next/app";
import "../style/global.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className="header">
        <Link
          style={{
            marginRight: "10px",
            textDecoration: "none",
            listStyle: "none",
          }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            listStyle: "none",
            cursor: "pointer",
          }}
          href={"/statistics"}
        >
          Statistics
        </Link>
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
