import Head from "next/head";

function Blog(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className="content">ENV USER {process.env.NEXT_PUBLIC_NAME}</h1>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${user} and password ${password}.`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
