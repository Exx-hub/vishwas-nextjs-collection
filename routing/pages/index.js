import Link from "next/link";

import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
    // router.replace("/product");
  };
  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>
        <Link href="/blog">
          <a style={{ marginRight: 5 }}>Blog</a>
        </Link>

        <Link href="/product">
          <a>Products</a>
        </Link>

        <button onClick={handleClick}>Place order</button>
      </div>
    </div>
  );
}

export default Home;
