import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { name: "ZARA", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/zara.png" },
    { name: "Lefties", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/lefties.png" },
    { name: "Decimas", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/decimas.jpg" },
    { name: "Ross", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/ross.png" },
    { name: "Piazza Italia", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/pizza_italia.jpg" },
    { name: "TJ Maxx", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/tj_max.png" },
    { name: "Family Dollar", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/family_dollar.webp" },
    { name: "Bonmarche", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/bonmarce.png" },
    { name: "Mr Price", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/mr_price.png" },
    { name: "Clas Ohlson", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/clas_ohison.png" },
    { name: "Armand Thierry", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/armand.png" },
    { name: "Via Moda", img: "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/partners/via%20_moda.png" },

  ];

  return (
    <section className="bg-accent py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-heading">
          OUR <span className="text-secondary">PARTNERS</span>
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.1 },
          },
        }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              src={partner.img}
              alt={partner.name}
              className="max-h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
