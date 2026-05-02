
import { Button } from "@heroui/react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-5 md:px-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative w-full max-w-125 mx-auto lg:mx-0 pb-12 pr-12">
          <img
            src="https://bracketweb.com/floenswp/wp-content/uploads/2024/01/about-2-1.jpg"
            alt="Tile manufacturing process"
            className="w-full object-cover rounded-tl-[50px] rounded-br-[50px] shadow-lg"
          />

          <img
            src="https://bracketweb.com/floenswp/wp-content/uploads/2024/01/about-2-2.jpg"
            alt="Modern tile interior"
            className="absolute bottom-0 right-0 w-[60%] aspect-square object-cover border-10px border-white rounded-tr-[40px] rounded-bl-[40px] shadow-2xl z-10"
          />

          <div className="absolute top-10 -left-6 md:-left-12 bg-[#2A1E17] text-white py-3 px-6 rounded-full shadow-xl flex items-center gap-3 z-20">
            <span className="font-bold text-sm md:text-base tracking-widest">
              EST. 1998
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#A86A4C] rounded-full"></div>
            <span className="text-sm font-bold text-[#A86A4C] tracking-widest uppercase">
              Get To Know Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2A1E17] leading-[1.15] mb-6">
            Crafting Elegance <br className="hidden md:block" />
            Through Premium Tiles.
          </h2>

          <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">
            At Aura Tiles, we believe that every space deserves to be a
            masterpiece. For over two decades, we have been sourcing and
            crafting the finest ceramic, porcelain, and natural stone tiles to
            transform homes and commercial spaces across the country.
          </p>

          <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
            Our commitment to quality, sustainable manufacturing, and
            cutting-edge design ensures that your floors and walls will stand
            the test of time.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#A86A4C]" size={20} />
              <span className="font-bold text-[#2A1E17]">
                Exclusive & Modern Designs
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#A86A4C]" size={20} />
              <span className="font-bold text-[#2A1E17]">
                Highly Durable Materials
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#A86A4C]" size={20} />
              <span className="font-bold text-[#2A1E17]">
                Expert Installation Support
              </span>
            </div>
          </div>

          <Button className="bg-[#2A1E17] text-white font-bold tracking-wider px-8 py-6 rounded-full hover:bg-[#A86A4C] transition-colors">
            Discover Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
