import { Spinner } from "@heroui/react";

export default function Loading() {

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center bg-[#191923]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" className="text-pink-400" />
      </div>

        <div className="font-mono text-gray-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">
          Loading Tiles
          <span className="animate-caret-blink inline-block ml-1">...</span>
        </div>
      </div>
    </div>
  );
}
