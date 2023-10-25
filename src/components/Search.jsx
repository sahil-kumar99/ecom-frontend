import React from "react";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import { SEARCHPRODUCT } from "../store/actions/product";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(SEARCHPRODUCT(query.trim()));
  };

  const debouncedHandleSearch = debounce(handleSearch, 200);
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
