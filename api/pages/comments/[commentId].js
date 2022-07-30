import { comments } from "../../data/comments";

function CommentById({ comment }) {
  //   console.log(comment);
  return (
    <>
      <h2>
        {comment.id} - {comment.text}
      </h2>
    </>
  );
}

export default CommentById;

export const getStaticPaths = async () => {
  //   const response = await fetch("http:localhost:3000/api/comments");
  //   const data = await response.json();

  //   const paths = data.map((item) => {
  //     return {
  //       params: { commentId: item.id.toString() },
  //     };
  //   });

  const paths = comments.map((item) => {
    return {
      params: { commentId: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// You should not fetch an API Route from getStaticProps or getStaticPaths .
// Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// Here's why: getStaticProps and getStaticPaths run only on the server-side
// and will never run on the client-side.

export const getStaticProps = async (context) => {
  const { commentId } = context.params;
  let foundComment = comments.find((item) => item.id === Number(commentId));
  // DONT DO THIS
  //   const response = await fetch(
  //     `http:localhost:3000/api/comments/${context.params.id}`
  //   );
  //   const data = await response.json();

  return {
    props: {
      comment: foundComment,
    },
  };
};
