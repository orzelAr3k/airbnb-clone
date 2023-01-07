import React from "react";
import Image from "next/image";

export default function MediumCard({ img, title }: CardsData) {
  return (
    <div className="cursor-pointer hover:scale-105
    			transform transition duration-300 ease-out">
      <div className="relative h-40 w-40 md:h-80 md:w-80">
        <Image className="rounded-xl" src={img} alt="" fill={true} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
