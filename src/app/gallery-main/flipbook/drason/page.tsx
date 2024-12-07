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
      key="blank-3"
      className="page flex justify-center items-center h-full  relative"
    >
      {/* <p className=" font-seriffont-bold text-2xl italic absolute left-1/3 top-10 text-center   text-white">
        Drason Smith
      </p> */}
      <img
      src="/cover7.jpg"
      className=" object-cover  h-full w-full"
    />
    </div>
  );

  pages.push(
    <div
      key="blank-4"
      className="page-cover flex justify-center items-center h-full  relative"
    >
     <img
      src="/sscover.jpg"
      className=" object-cover  w-full h-full"
    />
    </div>
  );

  // Content Pages

 // Filter the images with member "RJ"
const filteredImages = allImages.filter((e) => e.member === "Drason Smith");

for (let i = 0; i < filteredImages.length; i += 2) {
  // Determine the images for the current page
  const image1 = filteredImages[i];
  const image2 = filteredImages[i + 1] || null; // Handle cases where there isn't a second image

  pages.push(
    <div
      key={`page-${i}`}
      className="page bg-[#ff7474] flex flex-col justify-between items-center h-full p-2"
    >
      {/* Image 1 */}
      {image1 && (
        <img
          src={image1.link}
          alt="Gallery Image"
          className="w-full h-1/2 object-cover mb-2 rounded-md border shadow-md"
        />
      )}

      {/* Image 2, if available */}
      {image2 && (
        <img
          src={image2.link}
          alt="Gallery Image"
          className="w-full h-1/2 object-cover mt-2 rounded-md border shadow-md"
        />
      )}
    </div>
  );
}


  pages.push(
    <div
      key="blank-6"
      className="page-cover flex justify-center items-center h-full  relative"
    >
      {/* <p className=" font-seriffont-bold text-2xl italic absolute left-1/3 top-10 text-center   text-white">
        Drason Smith
      </p>  */}
      <img
      src="/cover7.jpg"
      className=" object-cover w-full h-full"
    />
    </div>
  );

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen py-10 ">
      <Header />
      {/* Suppress TypeScript errors for the library */}
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={750}
        height={900}
        // size="stretch"
        minWidth={300}
        maxWidth={900}
        minHeight={400}
        maxHeight={1000}
        drawShadow={true}
        flippingTime={600}
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
