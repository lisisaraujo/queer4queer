import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { SWRConfig } from "swr";
import "/styles/map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { SessionProvider } from "next-auth/react";
import "../global.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
