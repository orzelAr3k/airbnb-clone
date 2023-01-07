import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UsersIcon,
  GlobeAltIcon,
  Bars3BottomRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

export default function Header({placeholder}: any) {
  const [searchInputClick, setSearchInputClick] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const resetInput = () => {
    setSearchInput("");
    setSearchInputClick(false);
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: noOfGuest
      }
    })
  }


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md gap-x-5 p-5">
      <div className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="/airbnb.webp"
          alt="logo"
          className="object-contain object-left"
          fill={true}
        />
      </div>

      {/* Search */}
      <div className="flex items-center justify-between border-2 rounded-full p-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onClick={(e) => setSearchInputClick(true)}
          className="flex-grow bg-transparent outline-none overflow-clip text-ellipsis"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex w-8 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex hover:cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 hover:cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:cursor-pointer">
          <Bars3BottomRightIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInputClick && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex content-between items-center border-b-2 mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guest</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(parseInt(e.target.value))} />
          </div>
          <div className="flex justify-between items-center">
            <button
              className="border-2 px-10 py-2 rounded-full 
                        hover:bg-gray-100 active:scale-95"
              onClick={resetInput}
            >Cancel</button>
            <button
              className="border-2 px-10 py-2 text-red-500 
                          rounded-full hover:bg-gray-100 
                          active:scale-95"
              onClick={search}
            >Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
