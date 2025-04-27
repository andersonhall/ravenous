import { yelpSearch } from "../utils/yelpApi";
import "./SearchBar.css";
import { useState } from "react";

const options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar({ setBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [sortOption, setSortOption] = useState("best_match");

  const handleSort = (e) => {
    e.preventDefault();
    setSortOption(e.target.id);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.replaceAll(/[, ]/g, "_"));
    console.log(searchTerm);
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value.replaceAll(/[, ]/g, "_"));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await yelpSearch(searchTerm, searchLocation, sortOption);
    if (data) {
      setBusinesses(data);
    } else {
      console.log("No data found");
    }
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
