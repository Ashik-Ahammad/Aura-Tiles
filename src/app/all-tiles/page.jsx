import TilesGallery from "@/components/TilesGallery";

export const metadata = {
  title: "All Collection | Aura Tiles",
  description: "Best Tiles Shop in Bangladesh",
};

 const AllTilesPage = async () => {
  
  const res = await fetch("https://tiles-db.onrender.com/tiles");
  const allTiles = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-400 text-center my-5 tracking-widest">
        ALL TILES COLLECTION
      </h2>

      <TilesGallery initialTiles={allTiles} />
    </div>
  );
}
export default AllTilesPage;