import Head from "next/head";
import Cabecalho from "./Cabecalho";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/frutado-logo.svg"></link>
      </Head>
      <Cabecalho />
      <main>{children}</main>;
    </>
  );
}
