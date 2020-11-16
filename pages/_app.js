// ページ間で共通のレイアウトをもたせたり、共通のStateをもたせたりすることができます。
// クライアントサイドでも実行されます。

import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
