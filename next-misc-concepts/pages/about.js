import Head from "next/head";
import Footer from "components/layout/Footer";

function About() {
  return (
    <>
      <Head>
        <title>ABOUT PAGE</title>
        <meta name="description" content="testing testing" />
      </Head>
      <h1 className="content">About Page</h1>;
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
