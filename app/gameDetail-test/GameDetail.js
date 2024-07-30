"use client";

import { useState, useEffect } from "react";

export default function GameDetail({ title }) {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //try steam api
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(
            title
          )}`
        );
        const data = await response.json();
        console.log(data);

        if (data.length === 0) {
          throw new Error("Game not found");
        }

        const gameData = data[0];

        setGame({
          name: gameData.external,
          image: gameData.thumb,
          cheapest: gameData.cheapest,
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm mx-auto w-96 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">{game.name}</h2>
      {game.image && (
        <img
          src={game.image}
          alt={game.name}
          className="mx-auto mb-4 w-64 h-64 object-contain"
        />
      )}
      <p className="text-gray-700 mb-2 text-center">
        Cheapest price: ${game.cheapest}
      </p>
    </div>
  );
}
