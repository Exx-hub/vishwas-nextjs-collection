import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href={"/users"}>
        <a>USERS</a>
      </Link>

      <Link href={"/blogPosts"}>
        <a>BLOGS</a>
      </Link>
    </>
  );
}

export default Home;
