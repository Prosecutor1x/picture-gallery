import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="flex h-screen justify-center items-center">
    <h1 className="text-2xl font-bold ">Welcome To  Gallery</h1>
    </div>
    <Footer/>
    </>
  );
}
