"use client";
import FastMarquee from "react-fast-marquee";

const MarqueeSection = () => {
  const content =
    "New Arrivals: Midnight Marble & Slate | Weekly Feature: Tuscan Terracotta Series | Join the Aura Community for Exclusive Design Inspiration | 15% Off Your First Order with Code: AURA15 | Sustainable Flooring Solutions for Modern Homes |";

  return (
    <div className="flex items-center w-full md:w-11/12 lg:w-9/12 bg-base-200 py-2 sm:py-3 mx-auto mt-5 px-2 md:px-0 rounded-lg shadow-sm border border-divider/50 mb-5">
      <div className="shrink-0 ml-1 sm:ml-4 mr-2 sm:mr-6">
        <button className="bg-[#e7ad81] text-white text-[10px] sm:text-xs py-1 px-2 sm:px-4 font-bold uppercase tracking-widest rounded-sm shadow-sm pointer-events-auto">
          Aura Tiles
        </button>
      </div>

      <div className="grow overflow-hidden text-xs sm:text-sm md:text-base pointer-events-auto">
        <FastMarquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="font-medium text-foreground/80"
        >
          <span className="font-bold tracking-wide">
            &nbsp; {content} &nbsp;
          </span>
          <span className="font-bold tracking-wide">
            &nbsp; {content} &nbsp;
          </span>
        </FastMarquee>
      </div>
    </div>
  );
};

export default MarqueeSection;
