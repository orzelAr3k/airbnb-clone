import Image from "next/image";
import {
	MagnifyingGlassIcon,
	UsersIcon,
	GlobeAltIcon,
	Bars3BottomRightIcon,
	UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="/../public/airbnb.webp"
					alt="logo"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>

			{/* Search */}
			<div className="flex items-center justify-between border-2 rounded-full p-2 md:shadow-sm">
				<input
					className="flex-grow bg-transparent outline-none"
					type="text"
					placeholder="Start your search"
				/>
				<MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
			</div>

			<div className="flex items-center justify-end space-x-4 text-gray-500">
				<p className="hidden md:inline-flex">Become a host</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex items-center space-x-2 border-2 p-2 rounded-full">
					<Bars3BottomRightIcon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
		</header>
	);
}
