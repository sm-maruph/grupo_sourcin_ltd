import React from "react";
import ServiceSection from "../../components/ServiceSection";

export default function Woven() {
  const images = [
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws1.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws2.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws3.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ws/ws4.webp"
  ];

  return (
    <div className="max-w-screen mx-auto py-5  bg-accent">
      <ServiceSection
        title="WOVEN SHOWROOM"
        description="WE OPERATE MODERN SHOWROOMS EQUIPPED WITH THE LATEST TREND‑ORIENTED DESIGNS AND STATE‑OF‑THE‑ART FIXTURES, ENSURING AN INNOVATIVE AND CUSTOMER‑FRIENDLY SHOPPING EXPERIENCE."
        images={images}
      />
    </div>
  );
}
