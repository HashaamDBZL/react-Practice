import { useState } from "react";
import useDebouncedCallback from "../hooks/useDebouncedCallback";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSearch = useDebouncedCallback(() => {
    console.log(`Searching for: ${query}`);
  }, 500);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch();
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
