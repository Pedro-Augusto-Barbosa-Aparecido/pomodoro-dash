import "../styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

import { DashboardContextProvider } from "../context/Dashboard"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <DashboardContextProvider>
        <Component {...pageProps} />
      </DashboardContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
