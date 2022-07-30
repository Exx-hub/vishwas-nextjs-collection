import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  console.log(req.query);

  if (req.method === "GET") {
    let foundComment = comments.find((item) => item.id === Number(commentId));
    res.status(200).json(foundComment);
  } else if (req.method === "DELETE") {
    let deletedComment = comments.find((item) => item.id === Number(commentId));

    const findIndex = comments.findIndex(
      (item) => item.id === Number(commentId)
    );
    comments.splice(findIndex, 1);

    res
      .status(200)
      .json({ message: "Delete comment successful", deletedComment });
  } else if (req.method === "PATCH") {
    // console.log(req.body.commentUpdate);

    let updatedComment = comments.find((item) => item.id === Number(commentId));

    const newComment = {
      id: commentId,
      text: req.body.commentUpdate,
    };

    const findIndex = comments.findIndex(
      (item) => item.id === Number(commentId)
    );
    comments.splice(findIndex, 1, newComment);

    res
      .status(200)
      .json({ message: "Update comment successful", updatedComment });
  }
}
