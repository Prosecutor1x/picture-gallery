import { IImageprop } from "@/types/IImage";
import React from "react";

interface imageProps {
  image: IImageprop[];
}
const CardImage = (props: imageProps) => {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 p-4" >
      {props?.image?.map((e,i) => (
        <div key={i} className="border-2 border-white rounded mb-4">
          <h1 className="text-center bg-gray-900"> {e.title}</h1>
          <img src={e.link} className="h-[20vw] w-[50vw]"/>
          <h1 className="text-center bg-gray-800">Image By : {e.member}</h1>
        </div>
      ))}
    </div>
  );
};

export default CardImage;
