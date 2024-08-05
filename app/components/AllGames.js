"use client";

import { useState } from "react";
import GameDetailItem from "./GameDetailItem";

const categories = [
  "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox",
  "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based",
  "first-person", "third-person", "top-down", "tank", "space", "sailing", "side-scroller",
  "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d",
  "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military",
  "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts",
];

export default function AllGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  let lastRequestTime = 0;
  const minTimeBetweenRequests = 1000;

  async function fetchGamesForCategory(category) {
    setLoading(true);
    try {
      const now = Date.now();
      if (now - lastRequestTime < minTimeBetweenRequests) {
        await new Promise((resolve) =>
          setTimeout(resolve, minTimeBetweenRequests - (now - lastRequestTime))
        );
      }
      lastRequestTime = Date.now();

      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            "X-RapidAPI-Key": "723f44bbcemsh9725090c1fd79f9p1de329jsnb539f62e2387",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch games for category ${category}`);
      }
      const data = await response.json();
      const formattedGames = data.map(game => ({
        name: game.title,
        image: game.thumbnail,
        genre: game.genre,
        platform: game.platform,
        short_description: game.short_description,
        game_url: game.freetogame_profile_url,
        developer: game.developer,
        release_date: game.release_date,
      }));
      setGames(formattedGames);
    } catch (error) {
      console.error("Error fetching games:", error);
      setGames([]);
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchGamesForCategory(category);
  };

  return (
    <div className="all-games">
      <h2 className="text-3xl font-bold text-center pt-5 pb-5">All Categories</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-blue-700 text-white' : 'bg-gray-500'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h3 className="text-2xl font-bold text-center pt-5 pb-5">
            {selectedCategory.toUpperCase()} Games
          </h3>
          {loading ? (
            <p className="text-center">Loading games...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {games.map((game) => (
                <GameDetailItem key={game.name} game={game} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}