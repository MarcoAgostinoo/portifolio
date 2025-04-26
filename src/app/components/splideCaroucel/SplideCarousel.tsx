"use client";

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css/default";

interface SplideCarouselProps {
  imageUrls: string[];
}

const SplideCarousel: React.FC<SplideCarouselProps> = ({ imageUrls }) => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 5,
      arrows: false,
      pagination: false,
      autoScroll: {
        rewind: true,
        speed: 3,
        pauseOnHover: false,
      },
      breakpoints: {
        640: { perPage: 3 },
        768: { perPage: 3 },
        1024: { perPage: 3 },
        1280: { perPage: 4 },
      },
    });

    splide.mount({ AutoScroll });
    
    // Return a cleanup function that destroys the Splide instance
    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <div ref={splideRef} className="splide w-full">
        <div className="splide__track">
          <ul className="splide__list flex gap-4">
            {imageUrls.map((url, idx) => (
              <li key={idx} className="splide__slide">
                <div className="w-full aspect-square sm:aspect-[1/] relative overflow-hidden rounded-lg">
                  <img
                    src={url}
                    alt={`Slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplideCarousel;
