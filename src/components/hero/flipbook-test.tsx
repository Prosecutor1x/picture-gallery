"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import { useGallery } from "@/hooks/useGalleryHook";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const Flipbook2: React.FC = () => {
  const { allImages } = useGallery();

  if (allImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#2C2C2C]">
        <p className="text-[#D0B17A] text-2xl font-serif">No images available to display.</p>
      </div>
    );
  }

  // Create content pages with four images per spread (two per page)
  const pages = [];

  // Cover Page (left side of first spread)
  pages.push(
    <div key="cover" className="page cover flex flex-col justify-center items-center h-full bg-[#2C2C2C]">
      <h1 className="text-5xl font-serif text-[#D0B17A] mb-4">Luxury Living</h1>
      <p className="text-2xl font-serif text-[#A89366]">Curated Furniture Collection</p>
    </div>
  );

  // Blank page (right side of first spread)
  pages.push(
    <div key="blank" className="page blank flex justify-center items-center h-full bg-[#F5F5F5]">
      <p className="text-[#8B7D5B] font-serif italic">Elegance in Every Detail</p>
    </div>
  );

  // Content Pages
  for (let i = 0; i < allImages.length; i += 4) {
    // Left page
    pages.push(
      <div key={`page-${i}-left`} className="page bg-[#F5F5F5] flex flex-col justify-between items-center h-full p-8">
        <div className="w-full h-[45%] mb-6">
          <img
            src={allImages[i]?.link}
            alt="Luxury Furniture"
            className="w-full h-full object-cover rounded-sm shadow-md"
          />
          <p className="text-[#4A4A4A] font-serif mt-2 text-sm">{allImages[i]?.title || "Exquisite Design"}</p>
        </div>
        {allImages[i + 1] && (
          <div className="w-full h-[45%]">
            <img
              src={allImages[i + 1].link}
              alt="Luxury Furniture"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
            <p className="text-[#4A4A4A] font-serif mt-2 text-sm">{allImages[i + 1]?.title || "Timeless Elegance"}</p>
          </div>
        )}
      </div>
    );

    // Right page
    pages.push(
      <div key={`page-${i}-right`} className="page bg-[#F5F5F5] flex flex-col justify-between items-center h-full p-8">
        {allImages[i + 2] && (
          <div className="w-full h-[45%] mb-6">
            <img
              src={allImages[i + 2].link}
              alt="Luxury Furniture"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
            <p className="text-[#4A4A4A] font-serif mt-2 text-sm">{allImages[i + 2]?.title || "Sophisticated Comfort"}</p>
          </div>
        )}
        {allImages[i + 3] && (
          <div className="w-full h-[45%]">
            <img
              src={allImages[i + 3].link}
              alt="Luxury Furniture"
              className="w-full h-full object-cover rounded-sm shadow-md"
            />
            <p className="text-[#4A4A4A] font-serif mt-2 text-sm">{allImages[i + 3]?.title || "Modern Luxury"}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#2C2C2C] flex flex-col justify-center items-center min-h-screen py-10">
      <Header />
      <div className="my-8">
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={1000}
          height={700}
          size="stretch"
          minWidth={700}
          maxWidth={1200}
          minHeight={500}
          maxHeight={900}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl rounded-sm overflow-hidden"
          startPage={0}
          style={{ backgroundColor: "#2C2C2C" }}
        >
          {pages}
        </HTMLFlipBook>
      </div>
      <Footer />
    </div>
  );
};

export default Flipbook2;

