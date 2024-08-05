"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../login/_utils/auth-context";
import { collection, query, where } from "firebase/firestore";
import { addReviews, getReviews } from "../login/_services/comments-service";
import { db } from "../login/_utils/firebase";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-md shadow-md text-black">
        <h2 className="text-xl font-semibold mb-4">Please log in to add a new comment!</h2>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Comments({ currentGameTitle }) {
  const { user } = useUserAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function loadReviews() {
    console.log("loadReviews called", { user, currentGameTitle }); // Testing purpose
    try {
      const q = query(
        collection(db, "reviews"),
        where("gametitle", "==", currentGameTitle)
      );
      const reviews = await getReviews(q);
      console.log("Loaded reviews:", reviews); // Testing
      console.log("currentGameTitle:", currentGameTitle); // Testing
      console.log("user:", user); // Testing
      setComments(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  }

  useEffect(() => {
    loadReviews();
  }, [currentGameTitle]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleTextareaClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setShowModal(true);
      return;
    }
    if (newComment.trim() !== "") {
      const emailUsername = user?.email ? user.email.split("@")[0] : "Anonymous";
      const comment = {
        text: newComment,
        avatar: user?.photoURL || "https://via.placeholder.com/40",
        emailUsername,
        uid: user.uid,
        gametitle: currentGameTitle,
        timestamp: new Date(),
      };

      try {
        await addReviews(user.uid, currentGameTitle, comment);
        setComments([comment, ...comments]);
        setNewComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <main className="relative min-h-screen text-white p-4">
      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <header className="text-xl font-semibold mb-4 text-left text-green-500">
        Comments
      </header>
      <div className="mb-4 space-y-2 max-h-60 overflow-y-auto">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 p-3 bg-gray-700 border border-gray-600 rounded-none"
          >
            <img
              src={comment.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-bold">{comment.emailUsername}</div>
              <div>{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <textarea
          value={newComment}
          onChange={handleInputChange}
          onClick={handleTextareaClick}
          onKeyDown={handleKeyDown}
          placeholder="Add a comment"
          rows={4}
          cols={50}
          className="p-2 border border-gray-600 bg-gray-900 text-white rounded-none resize-none"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-lg w-24"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
