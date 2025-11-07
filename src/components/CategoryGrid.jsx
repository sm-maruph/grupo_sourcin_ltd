import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryShowrooms() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categories = [
    {
      id: 1,
      title: "WOVEN SHOWROOM",
      images: [
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws1.webp", // image 1
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws2.webp", // image 2
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws3.webp", // image 3
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws4.webp" // image 4
      ],
    },
    {
      id: 2,
      title: "KNIT SHOWROOM",
      images: [
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks1.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks2.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks3.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks4.webp",
      ],
    },
    {
      id: 3,
      title: "SAMPLE SECTION",
      images: [
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss1.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss2.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss3.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss4.webp",
      ],
    },
    {
      id: 4,
      title: "MERCHANDISING",
      images: [
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m1.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m2.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m3.webp",
        "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m4.webp",
      ],
    },
  ];

  // Each category will have its own image index
  const [imageIndexes, setImageIndexes] = useState(categories.map(() => 0));

  // Auto-slide each category’s image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((index, i) =>
          (index + 1) % categories[i].images.length
        )
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [categories]);

  return (
    <section className="bg-accent py-12 px-4 md:px-8">
      <h1 className="text-2xl md:text-2xl text-center text-heading mb-10">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((category, i) => (
          <motion.div
            key={category.id}
            className="relative rounded-2xl shadow-lg overflow-hidden bg-none border border-white/20 dark:border-neutral hover:shadow-2xl transition-transform duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-56 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={category.images[imageIndexes[i]]}
                  src={category.images[imageIndexes[i]]}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 w-full bg-primary-gradient bg-opacity-40 py-3 text-center">
              <h2 className="text-lg font-semibold text-heading">
                {category.title}
              </h2>
            </div>

            {/* Small dots for each image inside category */}
            <div className="absolute bottom-2 right-3 flex gap-1">
              {category.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    imageIndexes[i] === idx ? "bg-white" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
