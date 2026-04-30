import TilesCard from "./TilesCard";

const FeaturedTiles = async () => {
  const res = await fetch("https://tiles-db.onrender.com/tiles");
  const tilesData = await res.json();
  const topTiles = tilesData.slice(0, 4);
  console.log(topTiles);

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-400 text-center my-5">
        FEATURED TILES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 max-w-7xl mx-auto gap-4 px-3">
        {topTiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
