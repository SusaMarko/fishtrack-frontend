import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import CommentInput from "./CommentInput";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports/${props.fishingReportId}/comments`,
      {
        headers: { token: localStorage.token },
      }
    );
    const data = await res.json();
    setComments(data);
  };

  const deleteComments = async (id) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/comments/${id}`,
        {
          method: "DELETE",
          headers: { token: localStorage.token },
        }
      );

      setComments(comments.filter((comment) => comment.id !== id));
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
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <CommentInput fishingReportId={props.fishingReportId} />
      <ul className="mt-4">
        {comments.map((comment) => {
          return (
            <li
              key={comment.fishingReportId}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            >
              <p className="text-sm text-gray-600">
                Datum: {comment.created_at}
              </p>
              <p className="text-base">Text: {comment.comment_text}</p>
              <p className="text-sm text-gray-600">Lajkovi: {comment.likes}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full my-2"
                onClick={(e) => modifyLikes(e, comment.id, true)}
              >
                <i className="fas fa-thumbs-up"></i> Like
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full my-2"
                onClick={(e) => modifyLikes(e, comment.id, false)}
              >
                <i className="fas fa-thumbs-down"></i> Dislike
              </button>
              {jwt_decode(localStorage.token).user === comment.user_id && (
                <div className="mt-4">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-full">
                    Izmeni
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full mt-2"
                    onClick={(e) => deleteComments(comment.id)}
                  >
                    Obrisi
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
