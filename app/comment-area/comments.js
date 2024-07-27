"use client"

import { useState } from "react";
import { useUserAuth } from "../login/_utils/auth-context";

export default function Comments() {
  const { user } = useUserAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const comment = {
        text: newComment,
        avatar: user?.photoURL || 'https://via.placeholder.com/40'
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-4 bg-gray-800 rounded-none shadow-none">
        <header className="text-xl font-semibold mb-4 text-center">Comments</header>
        <div className="mb-4 space-y-2 max-h-60 overflow-y-auto">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-2 p-3 bg-gray-700 border border-gray-600 rounded-none">
              <img src={comment.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div>{comment.text}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <textarea
            value={newComment}
            onChange={handleInputChange}
            placeholder="Add a comment"
            rows={4}
            cols={50}
            className="p-2 border border-gray-600 bg-gray-900 text-white rounded-none resize-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-none hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
