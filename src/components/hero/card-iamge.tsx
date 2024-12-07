import React, { useState, useEffect } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { IImageprop } from "@/types/IImage";
import { useGallery } from "@/hooks/useGalleryHook";

interface ImageProps {
  image: IImageprop[]; // Assuming IImageprop includes properties like link, etc.
}

const CardImage: React.FC<ImageProps> = ({ image }) => {
  const [photos, setPhotos] = useState<{ src: string; width: number; height: number ; id:string }[]>([]);
  const [fullscreenImage, setFullscreenImage] = useState<{ id:string , src: string; }|null>(null); // Track fullscreen image
  const {deleteImage} = useGallery()
  

  useEffect(() => {
    const loadImageDimensions = async () => {
      const promises = image.map((img) => {
        return new Promise<{ src: string; width: number; height: number;id:string  }>((resolve) => {
          const imgObj = new Image();
          imgObj.src = img.link;
          imgObj.id = img.id as string
          imgObj.onload = () => {
            resolve({ src: img.link, width: imgObj.width, height: imgObj.height , id:img.id as string});
          };
          imgObj.onerror = () => {
            // Fallback dimensions in case of an error
            resolve({ src: img.link, width: 700, height: 600 , id:img.id as string});
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
        onClick={(e) => setFullscreenImage({
          src:e.photo.src,
          id:e.photo.id as string
        })} 
                      // Show image in fullscreen on click
      />

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)} // Close fullscreen on click
        >
          <img
            src={fullscreenImage.src}
            alt="Fullscreen Image"
            className="max-w-full max-h-full rounded-md border-2 border-white"
          />
          <button className="bg-red-200 p-4 text-black font-bold  rounded-sm border-black active:scale-95"  onClick={()=> deleteImage(fullscreenImage.id as string)}>Delete</button>
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
