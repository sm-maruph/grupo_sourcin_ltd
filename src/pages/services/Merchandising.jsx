import React from "react";
import ServiceSection from "../../components/ServiceSection";

export default function Merchandising() {
  const images = [
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m1.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m2.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m3.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/m/m4.webp",
  ];

  return (
    <div className="max-w-screen mx-auto py-5  bg-accent">
      <ServiceSection
        title="MERCHANDISING"
        description="OUR MERCHANDISING TEAM WORKS HAND‑IN‑HAND WITH CLIENTS TO ENSURE ON‑TIME DELIVERY AND PREMIUM QUALITY AT EVERY STAGE."
        images={images}
      />
    </div>
  );
}
