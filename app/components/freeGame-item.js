import Link from "next/link";

export default function FreeGameItem({ gameObj, onTryAnother }) {
  //styling part for reference
  let bottomStyle = "text-blue-500 hover:underline flex-1";
  let displayBoxStyle = "p-4 border border-gray-200 rounded-md shadow-sm";
  let headingStyle = "text-xl font-bold mb-2";
  let imgStyle = "mx-auto w-100 h-100 object-contain mb-4";
  let textStyle = "text-gray-500 mb-4";

  //define gameObj
  const {
    title = "Unknown Game",
    developer = "Unknown Developer",
    game_url = "#",
    platform = "Unknown",
    release_date = "Unknown",
    id,
    genre = "No genre available",
    short_description = "No description available",
    thumbnail,
  } = gameObj || {};

  return (
    <div key={id} className={displayBoxStyle}>
      <h2 className={headingStyle}>
        Try a Free Game: <span className="text-yellow-400">{title}</span>
      </h2>
      <div className={`${textStyle} flex`}>
        <p className="flex-1">Genre: {genre}</p>
        <p className="flex-1">Developer:{developer}</p>
        <p className="flex-1">Platform: {platform}</p>
        <p className="flex-1">Release Date: {release_date}</p>
      </div>
      <img
        src={thumbnail}
        alt={title}
        className={imgStyle}
        onClick={() => {
          window.location.href = game_url;
        }}
      />
      <p className={textStyle}>{short_description}</p>
      <div className="flex">
        <Link href={game_url} className={bottomStyle}>
          Enjoy it now
        </Link>
        <button className={bottomStyle} onClick={onTryAnother}>
          Try another one!
        </button>
      </div>
    </div>
  );
}
