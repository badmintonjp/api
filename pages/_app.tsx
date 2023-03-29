import "@/styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>MISATO-BADMINTON</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="MISATO Badminton! Nơi khởi nguồn của đam mê.Thắng bại tại đồng đội. Không được đánh đồng đội, tuyệt đối không smash đồng đội"
        />
        <meta property="og:title" content="MISATO-BADMINTON" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MISATO-BADMINTON" />
        <meta property="og:image" content="/badminton.svg" />
        <meta
          property="og:description"
          content="MISATO Badminton! Nơi khởi nguồn của đam mê.Thắng bại tại đồng đội. Không được đánh đồng đội, tuyệt đối không smash đồng đội"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MISATO-BADMINTON" />
        <meta
          name="twitter:description"
          content="MISATO Badminton! Nơi khởi nguồn của đam mê.Thắng bại tại đồng đội. Không được đánh đồng đội, tuyệt đối không smash đồng đội"
        />
        <meta name="twitter:image" content="/badminton.svg" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
