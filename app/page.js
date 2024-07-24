"use client";

import Comments from "./comment-area/comments";
import Link from "next/link";
import GameDetail from "./components/GameDetail";

// This page is used for testing purposes, feel free to render your components here
export default function Home() {
  const title = "hades"; // This is the title of the game user want to search for

  return (
    <main>
      <h1>Final Project Template</h1>
      <Link href="/Home">Go to home page</Link>
      <GameDetail title={title} /> 
      <Comments />
    </main>
  );
}