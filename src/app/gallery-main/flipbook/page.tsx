"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip"; // Importing without specific types
import { useGallery } from "@/hooks/useGalleryHook";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const Flipbook: React.FC = () => {
  const { allImages } = useGallery();

  if (allImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">No images available to display.</p>
      </div>
    );
  }

  // Create content pages with two images per page
  const pages = [];

  // Cover Page
  pages.push(
    <div
      key="blank"
      className="page-cover  blank flex justify-center items-center h-full  relative"
    >
      <p className="text-[#c6982c] font-serif italic absolute top-1/2 left-1/3">
        Elegance in Every Detail
      </p>
    </div>
  );

  // Content Pages
  for (let i = 0; i < allImages.length; i += 2) {
    const image1 = allImages[i];
    const image2 = allImages[i + 1];

    pages.push(
      <div
        key={`page-${i}`}
        className="page bg-[#ff7474] flex flex-col justify-between items-center h-full p-8"
      >
        {/* Image 1 */}
        <img
          src={image1.link}
          alt="Gallery Image"
          className="w-full h-1/2 object-cover mb-2 rounded-md border-2 shadow-md "
        />
        {/* Image 2, if available */}
        {image2 && (
          <img
            src={image2.link}
            alt="Gallery Image"
            className="w-full h-1/2 object-cover mt-2 rounded-md border-2 shadow-md"
          />
        )}
      </div>
    );
  }

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen py-10 ">
      <Header />
      {/* Suppress TypeScript errors for the library */}
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={400}
        height={550}
        size="stretch"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        drawShadow={true}
        flippingTime={800}
        useMouseEvents={true}
        showCover={true}
        mobileScrollSupport={true}
        startPage={0}
        style={{
          overflow: "hidden",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pages}
      </HTMLFlipBook>
      <Footer />
    </div>
  );
};

export default Flipbook;
