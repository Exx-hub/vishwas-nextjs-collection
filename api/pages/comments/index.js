import { useState } from "react";
import fs from "fs";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentUpdate, setCommentUpdate] = useState("");

  // console.log(comment);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    // console.log(data);
    setComments(data);
  };

  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    fetchComments();
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);

    fetchComments();
  };

  const updateComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ commentUpdate }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    fetchComments();
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="ADD COMMENT"
      />
      <input
        type="text"
        value={commentUpdate}
        onChange={(e) => setCommentUpdate(e.target.value)}
        placeholder="UPDATE COMMENT"
      />
      <button onClick={addComment}>Add Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.text}
            </h2>
            <button onClick={() => deleteComment(comment.id)}>delete</button>
            <button onClick={() => updateComment(comment.id)}>update</button>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
