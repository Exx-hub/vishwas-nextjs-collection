// import { useRouter } from "next/router";

function BlogItem({ blog }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </>
  );
}

export default BlogItem;

// export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   // const sliced = data.slice(0, 3);

//   const paths = data.map((item) => {
//     return {
//       params: { blogId: item.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { blogId: "1" },
      },
      {
        params: { blogId: "2" },
      },
      {
        params: { blogId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = await response.json();

  if (!data.title) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /blogPosts/${params.blogId}`);

  return {
    props: {
      blog: data,
    },
  };
}

// hardcode paths
