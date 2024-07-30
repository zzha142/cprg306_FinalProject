"use client";
import { useEffect, useState } from "react";
import GameDetailItem from "./GameDetailItem";

export default function GameDetail({ initialTitle }) {
  const [title, setTitle] = useState(initialTitle);
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let lastRequestTime = 0;
  const minTimeBetweenRequests = 1000;

  async function fetchGameDetails() {
    try {
      const now = Date.now();
      if (now - lastRequestTime < minTimeBetweenRequests) {
        await new Promise((resolve) =>
          setTimeout(resolve, minTimeBetweenRequests - (now - lastRequestTime))
        );
      }
      lastRequestTime = Date.now();

      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?title=${encodeURIComponent(
          title
        )}`,
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
        throw new Error("Failed to fetch game details");
      }
      const data = await response.json();
      const gameData = data.find(
        (game) => game.title.toLowerCase() === title.toLowerCase()
      );
      if (!gameData) {
        throw new Error("Game not found");
      }

      setGame({
        name: gameData.title,
        image: gameData.thumbnail,
        genre: gameData.genre,
        platform: gameData.platform,
        short_description: gameData.short_description,
        game_url: gameData.game_url,
        developer: gameData.developer,
        release_date: gameData.release_date,
      });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGameDetails();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <GameDetailItem game={game} />;
}
