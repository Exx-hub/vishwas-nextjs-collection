import Link from "next/link";

function BlogPosts({ posts }) {
  // console.log(posts);
  return (
    <>
      <h1>List of Blogs</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blogPosts/${post.id}`}>
            <a>
              {post.id} {post.title}
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export default BlogPosts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
