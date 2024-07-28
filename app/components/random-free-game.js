"use client";
import { useEffect, useState } from "react";
import FreeGameItem from "./freeGame-item";

export default function RandomFreeGame() {
  const [freeGame, setFreeGame] = useState([]);
  let lastRequestTime = 0;
  const minTimeBetweenRequests = 1000; // 1 second

  async function getFreeGame() {
    try {
      const now = Date.now();
      if (now - lastRequestTime < minTimeBetweenRequests) {
        await new Promise((resolve) =>
          setTimeout(resolve, minTimeBetweenRequests - (now - lastRequestTime))
        );
      }
      lastRequestTime = Date.now();

      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            "X-RapidAPI-Key":
              "723f44bbcemsh9725090c1fd79f9p1de329jsnb539f62e2387",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch free games");
      }
      const data = await response.json();
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomGame = data[randomIndex];

      setFreeGame(randomGame);
      // console.dir(randomGame);
      // console.dir(randomGame.id);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    getFreeGame();
  }, []);

  return (
    <div>
      <FreeGameItem gameObj={freeGame} onTryAnother={getFreeGame} />
    </div>
  );
}
