import Head from "next/head";
import "styles/globals.css";
import "styles/layout.css";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome Youtube Channel" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
