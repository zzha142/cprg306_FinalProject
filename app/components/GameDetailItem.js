import Link from "next/link";

export default function GameDetailItem({ game }) {
  const {
    name,
    image,
    genre,
    platform,
    short_description,
    game_url,
    developer,
    release_date,
  } = game || {};

  return (
    <div className="rounded-md shadow-sm mx-auto w-auto bg-gray-800 p-4">
      <h2 className="text-2xl font-bold mb-2 text-center text-white">{name}</h2>
      <p className="text-gray-400 mb-8 text-center">{short_description}</p>
      {image && (
        <img
          src={image}
          alt={name}
          className="mx-auto w-full max-w-md h-auto object-contain mb-8"
        />
      )}
      <p className="text-gray-400 mb-1 text-center">Genre: {genre}</p>
      <p className="text-gray-400 mb-1 text-center">Platform: {platform}</p>
      <p className="text-gray-400 mb-1 text-center">Developer: {developer}</p>
      <p className="text-gray-400 mb-2 text-center">
        Release Date: {release_date}
      </p>
      <div className="text-center">
        <Link href={game_url} className="text-blue-500 hover:underline">
          Play Now
        </Link>
      </div>
    </div>
  );
}
