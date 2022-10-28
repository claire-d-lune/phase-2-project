import React from "react";

const SearchBar = ({searchTerm, setSearch}) => {
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
    <i className="circular search link icon"></i>
  </div>);
}

export default SearchBar;``