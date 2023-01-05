import Footer from "@app/components/Footer";
import Header from "@app/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns"
import InfoCard from "@app/components/InfoCard";

function Search({ searchResults }: any) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest }: any = router.query;
  const range = `${format(new Date(startDate), "dd MMMM yyyy")} - ${format(new Date(endDate), "dd MMMM yyyy")}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - {noOfGuest} number of guest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidde lg:inline-flex mb-5 space-x-3 space-y-3">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map((searchResult: any, index: number) => (
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

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json())
  return {
    props: {
      searchResults
    }
  }
}