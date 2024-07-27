"use client";

import FreeGameItem from "../components/freeGame-item";
import Login from "../components/login";
import SearchBar from "../components/search-bar";

//may use https://www.freetogame.com/api-doc to fetch a random game
export default function HomePage() {
  const gameObj = {
    id: 1,
    name: "Awesome Free Game",
    category: "Unknown-Testing Purposes",
    description: "An exciting adventure game that you can play for free!",
  };

  const titleStyle = "text-4xl font-bold text-center pt-20 pb-5";

  return (
    <main className="p-4">
      <header>
        <h1 className={titleStyle}>Welcome to Game Central !!</h1>
        <Login />
      </header>
      <div className="flex items-center justify-center mb-4">
        <SearchBar />
      </div>
      <div className="text-center pt-12 w-2/3 mx-auto">
        <FreeGameItem key={gameObj.id} gameObj={gameObj} />
      </div>
    </main>
  );
}
