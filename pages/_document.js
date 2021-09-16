import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Cache-Control"
            content="max-age=0, private, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta charSet="utf-8" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=ngGYkG2Yz9"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png?v=ngGYkG2Yz9"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png?v=ngGYkG2Yz9"
            sizes="16x16"
          />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=ngGYkG2Yz9"
            color="#5bbad5 "
          />
          <link rel="shortcut icon" href="/favicon.ico?v=ngGYkG2Yz9" />
          <meta name="theme-color" content="#ffffff " />
          <link
            rel="stylesheet"
            href="/fonts/GT-Haptik/gtHaptik-regular.css"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="/fonts/GT-Haptik/gtHaptik-regular-2.css"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="/fonts/Courier-Sans/courierSans.css"
            crossOrigin=""
          />

          <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
