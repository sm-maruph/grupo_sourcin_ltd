import React from "react";
import ServiceSection from "../../components/ServiceSection";

export default function Knit() {
  const images = [
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks1.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks2.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks3.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ks/ks4.webp",
  ];

  return (
    <div className="max-w-screen mx-auto py-5  bg-accent">
      <ServiceSection
        title="KNIT SHOWROOM"
        description="OUR KNITWEAR AND SWEATER SHOWROOMS SHOWCASE TREND‑DRIVEN, SEASON‑ORIENTED COLLECTIONS DESIGNED TO INSPIRE BUYERS AND ACCELERATE FAST‑FASHION OPPORTUNITIES."
        images={images}
      />
    </div>
  );
}
