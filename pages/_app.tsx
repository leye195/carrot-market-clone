import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-[100vh] max-w-xl mx-auto bg-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
