"use client";

export default function SearchBar() {
  let inputBoxStyle =
    "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black";
  let buttonStyle = "absolute right-2 top-1/2 transform -translate-y-1/2";
  //const [searchName, setSearchName] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Perform search logic here
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for games"
        className={inputBoxStyle}
        required
        onChange={handleSearch}
        // value={searchName}
      ></input>
      <button className={buttonStyle}>
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
