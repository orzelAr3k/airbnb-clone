import React from "react";
import Image from "next/image";

interface cardsData {
	img: string;
	title: string;
}

export default function MediumCard({ img, title }: cardsData) {
	return (
		<div className="cursor-pointer hover:scale-105
    transform transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image className="rounded-xl" src={img} alt="" layout="fill" />
			</div>
			<h3 className="text-2xl mt-3">{title}</h3>
		</div>
	);
}
