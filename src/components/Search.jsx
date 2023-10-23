import React, { useState } from "react";
import debounce from "lodash/debounce";

const Search = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const handleSearch = (e) => {
  //     setSearchQuery(e.target.value.trim());
  //   };

  function handleSearch(query) {
    console.log("--query--", query);
  }

  const debouncedHandleSearch = debounce(handleSearch, 1000);
  return (
    <div className="custom-position">
      <input
        onChange={(e) => debouncedHandleSearch(e.target.value)}
        className="p-2 border border-sky-400 outline-none"
        type="text"
        name="search"
        id="search-box"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
