import { useState, useEffect, useRef } from "react";

const IMAGES = [
  {
    src: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/banners/b1.png",
    alt: "Banner 1",
  },
  {
    src: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/banners/b2.png",
    alt: "Banner 2",
  },
  {
    src: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/banners/b3.png",
    alt: "Banner 1",
  },
];

export default function HeroBanner({
  images = IMAGES,
  interval = 2000, // ms
  showArrows = true,
  showIndicators = true,
  headerHeight = "",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused, images.length, interval]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (i) => setIndex(((i % images.length) + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section
      className={`${headerHeight} ${className} w-full relative overflow-hidden select-none`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero banner"
    >
      {/* Taller heights: small screens keep compact height, desktop uses viewport-relative large heights */}
      <div className="relative h-64 sm:h-80 md:h-[85vh] lg:h-[65vh]">
        {images.map((img, i) => {
          const active = i === index;
          return (
            <figure
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform ${
                active ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
              }`}
              aria-hidden={!active}
            >
              <img
                src={img.src}
                alt={img.alt || `Slide ${i + 1}`}
                className={`w-full h-full object-fit transform transition-transform duration-[12000ms] ease-linear ${
                  active ? "scale-105" : "scale-100"
                }`}
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-family='Arial' font-size='20'>Image unavailable</text></svg>`
                    );
                }}
              />
            </figure>
          );
        })}
      </div>

      {/* arrows */}
{showArrows && (
  <>
    <button
      onClick={prev}
      aria-label="Previous slide"
      className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/40 dark:bg-black/40 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white rounded-full p-3 shadow-lg focus:outline-none"
    >
      ‹
    </button>

    <button
      onClick={next}
      aria-label="Next slide"
      className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/40 dark:bg-black/40 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white rounded-full p-3 shadow-lg focus:outline-none"
    >
      ›
    </button>
  </>
)}


      {/* indicators */}
      {showIndicators && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                i === index ? "w-10 bg-white dark:bg-gray-200 shadow" : "w-2 bg-white/60 dark:bg-black/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
