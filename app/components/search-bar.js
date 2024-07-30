"use client";

export default function SearchBar({ onSearch }) {
  let inputBoxStyle =
    "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black";
  let buttonStyle =
    "ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-lg";
  //const [searchName, setSearchName] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for games"
        className={inputBoxStyle}
        required
        // onChange={handleSearch}
        // value={searchName}
      ></input>
      <button className={buttonStyle}>Find!</button>
    </div>
  );
}
