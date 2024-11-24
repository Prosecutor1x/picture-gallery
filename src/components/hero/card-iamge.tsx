import React, { useState, useEffect } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { IImageprop } from "@/types/IImage";

interface ImageProps {
  image: IImageprop[]; // Assuming IImageprop includes properties like link, etc.
}

const CardImage: React.FC<ImageProps> = ({ image }) => {
  const [photos, setPhotos] = useState<{ src: string; width: number; height: number }[]>([]);
  const [fullscreenImage, setFullscreenImage] = useState<string|null>(null); // Track fullscreen image

  useEffect(() => {
    const loadImageDimensions = async () => {
      const promises = image.map((img) => {
        return new Promise<{ src: string; width: number; height: number }>((resolve) => {
          const imgObj = new Image();
          imgObj.src = img.link;
          imgObj.onload = () => {
            resolve({ src: img.link, width: imgObj.width, height: imgObj.height });
          };
          imgObj.onerror = () => {
            // Fallback dimensions in case of an error
            resolve({ src: img.link, width: 700, height: 600 });
          };
        });
      });

      const results = await Promise.all(promises);
      setPhotos(results);
    };

    loadImageDimensions();
  }, [image]);

  return (
    <div className="p-4">
      {/* Masonry Photo Album */}
      <MasonryPhotoAlbum
        photos={photos}
        onClick={(e) => setFullscreenImage(e.photo.src)} 
                      // Show image in fullscreen on click
      />

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)} // Close fullscreen on click
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen Image"
            className="max-w-full max-h-full rounded-md border-2 border-white"
          />
          <button
            className="absolute top-5 right-5 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-600"
            onClick={() => setFullscreenImage(null)} // Close fullscreen on button click
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CardImage;
