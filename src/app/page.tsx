"use client"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex h-screen justify-center items-center w-screen overflow-clip " > 
      <img src="https://cdn.discordapp.com/attachments/843621691350319145/1311095436290822185/FiveM_b2802_GTAProcess_2024-11-27_03-20-28.png?ex=67479c46&is=67464ac6&hm=f21fc8f49d44560add4ea81b80ad9661f667568f823a2723a2a3a02a9926fd6d&"  className=" object-cover opacity-20 w-1/2 transition ease-in-out hover:opacity-100 " onClick={()=>window.open('http://localhost:3000/gallery-main/flipbook/drason')}/>
      <img src="https://cdn.discordapp.com/attachments/843621691350319145/1311098690546569216/FiveM_b2802_GTAProcess_2024-11-27_04-06-44.png?ex=67479f4e&is=67464dce&hm=979f7244f6967c1c7c47c728c5bc15072e22ab2a1127c6ae077f0272d1292338&"  className=" object-cover opacity-30  hover:opacity-100 image-scale w-1/2 transition  ease-in-out  " onClick={()=>window.open('http://localhost:3000/gallery-main/flipbook/rj')}/>

    </div>
    <Footer/>
    </>
  );
}
