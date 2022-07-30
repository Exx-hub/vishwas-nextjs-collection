import { getSession, useSession } from "next-auth/react";

function Blog({ data, session }) {
  // console.log(props);

  // const { data: session } = useSession();

  // console.log(session);

  // securing page server-side
  // if (!session) {
  //   return <h1>ACCESS DENIED PLEASE SIGN IN TO CONTINUE</h1>;
  // }

  // dynamically display data server-side if user is logged in or not
  if (!session) {
    return <div>Blog Page - {data}</div>;
  }

  return <div>Blog Page - {data}</div>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.CALLBACK_URL}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session
        ? "List of personalized blogs"
        : "Free list of blogs for everyone",
    },
  };
}
