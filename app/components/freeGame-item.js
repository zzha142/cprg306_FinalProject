"use client";

import Link from "next/link";
import { useState } from "react";

export default function FreeGameItem({ gameObj, onTryAnother }) {
  //define gameObj
  const {
    title = "Unknown Game",
    developer = "Unknown Developer",
    game_url = "#",
    platform = "Unknown",
    release_date = "Unknown",
    id,
    genre = "No genre available",
    short_description = "No description available",
    thumbnail,
  } = gameObj || {};

  const [key, setKey] = useState(0);

  const reloadPage = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-gray-500 mb-4 flex">
        <p className="flex-1">Genre: {genre}</p>
        <p className="flex-1">Developer:{developer}</p>
        <p className="flex-1">Platform: {platform}</p>
        <p className="flex-1">Release Date: {release_date}</p>
      </div>
      <img
        src={thumbnail}
        alt={title}
        className="mx-auto w-100 h-100 object-contain mb-4"
        onClick={() => {
          window.location.href = game_url;
        }}
      />
      <p className="text-gray-700 mb-2">{short_description}</p>
      <div className="flex">
        <Link href={game_url} className="text-blue-500 hover:underline flex-1">
          Enjoy it now
        </Link>
        <button
          className="text-blue-500 hover:underline flex-1"
          onClick={onTryAnother}
        >
          Try another one!
        </button>
      </div>
    </div>
  );
}
