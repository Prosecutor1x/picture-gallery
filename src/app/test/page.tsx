"use client";

import { useGallery } from '@/hooks/useGalleryHook';
import React, { useState, useEffect } from 'react';

const Test: React.FC = () => {
  const { allImages } = useGallery();
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    if (allImages) {
      const extractedLinks = allImages.map((e) => e?.link).filter((link): link is string => !!link);
      setLinks(extractedLinks);
    }
  }, [allImages]);

  const handleDownload = () => {
    const blob = new Blob([links.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "image-links.txt";
    a.click();
    URL.revokeObjectURL(url); // Clean up the object URL
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Image Links Downloader</h1>
      <button
        onClick={handleDownload}
        disabled={links.length === 0}
        className={`px-6 py-2 rounded-lg text-white transition ${
          links.length > 0
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Download Links as .txt
      </button>
    </div>
  );
};

export default Test;
