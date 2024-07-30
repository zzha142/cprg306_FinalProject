"use client";

import Comments from "../components/comments";
import Link from "next/link";
import GameDetail from "../components/GameDetail";

export default function GameDetailPage() {
  const title = "hades"; // This is the title of the game user want to search for

  return (
    <main>
      <h1>for Testing, used for game detail</h1>
      <Link href="/Home">Go Bak to home page</Link>
      <GameDetail title={title} />
      <Comments />
    </main>
  );
}
