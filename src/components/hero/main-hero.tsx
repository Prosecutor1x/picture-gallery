"use client"
import React from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { useGallery } from "@/hooks/useGalleryHook";
import CardImage from "./card-iamge";

const MainHero = () => {

    const { allImages} = useGallery()

  return (
    <div className="flex flex-col space-y-4 mt-12 h-full">
      <h1 className="text-center text-2xl">Picture Gallery</h1>
      <div >
          <CardImage image={allImages}/>
      </div>
    </div>
  );
};

export default MainHero;
