import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import EditComment from "./EditComment";

const Comment = (props) => {
  const [showEditComment, setShowEditComment] = useState(false);
  const [likes, setLikes] = useState(props.comment.likes);

  const deleteComments = async (id) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/comments/${id}`,
        {
          method: "DELETE",
          headers: { token: localStorage.token },
        }
      );

      props.setComments(props.comments.filter((comment) => comment.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const modifyLikes = async (e, id, increment) => {
    e.preventDefault();

    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/comments/${id}/likes?increment=${increment}`,
        {
          method: "PUT",
          headers: { token: localStorage.token },
        }
      );

      if (increment) {
        localStorage.setItem(id, "liked");
      } else {
        localStorage.setItem(id, "disliked");
      }
      setLikes(increment ? likes + 1 : likes - 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <li
        key={props.comment.fishingReportId}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
      >
        <p className="text-base border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 mb-2">
          <span style={{ fontWeight: "bold" }}>Datum:</span>{" "}
          {props.comment.created_at}
        </p>

        <p className="text-base border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 mb-2">
          <span style={{ fontWeight: "bold" }}>Text:</span>{" "}
          {props.comment.comment_text}
        </p>

        <p className="text-base border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 mb-2">
          <span style={{ fontWeight: "bold" }}>Lajkovi:</span> {likes}
        </p>

        {localStorage.getItem(props.comment.id) !== "liked" && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full my-2 mr-2"
            onClick={(e) => modifyLikes(e, props.comment.id, true)}
          >
            <i className="fas fa-thumbs-up"></i> Like
          </button>
        )}
        {localStorage.getItem(props.comment.id) !== "disliked" && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full my-2"
            onClick={(e) => modifyLikes(e, props.comment.id, false)}
          >
            <i className="fas fa-thumbs-down"></i> Dislike
          </button>
        )}
        {jwt_decode(localStorage.token).user === props.comment.user_id && (
          <div className="">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-full mr-2"
              onClick={() => setShowEditComment(!showEditComment)}
            >
              Izmeni
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full mt-2"
              onClick={(e) => deleteComments(props.comment.id)}
            >
              Obrisi
            </button>
            {showEditComment && (
              <EditComment
                commentId={props.comment.id}
                commentText={props.comment.comment_text}
              />
            )}
          </div>
        )}
      </li>
      <br />
    </>
  );
};

export default Comment;
