import { Button, Card, CardHeader, CardFooter, Chip } from "@heroui/react";
import Link from "next/link";
import { FaExpandAlt } from "react-icons/fa";

const TilesCard = ({ tile }) => {
  return (
    <Card className="w-full h-full flex flex-col group border-none bg-background/60 shadow-md hover:shadow-lg ">
      <div className="p-0 overflow-hidden relative h-75">
        <img
          alt={tile.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          src={tile.image}
        />

        <div className="absolute top-3 right-3 z-20">
          <Chip
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold"
            variant="flat"
          >
            ${tile.price}
          </Chip>
        </div>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
          <FaExpandAlt className="text-white text-3xl" />
        </div>
      </div>

      <CardHeader className="flex-col items-start px-4 pt-4 pb-0 grow">
        <div className="flex justify-between items-center w-full">
          <small className="text-[#C68B5F] font-bold uppercase tracking-widest text-[10px]">
            • {tile.category}
          </small>

          <div className="text-default-400 text-[10px] font-medium italic">
            {tile.dimensions}
          </div>
        </div>

        <h4 className="font-bold text-xl mt-1 group-hover:text-[#C68B5F] transition-colors">
          {tile.title}
        </h4>

        <p className="text-default-500 text-xs line-clamp-2 mt-2 leading-relaxed text-left">
          {tile.description}
        </p>
      </CardHeader>

      <CardFooter className="px-4 pb-5 pt-4 mt-auto">
        <Link href={`all-tiles`}>
          <Button className="w-full bg-[#C68B5F] text-white font-bold shadow-md hover:bg-[#dfaa82]">
            VIEW DETAILS
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TilesCard;
