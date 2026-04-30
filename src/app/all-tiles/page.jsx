import TilesCard from "@/components/TilesCard";
import {
  SearchField,
} from "@heroui/react";

export const metadata = {
  title: "All Collection | Aura Tiles",
  description: "Best Tiles Shop in Bangladesh",
};

const AllTilesPage = async () => {
  const res = await fetch("https://tiles-db.onrender.com/tiles");
  const tilesData = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-400 text-center my-5 tracking-widest">
        ALL TILES COLLECTION
      </h2>

      <div className="max-w-5xl mx-5 md:mx-auto">
        <SearchField name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-full sm:w-70" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 max-w-7xl mx-auto gap-4 px-3">
        {tilesData.map((tile) => (
          <TilesCard key={tile.id} tile={tile}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
