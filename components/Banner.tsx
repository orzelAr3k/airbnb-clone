import Image from "next/image";
import { useState } from "react";

export default function Banner() {
	const [data, setData] = useState({ name: "" });
	const sendData = async () => {
		const res = await fetch("/api/hello", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: "test" }),
		});
		const data = await res.json();
		console.log(data);
		setData(() => data);
	};
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="https://links.papareact.com/0fm"
				alt=""
				layout="fill"
				objectFit="cover"
			/>
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-large">Not sure where to go? Perfect.</p>
				<button
					className="text-purple-500 bg-white 
								px-10 py-4 shadow-md rounded-full my-3 
								hover:shadow-xl active:scale-90 
								transition duration-150"
					onClick={() => sendData()}
				>
					I'm flexible
				</button>
				<p>{data.name}</p>
			</div>
		</div>
	);
}
