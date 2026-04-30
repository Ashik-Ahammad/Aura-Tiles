"use client";
import Image from "next/image";
import { Link } from "@heroui/react";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosNavigate } from "react-icons/io";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?q=80&w=1056",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] lg:h-[85vh] overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src={slide.img}
                alt="Aura Tiles Background"
                fill
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between pointer-events-none pt-10 lg:pt-0">
        <div className="w-full lg:w-2/3 space-y-6 pointer-events-auto text-center lg:text-left mb-16 lg:mb-0">
          <div className="animate__animated animate__fadeInDown">
            <p className="text-white/70 text-xs md:text-sm font-medium uppercase tracking-widest bg-white/5 inline-block px-3 py-1 rounded backdrop-blur-sm">
              Welcome to Aura Tiles & Flooring
            </p>
          </div>

          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-xl animate__animated animate__fadeInLeft">
            PRECISION TILES & BEST FLOORING SOLUTIONS
          </h1>

          <div className="pt-6 animate__animated animate__fadeInUp animate__delay-1s">
            <Link
              href="/all-tiles"
              className="inline-flex items-center gap-3 bg-[#C68B5F] text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-[#A36D46] transition-all shadow-lg no-underline hover:no-underline"
            >
              BROWSE NOW <IoIosNavigate />
            </Link>
          </div>
        </div>

        <div className="relative lg:absolute lg:right-0 lg:bottom-1/2 lg:translate-y-1/2 w-70 h-80 md:w-100 md:h-100 animate__animated animate__fadeInRight animate__delay-1s scale-90 md:scale-100 perspective-1000px">
          <div className="absolute left-0 top-0 w-44 h-60 md:w-60 md:h-80 bg-white border-[6px] border-white shadow-2xl rounded-sm overflow-hidden transition-transform duration-700 hover:scale-105 transform-[rotateY(-20deg)_rotateX(10deg)]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661902279643-b027d844cc78?q=80&w=880"
              alt="Floor Tile"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="absolute right-0 bottom-0 w-44 h-60 md:w-60 md:h-80 bg-white border-[6px] border-white shadow-2xl rounded-sm overflow-hidden z-30 transition-transform duration-700 hover:scale-105 transform-[rotateY(-15deg)_rotateX(5deg)] mb-2">
            <Image
              src="https://images.unsplash.com/photo-1573382718969-e4e8f829f545?q=80&w=687"
              alt="Wall Tile"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-12 lg:-bottom-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 z-40 animate__animated animate__pulse animate__infinite animate__slow sm:h-2">
            <div className="flex flex-col items-center">
              <div className=" w-6 h-6 rounded-full bg-white/20 border border-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
              <div className="w-px h-8 md:h-12 bg-white/50"></div>
              <span className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl border border-gray-200">
                Modern Tiles
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 pointer-events-auto">
        <button className="custom-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center text-[10px] font-bold">
          PREV
        </button>
        <button className="custom-next w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center text-[10px] font-bold">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Banner;
