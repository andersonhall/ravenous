import "./SearchBar.css";
import { useState } from "react";

const options = {
  "Best Match": "best_match",
  "Highest Rated": "highest_rated",
  "Most Reviewed": "most_reviewed",
};

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [sortOption, setSortOption] = useState("best_match");

  const handleSort = (e) => {
    e.preventDefault();
    setSortOption(e.target.id);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(
      `Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortOption}`
    );
  };

  return (
    <div className="search-bar">
      <div className="sorting-options">
        {Object.entries(options).map(([text, value], idx) => {
          return (
            <button
              className={`sorting-btn ${sortOption === value ? "current" : ""}`}
              key={idx}
              id={value}
              onClick={handleSort}
            >
              {text}
            </button>
          );
        })}
      </div>
      <form className="search-bar-form">
        <input
          type="text"
          name="search-bar-term"
          placeholder="Search Businessess"
          onChange={handleSearchTermChange}
        />
        <input
          type="text"
          name="search-bar-location"
          placeholder="Where?"
          onChange={handleLocationChange}
        />
        <button className="search-bar-btn" onClick={handleSearch}>
          Let's Go
        </button>
      </form>
    </div>
  );
}
