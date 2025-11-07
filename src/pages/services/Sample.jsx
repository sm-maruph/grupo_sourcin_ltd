import React from "react";
import ServiceSection from "../../components/ServiceSection";

export default function Sample() {
  const images = [
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss1.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss2.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss3.webp",
    "https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss4.webp",
  ];

  return (
    <div className="max-w-screen mx-auto py-5  bg-accent">
      <ServiceSection
        title="SAMPLE SECTION"
        description="WE OPERATE A DEDICATED WOVEN SAMPLE SECTION ENSURES FAST TURNAROUND AND RELIABLE SUPPORT, HELPING CLIENTS BRING IDEAS TO LIFE WITH SPEED AND PRECISION."
        images={images}
      />
    </div>
  );
}
