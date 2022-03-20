import api from "lib/client/api";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url: string) => api.get(url) }}>
      <div className="w-full min-h-[100vh] max-w-xl mx-auto bg-white">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
