import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [render, setRender] = useState(false);

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

  return (
    <>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-full"
        onClick={() => setRender(!render)}
      >
        Komentari
      </button>

      {render && (
        <>
          <CommentInput fishingReportId={props.fishingReportId} />
          <ul className="mt-4">
            {comments.map((comment) => {
              return (
                <Comment
                  comments={comments}
                  setComments={setComments}
                  comment={comment}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Comments;
