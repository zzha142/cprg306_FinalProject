import Link from "next/link";

export default function FreeGameItem({ gameObj }) {
  const {
    name = "Unknown Game",
    id,
    category = "Uncategorized",
    description = "No description available",
  } = gameObj || {};

  const href = id ? `/games/${id}` : "#";

  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-500 mb-4">Category: {category}</p>
      <Link href={href} className="text-blue-500 hover:underline">
        Enjoy it now
      </Link>
    </div>
  );
}
