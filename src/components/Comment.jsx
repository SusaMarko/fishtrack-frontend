import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import EditComment from "./EditComment";
import dateToTime from "../util/dateToTime";

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
      <div className="bg-emerald-900 mb-4">
        <li
          key={props.comment.id}
          className="border border-gray-300 rounded-md p-2 focus:outline-none"
        >
          <p className="bg-emerald-950 text-white rounded-md p-2 focus:outline-none mb-2">
            <span style={{ fontWeight: "bold" }}>Komentarisao:</span>{" "}
            {props.comment.user_name}
          </p>
          <p className="bg-emerald-950 text-white rounded-md p-2 focus:outline-none mb-2">
            <span style={{ fontWeight: "bold" }}>Datum:</span>{" "}
            {dateToTime(props.comment.created_at)}
          </p>

          <p className="bg-emerald-950 text-white rounded-md p-2 focus:outline-none mb-2">
            <span style={{ fontWeight: "bold" }}>Tekst:</span>{" "}
            {props.comment.comment_text}
          </p>

          <p className="bg-emerald-950 text-white rounded-md p-2 focus:outline-none">
            <span style={{ fontWeight: "bold" }}>Lajkovi:</span> {likes ?? 0}
          </p>

          {localStorage.getItem(props.comment.id) !== "liked" && (
            <button
              className="bg-emerald-950 border border-gray-300 hover:bg-emerald-900 text-white font-bold py-1 px-2 rounded-full my-2 mr-2"
              onClick={(e) => modifyLikes(e, props.comment.id, true)}
            >
              <i className="fas fa-thumbs-up"></i> Like
            </button>
          )}
          {localStorage.getItem(props.comment.id) !== "disliked" && (
            <button
              className="bg-emerald-950 border border-gray-300 hover:bg-emerald-900 text-white font-bold py-1 px-2 rounded-full my-2"
              onClick={(e) => modifyLikes(e, props.comment.id, false)}
            >
              <i className="fas fa-thumbs-down"></i> Dislike
            </button>
          )}
          {jwt_decode(localStorage.token).user === props.comment.user_id && (
            <div className="">
              <button
                className="bg-emerald-950 border border-gray-300 hover:bg-emerald-900 text-white font-bold py-1 px-2 rounded-full mr-2"
                onClick={() => setShowEditComment(!showEditComment)}
              >
                Izmeni
              </button>
              <button
                className="bg-emerald-950 border border-gray-300 hover:bg-emerald-900 text-white font-bold py-1 px-2 rounded-full mt-2"
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
      </div>
    </>
  );
};

export default Comment;
