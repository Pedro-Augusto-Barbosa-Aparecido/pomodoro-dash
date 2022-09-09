import "../styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

import React from "react";

import { DashboardContextProvider } from "../context/Dashboard"
import { NativeBaseProvider, Center } from "native-base";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={{}}>
        <DashboardContextProvider>
          <Component {...pageProps} />
        </DashboardContextProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  )
}

export default MyApp
