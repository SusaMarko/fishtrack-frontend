import React, { useState } from "react";

const CommentInput = (props) => {
  const [commentText, setCommentText] = useState("");

  const handleButtonClicked = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const reqBody = {
        commentText,
      };

      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports/${props.fishingReportId}/comments`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(reqBody),
        }
      );

      window.location = "/reports";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-input">
        <input
          type="text"
          placeholder="Napisi komentar..."
          className="comment-text border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
        onClick={(e) => handleButtonClicked(e)}
      >
        Napravi komentar
      </button>
    </div>
  );
};

export default CommentInput;
