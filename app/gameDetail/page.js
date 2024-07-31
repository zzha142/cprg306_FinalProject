"use client";

import Comments from "../components/comments";
import Link from "next/link";
import GameDetail from "../components/GameDetail";
import Login from "../components/login";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function GameDetailPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const titleStyle = "text-4xl font-bold text-center pt-5 pb-5";

  return (
    <main className="relative p-4">
      <header className="relative">
        <Link
          href="/"
          className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
        >
          Back to Home
        </Link>
        <h1 className={titleStyle}>Share reviews!</h1>
        <Login />
      </header>
      <GameDetail initialTitle={title} />
      <Comments currentGameTitle={title} />
    </main>
  );
}
