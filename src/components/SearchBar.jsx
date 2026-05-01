"use client";
import { Button, SearchField } from "@heroui/react";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-5xl mx-5 md:mx-10 lg:mx-auto">
      <SearchField aria-label="Search Tiles">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full sm:w-70"
            placeholder="Search by title..."
          />
          <Button
            onClick={() => handleSearch(value)}
            variant="ghost"
          >
            <Search size={20} />
          </Button>
        </SearchField.Group>
      </SearchField>
    </div>
  );
};

export default SearchBar;