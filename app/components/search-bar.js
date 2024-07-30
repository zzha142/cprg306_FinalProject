"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const inputBoxStyle =
    "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black";
  const buttonStyle =
    "ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg";

  return (
    <form action="/gameDetail" method="get" className="relative">
      <input
        type="text"
        name="title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for games"
        className={inputBoxStyle}
        required
      />
      <button type="submit" className={buttonStyle}>
        Find!
      </button>
    </form>
  );
}
