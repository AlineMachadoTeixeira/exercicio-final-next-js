import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Frutado" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Frutado" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="shortcut icon"
          href="/images/frutado-logo.svg"
          type="image/png"
          sizes="256x256"
        />

        {/* <link rel="shortcut icon" href="/images/frutado-logo.svg"></link> */}

        <meta name="author" content="Aline Teixeira" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
