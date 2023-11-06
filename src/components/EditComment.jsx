import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditComment = (props) => {
  const [commentText, setCommentText] = useState();

  const editComment = async (id) => {
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = {
        commentText,
      };

      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/comments/${id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body),
        }
      );
      window.location = "/reports";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="pt-10 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-black text-center">
          Izmeni komentar
        </h1>

        <div className="pt-10 flex flex-wrap justify-center items-center flex-col">
          <span className="mr-2">Tekst komentara:</span>
          <input
            type="text"
            placeholder={props.commentText}
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <br></br>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => editComment(props.commentId)}
        >
          Izmeni komentar
        </button>
      </div>
    </>
  );
};

export default EditComment;
