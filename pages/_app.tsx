import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {router} from "next/client";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} key={router.asPath}/>
}

export default MyApp
