import { useContext, useEffect, useRef } from "react";

import SearchIcon from '@mui/icons-material/Search';

import { KaraokeContext } from "../context/karaoke-context";
import { debounce } from "../helpers/common";

const SearchBar = () => {
  const searchInput = useRef(null);
  const { setQuery, setResults } = useContext(KaraokeContext);

  const getResults = debounce((query) => {
  });

  const searchInputHandler = (event) => {
    event.preventDefault();
    const query = event.target.value;
    getResults(query);
  };

  useEffect(() =>
    document.addEventListener("keydown", (event) => {
      if (event.key == "/" && event.ctrlKey) {
        searchInput.current.focus();
      }
    })
  );

  return (
    <div className="input-group">
      <span className="input-group-text rounded-start ">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="form-control border shadow-none"
        id="search-bar"
        placeholder="Search Songs..."
        autoFocus
        onInput={searchInputHandler}
        ref={searchInput}
      />
      <span className="input-group-text bg-none rounded-end ">Ctrl + /</span>
    </div>
  );
};

export default SearchBar;
