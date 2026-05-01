import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaRulerCombined, FaLayerGroup } from "react-icons/fa";

export const generateMetadata = async ({params}) => {

  const {id} = await params;

  const res = await fetch("https://tiles-db.onrender.com/tiles");
  const tiles = await res.json();
  const tile = tiles.find((t) => t.id == id);

  return {
    title: tile.title,
    description: tile.description
  }

};


const TilesDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://tiles-db.onrender.com/tiles");
  const tiles = await res.json();
  const tile = tiles.find((t) => t.id == id);

  if (!tile) return <div className="h-screen flex items-center justify-center font-bold">Tile not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="mb-8 border-b pb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Product Details</h2>
        <Link href="/all-tiles">
          <Button
            startContent={<FaArrowLeft />}
            className="font-bold bg-[#C68B5F] text-white rounded-md"
          >
            BACK TO ALL COLLECTION
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <Card className="border-none shadow-xl overflow-hidden rounded-lg">
          <Image
            src={tile.image}
            alt={tile.title}
            width={600}
            height={200}
            className="w-full h-125 object-cover transition-transform duration-700 ease-in-out hover:scale-110 overflow-hidden"
          />
        </Card>

        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tighter">{tile.title}</h1>
            <div className="flex items-center gap-4">
               <Chip variant="flat" className="bg-[#C68B5F]/10 text-[#C68B5F] font-bold uppercase">
                 {tile.category}
               </Chip>
               <span className="text-3xl font-bold text-gray-800">${tile.price}</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {tile.description}
          </p>

          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md border border-gray-100">
              <FaRulerCombined className="text-[#C68B5F] text-xl" />
              <span className="text-gray-700"><strong>Dimensions:</strong> {tile.dimensions}</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md border border-gray-100">
              <FaLayerGroup className="text-[#C68B5F] text-xl" />
              <span className="text-gray-700"><strong>Material:</strong> {tile.material}</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md border border-gray-100">
              <FaCheckCircle className="text-[#C68B5F] text-xl" />
              <span className="text-gray-700"><strong>Stock Status:</strong> {tile.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TilesDetailPage;