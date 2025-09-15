"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type CarouselProps = {
  items: { src: string; alt?: string }[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel = ({
  items,
  autoSlide = true,
  autoSlideInterval = 5000,
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map(({ src, alt }, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-full h-[350px] bg-black"
          >
            <Image
              src={src}
              alt={alt || `Image ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        ))}
      </div>

      {/* Flèches */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-900 bg-opacity-60 text-white hover:bg-opacity-90 transition"
          aria-label="Image précédente"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-900 bg-opacity-60 text-white hover:bg-opacity-90 transition"
          aria-label="Image suivante"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Points */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === idx ? "bg-pink-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;