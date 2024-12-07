"use client"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex h-screen justify-center items-center w-screen overflow-clip " > 
      <img src="/drason.png" className=" object-cover opacity-20 w-1/2 transition ease-in-out hover:opacity-100 cursor-pointer" onClick={()=>window.open('gallery-main/flipbook/drason')}/>
      <img src="/rj.png"  className=" object-cover opacity-30  hover:opacity-100 image-scale w-1/2 transition  ease-in-out cursor-pointer " onClick={()=>window.open('gallery-main/flipbook/rj')}/>

    </div>
    <Footer/>
    </>
  );
}
