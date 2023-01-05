import React from "react";
import Image from "next/image";

interface ExploreData {
	img: string;
	location: string;
	distance: string;
}

export default function SmallCard({ img, location, distance }: ExploreData) {
	return (
		<div
			className="flex items-center m-2 mt-5 
                space-x-4 rounded-xl cursor-pointer 
                hover:scale-105 transition transform 
                duration-200 ease-out"
		>
			<div className="relative h-16 w-16">
				<Image className="rounded-lg" alt="" src={img} layout="fill" />
			</div>

			<div>
				<h2>{location}</h2>
        <p className="text-gray-500">{distance}</p>
			</div>
		</div>
	);
}
