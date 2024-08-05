"use client";

import Login from "./components/login";
import RandomFreeGame from "./components/random-free-game";
import SearchBar from "./components/search-bar";
import AllGames from "./components/AllGames";

export default function HomePage() {
  return (
    <main className="p-4">
      <header>
        <h1 className="text-4xl font-bold text-center pt-20 pb-5">
          Welcome to Game Central !!
        </h1>
        <Login />
      </header>
      <div className="flex items-center justify-center mb-4">
        <SearchBar />
      </div>
      <div className="text-center pt-12 w-2/3 mx-auto">
        <RandomFreeGame />
      </div>
      <div className="text-center pt-12 w-2/3 mx-auto">
        <AllGames />
      </div>
    </main>
  );
}
