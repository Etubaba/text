import React from "react";
import { AppProps } from "next/app";
import "../style/global.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className="header">
        <Link className="link" href={"/"}>
          Home
        </Link>
        <Link className="link" href={"/statistics"}>
          Statistics
        </Link>
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
