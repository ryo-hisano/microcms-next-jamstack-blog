// _document.jsはサーバーサイドレンダリング時のみ呼び出される。
// そのため、onClickなどのイベントハンドラを定義することはできない。

import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";
import Footer from "../components/footer";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#ff0000" />
          <meta name="format-detection" content="telephone=no" />
          <style>{`html,body { margin: 0; padding: 0;text-align:center; }img{width:100%;height:auto;}`}</style>
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
