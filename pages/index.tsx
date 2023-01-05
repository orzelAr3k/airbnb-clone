import MediumCard from "@app/components/MediumCard";
import SmallCard from "@app/components/SmallCard";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "@app/components/Banner";
import Header from "@app/components/Header";
import LargeCard from "@app/components/LargeCard";
import Footer from "@app/components/Footer";

interface ExploreData {
	img: string;
	location: string;
	distance: string;
}

const Home: NextPage<{ exploreData: ExploreData[]; cardsData: any }> = ({
	exploreData,
	cardsData,
}) => {
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="p-6">
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

				<section>
					<h2>Live Anywere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData.map((item: any, index: number) => (
							<MediumCard key={`mediumcard${index}`} img={item.img} title={item.title} />
						))}
					</div>
				</section>

        <LargeCard img="https://links.papareact.com/4cj"
          title="The Gratest Outdoors"
          description="Whishlist created by Airbnb"
          buttonText="Get Inspired"
        />

        <Footer />
			</main>
		</div>
	);
};

export async function getStaticProps() {
	const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
		(res) => res.json(),
	);

	const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
		(res) => res.json(),
	);
	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}

export default Home;
