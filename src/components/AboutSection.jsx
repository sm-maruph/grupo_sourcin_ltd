import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="min-h-[45vh] pt-2 bg-accent py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 mt-6">
        {/* Image Section */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="shadow-2xl rounded-xl overflow-hidden w-full md:w-1/2"
        >
          <img
            src="https://www.fzfashionworld.com/wp-content/uploads/2024/07/WhatsApp-Image-2023-03-18-at-9.14.32-PM-1-1024x682.jpeg"
            alt="About"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-none backdrop-blur-xl border border-white/20 dark:border-neutral shadow-lg rounded-b-xl p-6 md:w-1/2 relative overflow-hidden"
>
  {/* Gradient Header Bar inside the card */}
  <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-gradient" />

  <h2 className="text-2xl font-heading text-heading mb-4 mt-4 relative z-10">
    Grupo Sourcing Ltd
  </h2>
  <p className="text-sm leading-relaxed font-sans text-heading relative z-10">
    “Grupo Sourcing Ltd is a leading Bangladeshi enterprise in the
    garment and apparel sourcing industry, founded in 2016 and backed by
    over 20 years of deep expertise. The company has built a strong
    reputation for quality, reliability, and innovation, serving global
    fashion retailers with a diverse portfolio that includes denim,
    heavy knits, jersey, woven fabrics, home textiles, sportswear, and
    outdoor apparel. Its vertically integrated supply chain, in-house
    quality control team, and commitment to sustainability make it a
    trusted partner in the competitive global apparel market. 
    <br /><br />
    At the heart of Grupo Sourcing’s mission is a drive to redefine efficiency,
    sustainability, and excellence in apparel sourcing. The company
    emphasizes transparency, ethical practices, and corporate
    responsibility, ensuring that every product meets international
    standards while aligning with modern sustainability goals. By
    cultivating long-term partnerships with carefully selected factories
    and brands, Grupo Sourcing positions itself as a contemporary buying
    and sourcing powerhouse, adept at customizing solutions to meet the
    unique demands of clients. 
    <br /><br />
    Looking ahead, Grupo Sourcing Ltd
    envisions becoming the most trusted partner for international
    brands, leveraging its strong market insights and sourcing
    flexibility to stay ahead of fashion trends. Its ethos of
    progressive growth and seamless collaboration reflects a
    forward-thinking approach that blends craftsmanship with innovation.
    With its combination of technical expertise, sustainability focus,
    and global perspective, Grupo Sourcing continues to strengthen
    Bangladesh’s position as a hub for world-class apparel sourcing.
  </p>
</motion.div>

      </div>
    </section>
  );
}
