import Footer from "@app/components/Footer";
import Header from "@app/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns"
import InfoCard from "@app/components/InfoCard";
import { useEffect, useState } from "react";

export default function Search() {
  const [searchResults, setSerachResults] = useState([]);
  const router = useRouter();

  const searchResultsFetch = async () => {
    const res = await fetch("/api/search");
    const data = await res.json();
    console.log(data);
    setSerachResults(() => data);
  }

  const { location, startDate, endDate, noOfGuest }: any = router.query;
  const range = `${format(new Date(startDate), "dd MMMM yyyy")} - ${format(new Date(endDate), "dd MMMM yyyy")}`;

  useEffect(() => {
    searchResultsFetch();
  }, [])

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - {noOfGuest} number of guest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 gap-3">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map((searchResult: SearchResult, index: number) => (
              <InfoCard
                key={`infocard${index}`}
                img={searchResult.img}
                location={searchResult.location}
                title={searchResult.title}
                description={searchResult.description}
                star={searchResult.star}
                price={searchResult.price}
                total={searchResult.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}