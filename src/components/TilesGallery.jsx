"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import TilesCard from "./TilesCard";

const TilesGallery = ({ initialTiles }) => {

  const [searchInput, setSearchInput] = useState("");

  const filteredTiles = initialTiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <SearchBar handleSearch={setSearchInput} ></SearchBar>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 max-w-7xl mx-auto gap-4 px-3">

        {filteredTiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile} ></TilesCard>
        ))}

        {filteredTiles.length === 0 && (
          <p className="col-span-full text-center text-gray-400 py-10">
            No tiles found with that title.
          </p>
        )}
      </div>
    </div>
  );
};

export default TilesGallery;