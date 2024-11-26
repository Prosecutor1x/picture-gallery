import { db } from "@/config/firebase.config";
import { IImageprop } from "@/types/IImage";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { useToast } from "@/hooks/shared/useToast"; // Import the reusable toast hook

export const useGallery = () => {
  const [allImages, setAllImages] = useState<IImageprop[]>([]);
  const collectionName = "images";
  const showToast = useToast();

  // Fetch Images
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const updatedImages: IImageprop[] = snapshot.docs.map((doc) => ({
          ...(doc.data() as IImageprop),
          id: doc.id,
        }));
        
        setAllImages(updatedImages);
      },
      (error) => {
        console.error("Error fetching images:", error);
        showToast({
          message: "Error fetching images",
          status: "error",
        });
      }
    );

    return () => unsubscribe();
  }, [showToast]);

  // Add Image
  const addImage = useCallback(
    async (data: IImageprop) => {
      try {
        await addDoc(collection(db, collectionName), { ...data });
        showToast({
          message: "New Image Added",
          status: "success",
        });
      } catch (e) {
        console.error("Error adding image:", e);
        showToast({
          message: "Error adding image",
          status: "error",
        });
      }
    },
    [showToast]
  );

  // Update Image
  const updateImage = useCallback(
    async (id: string, updatedData: Partial<IImageprop>) => {
      try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, updatedData);
        showToast({
          message: "Image Updated Successfully",
          status: "success",
        });
      } catch (e) {
        console.error("Error updating image:", e);
        showToast({
          message: "Error updating image",
          status: "error",
        });
      }
    },
    [showToast]
  );

  // Delete Image
  const deleteImage = useCallback(
    async (id: string) => {
      try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        showToast({
          message: "Image Deleted Successfully",
          status: "success",
        });
      } catch (e) {
        console.error("Error deleting image:", e);
        showToast({
          message: "Error deleting image",
          status: "error",
        });
      }
    },
    [showToast]
  );

  return {
    allImages,
    addImage,
    updateImage,
    deleteImage,
  };
};
