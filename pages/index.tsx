import MediumCard from "@app/components/MediumCard";
import SmallCard from "@app/components/SmallCard";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "@app/components/Banner";
import Header from "@app/components/Header";
import LargeCard from "@app/components/LargeCard";
import Footer from "@app/components/Footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [exploreData, setExpoloreData] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  const exploreDataFetch = async () => {
    const res = await fetch("/api/explore");
    const data = await res.json();
    setExpoloreData(() => data);
  }

  const cardsDataFetch = async () => {
    const res = await fetch("/api/cards");
    const data = await res.json();
    setCardsData(() => data);
  }

  useEffect(() => {
    exploreDataFetch();
    cardsDataFetch()
  }, [])

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="mt-10">
          <h2 className="text-4xl font-semibold pb-5">Explore Nerby</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
                          lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item: ExploreData, index: number) => (
              <SmallCard
                key={`smallcard${index}`}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-4xl font-semibold pb-5">Live Anywere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map((item: CardsData, index: number) => (
              <MediumCard key={`mediumcard${index}`} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard img="/outdoors.webp"
          title="The Gratest Outdoors"
          description="Whishlist created by Airbnb"
          buttonText="Get Inspired"
        />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
