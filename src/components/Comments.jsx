import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

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
      <textarea></textarea>
      {/* TODO */}
      <button>Napravi komentar</button>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.fishingReportId}>
              <p>Datum: {comment.created_at}</p>
              <p>Text: {comment.comment_text}</p>
              <p>Lajkovi: {comment.likes}</p>
              <button onClick={(e) => modifyLikes(e, comment.id, true)}>
                Like
              </button>
              <br />
              <button onClick={(e) => modifyLikes(e, comment.id, false)}>
                Dislike
              </button>
              {jwt_decode(localStorage.token).user === comment.user_id && (
                <div>
                  {/* TODO */}
                  <button>Izmeni</button>
                  <br />
                  <button onClick={(e) => deleteComments(comment.id)}>
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
