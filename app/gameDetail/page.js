"use client";

import Comments from "../components/comments";
import Link from "next/link";
import GameDetail from "../components/GameDetail";
import Login from "../components/login";

export default function GameDetailPage() {
  const title = "Rumble Fighter"; // This is the title of the game user want to search for
  const titleStyle = "text-4xl font-bold text-center pt-5 pb-5";

  return (
    <main className="relative p-4">
      <header className="relative">
        <button className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10">
          <Link href="/Home">Go Bak to home page</Link>
        </button>
        <h1 className={titleStyle}>
          Share your reviews in GameCentral Community!
        </h1>
        <Login />
      </header>

      <GameDetail title={title} />
      <Comments />
    </main>
  );
}
