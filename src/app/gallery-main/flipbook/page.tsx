"use client"
import React from 'react';
import HTMLFlipBook from 'react-pageflip'; // Importing without specific types
import { useGallery } from '@/hooks/useGalleryHook';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const Flipbook: React.FC = () => {
  const { allImages } = useGallery();

  if (allImages.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">No images available to display.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen">
        <Header/>
      {/* Suppress TypeScript errors for the library */}
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={300}
        height={500}
        size="stretch"
        minWidth={200}
        maxWidth={400}
        minHeight={300}
        maxHeight={600}
        drawShadow={true}
        flippingTime={800}
        useMouseEvents={true}
        showCover={true}
        style={{background:""}}


      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white p-4"
          >
            <img
              src={image.link}
              alt={image.title || 'Gallery Image'}
              className=" object-center mb-4"
            />
            <h2 className="text-lg font-semibold text-center">
              {image.title || 'Untitled'}
            </h2>
            <p className="text-gray-600 text-center mt-2">By: {image.member}</p>
          </div>
        ))}
      </HTMLFlipBook>
      <Footer/>
    </div>
  );
};

export default Flipbook;
