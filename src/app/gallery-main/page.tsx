import MainHero from "@/components/hero/main-hero";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="flex flex-col mb-8 bg-gray-800  h-screen" >
      <Header />
      <MainHero />
      <Footer />
    </div>
  );
};

export default GalleryPage;
